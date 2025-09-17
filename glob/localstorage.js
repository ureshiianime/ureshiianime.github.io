const MY_LIST_KEY = 'anime-my-list';
const FAVORITES_KEY = 'anime-favorites';
const URESHII_LISTS_KEY = 'anime-ureshii-lists';
const WATCHED_EPISODES_KEY = 'anime-watched-episodes';
const WATCHING_ANIMES_KEY = 'anime-watching-animes';
const SEASON_COLLAPSE_KEY = 'anime-season-collapse';



window.MY_LIST_KEY = MY_LIST_KEY;
window.FAVORITES_KEY = FAVORITES_KEY;
window.URESHII_LISTS_KEY = URESHII_LISTS_KEY;
window.WATCHED_EPISODES_KEY = WATCHED_EPISODES_KEY;
window.WATCHING_ANIMES_KEY = WATCHING_ANIMES_KEY;
window.SEASON_COLLAPSE_KEY = SEASON_COLLAPSE_KEY;



let lastKnownDataHash = null;
let driveDataCache = {};
let isDriveConnected = false;

function safeParseLocalStorage(key, defaultValue = []) {
    try {
        const item = localStorage.getItem(key);
        if (!item || item === 'null' || item === 'undefined') {
            return defaultValue;
        }
        return JSON.parse(item);
    } catch (error) {
        console.log(`Error parsing localStorage key ${key}:`, error);
        localStorage.setItem(key, JSON.stringify(defaultValue));
        return defaultValue;
    }
}

function checkDriveConnection() {
    if (typeof window.googleDrive !== 'undefined' && window.googleDrive.isConnected) {
        isDriveConnected = window.googleDrive.isConnected();
        console.log('Estado de conexión con Google Drive (centralizado):', isDriveConnected ? 'Conectado' : 'Desconectado');
        return isDriveConnected;
    }
    
    const token = localStorage.getItem('google_drive_token');
    const expiry = localStorage.getItem('google_drive_token_expiry');
    
    let hasValidToken = false;
    if (token && expiry) {
        if (Date.now() <= parseInt(expiry)) {
            hasValidToken = true;
        } else {
            console.log('Token de Google Drive expirado, limpiando...');
            localStorage.removeItem('google_drive_token');
            localStorage.removeItem('google_drive_token_expiry');
        }
    }
    
    isDriveConnected = hasValidToken;
    console.log('Estado de conexión con Google Drive (fallback):', isDriveConnected ? 'Conectado' : 'Desconectado');
    return isDriveConnected;
}

async function loadDataFromDrive(key) {
    if (!checkDriveConnection()) {
        return null;
    }
    
    try {
        if (driveDataCache[key]) {
            return driveDataCache[key];
        }
        
        if (typeof window.googleDrive !== 'undefined' && window.googleDrive.loadFromDrive) {
            await window.googleDrive.loadFromDrive();
            
            const data = localStorage.getItem(key);
            if (data) {
                try {
                    const parsedData = JSON.parse(data);
                    driveDataCache[key] = data;
                    return parsedData;
                } catch (e) {
                    console.log('Error parsing data from localStorage:', e);
                }
            }
        } else if (typeof window.loadFromDrive === 'function') {
            await window.loadFromDrive();
            
            const data = localStorage.getItem(key);
            if (data) {
                try {
                    const parsedData = JSON.parse(data);
                    driveDataCache[key] = data;
                    return parsedData;
                } catch (e) {
                    console.log('Error parsing data from localStorage:', e);
                }
            }
        }
    } catch (error) {
        console.log('Error loading from Drive:', error);
    }
    
    return null;
}

function interceptLocalStorageReads() {
    const originalGetItem = localStorage.getItem;
    const syncKeys = [MY_LIST_KEY, FAVORITES_KEY, WATCHED_EPISODES_KEY, WATCHING_ANIMES_KEY, URESHII_LISTS_KEY];
    
    localStorage.getItem = function(key) {
        if (syncKeys.includes(key) && checkDriveConnection()) {
            if (driveDataCache[key]) {
                return driveDataCache[key];
            }
            
            loadDataFromDrive(key).then(driveData => {
                if (driveData !== null) {
                    const originalSetItem = Storage.prototype.setItem;
                    originalSetItem.call(localStorage, key, driveData);
                    
                    window.dispatchEvent(new CustomEvent('driveDataLoaded', {
                        detail: { key, data: driveData }
                    }));
                }
            }).catch(error => {
                console.log('Error loading from Drive in background:', error);
            });
        }
        
        return originalGetItem.call(this, key);
    };
}

function invalidateDriveCache() {
    driveDataCache = {};
    console.log('Cache de Google Drive invalidado');
}

async function loadInitialDataFromDrive() {
    if (!checkDriveConnection()) {
        console.log('Google Drive no está conectado, usando localStorage');
        return;
    }
    
    try {
        console.log('Cargando datos iniciales desde Google Drive...');
        const syncKeys = [MY_LIST_KEY, FAVORITES_KEY, WATCHED_EPISODES_KEY, WATCHING_ANIMES_KEY, URESHII_LISTS_KEY];
        let dataLoaded = false;
        
        if (typeof window.googleDrive !== 'undefined' && window.googleDrive.isConnected()) {
            console.log('Usando sistema centralizado de Google Drive para carga inicial...');
            
            let attempts = 0;
            while (typeof gapi === 'undefined' && attempts < 10) {
                console.log('Esperando APIs de Google...');
                await new Promise(resolve => setTimeout(resolve, 500));
                attempts++;
            }
            
            if (typeof gapi !== 'undefined') {
                const driveData = await window.googleDrive.loadFromDrive();
                if (driveData) {
                    console.log('Datos cargados exitosamente desde Google Drive');
                    dataLoaded = true;
                    
                    syncKeys.forEach(key => {
                        const data = localStorage.getItem(key);
                        if (data && data !== 'null' && data !== '[]') {
                            driveDataCache[key] = data;
                        }
                    });
                }
            } else {
                console.log('APIs de Google no disponibles después de esperar');
            }
        } else {
            console.log('Sistema centralizado no disponible, verificando localStorage...');
            
            syncKeys.forEach(key => {
                const data = localStorage.getItem(key);
                if (data && data !== 'null' && data !== '[]') {
                    console.log(`Datos encontrados en localStorage para: ${key}`);
                    dataLoaded = true;
                    driveDataCache[key] = data;
                }
            });
        }
        
        if (dataLoaded) {
            window.dispatchEvent(new CustomEvent('driveDataReady', {
                detail: { source: 'drive', keys: syncKeys }
            }));
            
            console.log('Datos iniciales listos');
        } else {
            console.log('No se encontraron datos. Usando valores por defecto.');
            syncKeys.forEach(key => {
                if (!localStorage.getItem(key)) {
                    const defaultValue = key === WATCHED_EPISODES_KEY ? '{}' : '[]';
                    localStorage.setItem(key, defaultValue);
                }
            });
        }
    } catch (error) {
        console.log('Error cargando datos iniciales desde Drive:', error);
    }
}



function manualLoadFromDrive() {
    if (typeof window.googleDrive !== 'undefined' && window.googleDrive.isConnected()) {
        return window.googleDrive.loadFromDrive();
    }
    console.log('Google Drive no está conectado');
    return null;
}

function manualSaveToDrive() {
    if (typeof window.googleDrive !== 'undefined' && window.googleDrive.isConnected()) {
        return window.googleDrive.saveToDrive();
    }
    console.log('Google Drive no está conectado');
    return false;
}

function initManualSync() {
    console.log('Inicializando sistema manual de Google Drive...');
    
    if (window.googleDrive && window.googleDrive.initialize) {
        window.googleDrive.initialize().then(() => {
            console.log('Google Drive inicializado correctamente desde localstorage.js');
        }).catch(error => {
            console.error('Error al inicializar Google Drive desde localstorage.js:', error);
        });
    } else {
        console.warn('Google Drive no disponible en initManualSync');
    }
}

function showSyncNotification(message, type = 'info') {
    let notification = document.getElementById('sync-notification');
    if (!notification) {
        notification = document.createElement('div');
        notification.id = 'sync-notification';
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 12px 20px;
            border-radius: 6px;
            color: white;
            font-weight: bold;
            z-index: 10000;
            max-width: 300px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            transition: all 0.3s ease;
            transform: translateX(100%);
        `;
        document.body.appendChild(notification);
    }
    
    const colors = {
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FF9800',
        error: '#F44336'
    };
    
    notification.style.backgroundColor = colors[type] || colors.info;
    notification.textContent = message;
    notification.style.transform = 'translateX(0)';
    
    setTimeout(() => {
        if (notification) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification && notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }
    }, 3000);
}



window.safeParseLocalStorage = safeParseLocalStorage;
window.checkDriveConnection = checkDriveConnection;
window.manualLoadFromDrive = manualLoadFromDrive;
window.manualSaveToDrive = manualSaveToDrive;
window.initManualSync = initManualSync;

document.addEventListener('DOMContentLoaded', function() {
    initManualSync();
    
    setInterval(function() {
        if (checkDriveConnection()) {
            console.log('Auto-guardado ejecutándose...');
            manualSaveToDrive();
        }
    }, 2500); 
});