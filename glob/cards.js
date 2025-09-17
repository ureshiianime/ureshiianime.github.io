let myList = (window.safeParseLocalStorage || function(key, def) { 
    try { return JSON.parse(localStorage.getItem(key)) || def; } 
    catch(e) { return def; }
})(MY_LIST_KEY, []);

let favorites = (window.safeParseLocalStorage || function(key, def) { 
    try { return JSON.parse(localStorage.getItem(key)) || def; } 
    catch(e) { return def; }
})(FAVORITES_KEY, []);

window.myList = myList;
window.favorites = favorites;

function getTotalEpisodes(anime) {
    let total = 0;
    for (const season of anime.seasons) {

        if (season.newEpisode && season.newEpisode.releasedEpisodes !== undefined) {
            total += season.newEpisode.releasedEpisodes;
        } else {
            total += season.episodes;
        }
    }
    return total;
}

window.updateReleasedEpisodes = function() {

    const currentDate = new Date();
    const currentDateFormatted = currentDate.toISOString().split('T')[0];
    

    for (const anime of animeData) {
        for (const season of anime.seasons) {

            if (season.newEpisode && season.newEpisode.date) {
                const originalDate = season.newEpisode.date;
                const initialDateParts = originalDate.split('-');
                
                if (initialDateParts.length === 3) {

                    const initialDate = new Date(Date.UTC(
                        parseInt(initialDateParts[0]),
                        parseInt(initialDateParts[1]) - 1,
                        parseInt(initialDateParts[2])
                    ));
                    

                    const initialDateFormatted = initialDate.toISOString().split('T')[0];
                    

                    const broadcastInterval = season.newEpisode.broadcastInterval || 7;
                    

                    const initialDateObj = new Date(initialDateFormatted);
                    const currentDateObj = new Date(currentDateFormatted);
                    

                    const timeDiff = currentDateObj.getTime() - initialDateObj.getTime();
                    const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
                    
                    let releasedEpisodes = Math.floor(daysDiff / broadcastInterval) + 1;
                    
                    if (releasedEpisodes > season.episodes) {
                        releasedEpisodes = season.episodes;
                    }
                    
                    if (releasedEpisodes < 0) {
                        releasedEpisodes = 0;
                    }
                    
                    if (currentDateFormatted < initialDateFormatted) {
                        releasedEpisodes = 0;
                    }
                    
                    season.newEpisode.releasedEpisodes = releasedEpisodes;
                }
            }
        }
    }
}

window.createAnimeCard = function(anime) {

    anime.inMyList = window.myList.includes(anime.id);
    anime.inFavorites = window.favorites.includes(anime.id);
    

    const animeCard = document.createElement('div');
    animeCard.className = 'anime-card';
    animeCard.dataset.animeId = anime.id;
    

    animeCard.innerHTML = `
        <div class="anime-poster">
            ${anime.inMyList ? `<div class="in-list-corner">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="false" role="img">
                    <path d="M18 2H6a1 1 0 0 0-1 1v17.056c0 .209.065.412.187.581a.994.994 0 0 0 1.394.233l4.838-3.455a1 1 0 0 1 1.162 0l4.838 3.455A1 1 0 0 0 19 20.056V3a1 1 0 0 0-1-1z"></path>
                </svg>
            </div>` : ''}
            <img src="${anime.poster || anime.image}" alt="${anime.title}" loading="lazy">
            <div class="anime-overlay">
                <div class="overlay-title">${anime.title}</div>
                <div class="overlay-details">
                    ${anime.seasons.length} Temporada${anime.seasons.length > 1 ? 's' : ''} | 
                    ${getTotalEpisodes(anime)} Episodio${getTotalEpisodes(anime) > 1 ? 's' : ''}
                </div>
                <div class="overlay-description">
                    ${anime.description || 'No hay descripción disponible.'}
                </div>
            </div>
        </div>
        <div class="anime-info">
            <h3>${anime.title}</h3>
            <div class="anime-subtitle">
                ${anime.subtitled && anime.dubbed ? '<span class="sub">Sub</span> | <span class="dob">Dob</span>' :
                  anime.subtitled ? '<span class="sub">Subtitulado</span>' :
                  anime.dubbed ? '<span class="dob">Doblado</span>' : ''}
            </div>
            <div class="anime-actions info-actions">
                <button class="action-button play-button" data-anime-id="${anime.id}" title="">
                    <span class="tooltip">Reproducir</span>
                    <svg class="action-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-t="play-svg" aria-hidden="false" role="img">
                        <path d="M5.944 3C5.385 3 5 3.445 5 4.22v16.018c0 .771.384 1.22.945 1.22.234 0 .499-.078.779-.243l13.553-7.972c.949-.558.952-1.468 0-2.028L6.724 3.243C6.444 3.078 6.178 3 5.944 3m1.057 2.726l11.054 6.503L7 18.732l.001-13.006"></path>
                    </svg>
                </button>
                <button class="action-button favorite-button ${anime.inFavorites ? 'in-favorites' : ''}" data-anime-id="${anime.id}" title="">
                    <span class="tooltip">${anime.inFavorites ? 'Quitar de favoritos' : 'Añadir a favoritos'}</span>
                    <svg class="action-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-t="${anime.inFavorites ? 'favorite-filled-svg' : 'favorite-svg'}" aria-hidden="true" role="img">
                        <path d="${anime.inFavorites ? 'M12.078 5.446C10.801 3.816 9.156 3 7.144 3 3.818 3 1.426 6.285 2.26 9.924c.785 3.422 4.058 7.114 9.818 11.076 5.608-3.613 8.845-7.305 9.711-11.076C22.706 5.935 20.244 3 16.965 3c-1.927 0-3.556.815-4.887 2.446z' : 'M19.84 9.476C20.442 6.858 19.07 5 16.965 5c-1.31 0-2.377.534-3.337 1.71L12.046 8.65l-1.542-1.97C9.602 5.53 8.536 5 7.144 5 5.132 5 3.658 7.07 4.21 9.477c.601 2.623 3.21 5.702 7.901 9.099 4.512-3.103 7.054-6.163 7.73-9.1zM16.965 3c3.279 0 5.741 2.935 4.824 6.924-.866 3.77-4.103 7.463-9.71 11.076-5.761-3.962-9.034-7.654-9.819-11.076C1.426 6.285 3.818 3 7.144 3c1.322 0 2.485.352 3.49 1.055l-.105.127.282.002c.456.346.879.766 1.267 1.262a7.499 7.499 0 0 1 1.264-1.236l.31.003a9.964 9.964 0 0 0-.115-.146C14.549 3.356 15.692 3 16.965 3z'}"></path>
                    </svg>
                </button>
                <button class="action-button watchlist-button ${anime.inMyList ? 'in-list' : ''}" data-anime-id="${anime.id}" title="">
                    <span class="tooltip">${anime.inMyList ? 'Eliminar de Ureshiilist' : 'Agregar a Ureshiilist'}</span>
                    <svg class="action-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-t="${anime.inMyList ? 'watchlist-filled-svg' : 'watchlist-svg'}" aria-hidden="false" role="img">
                        <path d="${anime.inMyList ? 'M18 2H6a1 1 0 0 0-1 1v17.056c0 .209.065.412.187.581a.994.994 0 0 0 1.394.233l4.838-3.455a1 1 0 0 1 1.162 0l4.838 3.455A1 1 0 0 0 19 20.056V3a1 1 0 0 0-1-1z' : 'M17 18.113l-3.256-2.326A2.989 2.989 0 0 0 12 15.228c-.629 0-1.232.194-1.744.559L7 18.113V4h10v14.113zM18 2H6a1 1 0 0 0-1 1v17.056c0 .209.065.412.187.581a.994.994 0 0 0 1.394.233l4.838-3.455a1 1 0 0 1 1.162 0l4.838 3.455A1 1 0 0 0 19 20.056V3a1 1 0 0 0-1-1z'}"></path>
                    </svg>
                </button>
            </div>
        </div>
    `;
    

    animeCard.addEventListener('click', (e) => {

        if (e.target.closest('.action-button')) {
            return;
        }
        

        window.location.href = `anime.html?id=${anime.id}`;
    });
    

    const playButton = animeCard.querySelector('.play-button');
    playButton.addEventListener('click', (e) => {
        e.stopPropagation();
        window.location.href = `anime.html?id=${anime.id}`;
    });
    

    const favoriteButton = animeCard.querySelector('.favorite-button');
    favoriteButton.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleFavorites(anime.id);
    });
    

    const watchlistButton = animeCard.querySelector('.watchlist-button');
    watchlistButton.addEventListener('click', (e) => {
        e.stopPropagation();
        if (typeof window.addToUreshiiList === 'function') {
            window.addToUreshiiList(anime.id);
        } else {
            toggleMyList(anime.id);
        }
    });
    
    return animeCard;
}


function toggleMyList(animeId) {
    const index = myList.indexOf(animeId);
    const anime = animeData.find(a => a.id === animeId);
    
    if (index === -1) {

        myList.push(animeId);
        anime.inMyList = true;
    } else {
        myList.splice(index, 1);
        anime.inMyList = false;
    }
    

    localStorage.setItem(MY_LIST_KEY, JSON.stringify(myList));
    

    const addToListButtons = document.querySelectorAll(`.add-to-list[data-anime-id="${animeId}"]`);
    addToListButtons.forEach(button => {
        if (anime.inMyList) {
            button.classList.add('in-list');
        } else {
            button.classList.remove('in-list');
        }
    });
    

    const watchlistButtons = document.querySelectorAll(`.watchlist-button[data-anime-id="${animeId}"]`);
    watchlistButtons.forEach(button => {
        if (anime.inMyList) {
            button.classList.add('in-list');
            button.querySelector('.tooltip').textContent = 'Eliminar de Ureshiilist';
            button.querySelector('svg').setAttribute('data-t', 'watchlist-filled-svg');
            button.querySelector('path').setAttribute('d', 'M18 2H6a1 1 0 0 0-1 1v17.056c0 .209.065.412.187.581a.994.994 0 0 0 1.394.233l4.838-3.455a1 1 0 0 1 1.162 0l4.838 3.455A1 1 0 0 0 19 20.056V3a1 1 0 0 0-1-1z');
        } else {
            button.classList.remove('in-list');
            button.querySelector('.tooltip').textContent = 'Agregar a Ureshiilist';
            button.querySelector('svg').setAttribute('data-t', 'watchlist-svg');
            button.querySelector('path').setAttribute('d', 'M17 18.113l-3.256-2.326A2.989 2.989 0 0 0 12 15.228c-.629 0-1.232.194-1.744.559L7 18.113V4h10v14.113zM18 2H6a1 1 0 0 0-1 1v17.056c0 .209.065.412.187.581a.994.994 0 0 0 1.394.233l4.838-3.455a1 1 0 0 1 1.162 0l4.838 3.455A1 1 0 0 0 19 20.056V3a1 1 0 0 0-1-1z');
        }
    });
    


    const animeCards = document.querySelectorAll(`.anime-card[data-anime-id="${animeId}"]`);
    animeCards.forEach(card => {
        const poster = card.querySelector('.anime-poster');
        let corner = poster.querySelector('.in-list-corner');
        
        if (anime.inMyList) {

            if (!corner) {
                corner = document.createElement('div');
                corner.className = 'in-list-corner';
                corner.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="false" role="img">
                    <path d="M18 2H6a1 1 0 0 0-1 1v17.056c0 .209.065.412.187.581a.994.994 0 0 0 1.394.233l4.838-3.455a1 1 0 0 1 1.162 0l4.838 3.455A1 1 0 0 0 19 20.056V3a1 1 0 0 0-1-1z"></path>
                </svg>`;
                poster.insertBefore(corner, poster.firstChild);
            }
        } else {

            if (corner) {
                corner.remove();
            }
        }
        

        const watchlistButton = card.querySelector('.watchlist-button');
        if (watchlistButton) {
            if (inList) {
                watchlistButton.classList.add('in-list');
                watchlistButton.querySelector('.tooltip').textContent = 'Eliminar de Ureshiilist';
                watchlistButton.querySelector('svg').setAttribute('data-t', 'watchlist-filled-svg');
                watchlistButton.querySelector('svg path').setAttribute('d', 'M18 2H6a1 1 0 0 0-1 1v17.056c0 .209.065.412.187.581a.994.994 0 0 0 1.394.233l4.838-3.455a1 1 0 0 1 1.162 0l4.838 3.455A1 1 0 0 0 19 20.056V3a1 1 0 0 0-1-1z');
            } else {
                watchlistButton.classList.remove('in-list');
                watchlistButton.querySelector('.tooltip').textContent = 'Agregar a Ureshiilist';
                watchlistButton.querySelector('svg').setAttribute('data-t', 'watchlist-svg');
                watchlistButton.querySelector('svg path').setAttribute('d', 'M17 18.113l-3.256-2.326A2.989 2.989 0 0 0 12 15.228c-.629 0-1.232.194-1.744.559L7 18.113V4h10v14.113zM18 2H6a1 1 0 0 0-1 1v17.056c0 .209.065.412.187.581a.994.994 0 0 0 1.394.233l4.838-3.455a1 1 0 0 1 1.162 0l4.838 3.455A1 1 0 0 0 19 20.056V3a1 1 0 0 0-1-1z');
            }
            

            watchlistButton.replaceWith(watchlistButton.cloneNode(true));
            const newWatchlistButton = card.querySelector('.watchlist-button');
            newWatchlistButton.addEventListener('click', (e) => {
                e.stopPropagation();
                window.addToUreshiiList(animeId);
            });
        }

        const sliderButtons = document.querySelectorAll(`.hero-slide-button.add-button[data-anime-id="${animeId}"], .fixed-buttons-container .hero-slide-button.add-button[data-anime-id="${animeId}"]`);
        sliderButtons.forEach(button => {
            if (inList) {
                button.classList.add('in-list');
                const tooltip = button.querySelector('.tooltip');
                if (tooltip) {
                    tooltip.textContent = 'Eliminar de la lista';
                }
                button.innerHTML = `<span class="tooltip">Eliminar de la lista</span><svg class="action-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18 2H6a1 1 0 0 0-1 1v17.056c0 .209.065.412.187.581a.994.994 0 0 0 1.394.233l4.838-3.455a1 1 0 0 1 1.162 0l4.838 3.455A1 1 0 0 0 19 20.056V3a1 1 0 0 0-1-1z"></path></svg>`;
            } else {
                button.classList.remove('in-list');
                const tooltip = button.querySelector('.tooltip');
                if (tooltip) {
                    tooltip.textContent = 'Agregar a Ureshiilist';
                }
                button.innerHTML = `<span class="tooltip">Agregar a Ureshiilist</span><svg class="action-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17 18.113l-3.256-2.326A2.989 2.989 0 0 0 12 15.228c-.629 0-1.232.194-1.744.559L7 18.113V4h10v14.113zM18 2H6a1 1 0 0 0-1 1v17.056c0 .209.065.412.187.581a.994.994 0 0 0 1.394.233l4.838-3.455a1 1 0 0 1 1.162 0l4.838 3.455A1 1 0 0 0 19 20.056V3a1 1 0 0 0-1-1z"></path></svg>`;
            }
            
            button.onclick = (e) => {
                e.stopPropagation();
                if (typeof window.addToUreshiiList === 'function') {
                    window.addToUreshiiList(animeId);
                } else {
                    toggleMyList(animeId);
                }
            };
        });
    });
    

    const watchlistSvgButtons = document.querySelectorAll(`[data-anime-id="${animeId}"].watchlist-button svg, [data-anime-id="${animeId}"] .watchlist-button svg`);
    watchlistSvgButtons.forEach(svg => {
        const button = svg.closest('.watchlist-button');
        if (button) {
            if (inList) {
                svg.setAttribute('data-t', 'watchlist-filled-svg');
                const path = svg.querySelector('path');
                if (path) {
                    path.setAttribute('d', 'M18 2H6a1 1 0 0 0-1 1v17.056c0 .209.065.412.187.581a.994.994 0 0 0 1.394.233l4.838-3.455a1 1 0 0 1 1.162 0l4.838 3.455A1 1 0 0 0 19 20.056V3a1 1 0 0 0-1-1z');
                }
            } else {
                svg.setAttribute('data-t', 'watchlist-svg');
                const path = svg.querySelector('path');
                if (path) {
                    path.setAttribute('d', 'M17 18.113l-3.256-2.326A2.989 2.989 0 0 0 12 15.228c-.629 0-1.232.194-1.744.559L7 18.113V4h10v14.113zM18 2H6a1 1 0 0 0-1 1v17.056c0 .209.065.412.187.581a.994.994 0 0 0 1.394.233l4.838-3.455a1 1 0 0 1 1.162 0l4.838 3.455A1 1 0 0 0 19 20.056V3a1 1 0 0 0-1-1z');
                }
            }
        }
    });
}


function toggleFavorites(animeId) {
    const index = favorites.indexOf(animeId);
    const anime = animeData.find(a => a.id === animeId);
    
    if (index === -1) {

        favorites.push(animeId);
        anime.inFavorites = true;
    } else {

        favorites.splice(index, 1);
        anime.inFavorites = false;
        

        showFavoritesNotification();
    }
    

    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    

    const favoriteButtons = document.querySelectorAll(`.favorite-button[data-anime-id="${animeId}"]`);
    favoriteButtons.forEach(button => {
        if (anime.inFavorites) {
            button.classList.add('in-favorites');
            button.querySelector('.tooltip').textContent = 'Quitar de favoritos';
            button.querySelector('svg').setAttribute('data-t', 'favorite-filled-svg');
            button.querySelector('path').setAttribute('d', 'M12.078 5.446C10.801 3.816 9.156 3 7.144 3 3.818 3 1.426 6.285 2.26 9.924c.785 3.422 4.058 7.114 9.818 11.076 5.608-3.613 8.845-7.305 9.711-11.076C22.706 5.935 20.244 3 16.965 3c-1.927 0-3.556.815-4.887 2.446z');
        } else {
            button.classList.remove('in-favorites');
            button.querySelector('.tooltip').textContent = 'Añadir a favoritos';
            button.querySelector('svg').setAttribute('data-t', 'favorite-svg');
            button.querySelector('path').setAttribute('d', 'M19.84 9.476C20.442 6.858 19.07 5 16.965 5c-1.31 0-2.377.534-3.337 1.71L12.046 8.65l-1.542-1.97C9.602 5.53 8.536 5 7.144 5 5.132 5 3.658 7.07 4.21 9.477c.601 2.623 3.21 5.702 7.901 9.099 4.512-3.103 7.054-6.163 7.73-9.1zM16.965 3c3.279 0 5.741 2.935 4.824 6.924-.866 3.77-4.103 7.463-9.71 11.076-5.761-3.962-9.034-7.654-9.819-11.076C1.426 6.285 3.818 3 7.144 3c1.322 0 2.485.352 3.49 1.055l-.105.127.282.002c.456.346.879.766 1.267 1.262a7.499 7.499 0 0 1 1.264-1.236l.31.003a9.964 9.964 0 0 0-.115-.146C14.549 3.356 15.692 3 16.965 3z');
        }
    });
    

    if (typeof displayAnimes === 'function') {
        displayAnimes();
    }
}


function showFavoritesNotification() {
    const notification = document.getElementById('favorites-notification');
    if (notification) {
        notification.classList.add('show');
        

        setTimeout(() => {
            notification.classList.remove('show');
        }, 6000);
    }
}


window.addToUreshiiList = function addToUreshiiList(animeId) {

    const URESHII_LISTS_KEY = 'anime-ureshii-lists';
    let ureshiiLists = (window.safeParseLocalStorage || function(key, def) { 
        try { return JSON.parse(localStorage.getItem(key)) || def; } 
        catch(e) { return def; }
    })(URESHII_LISTS_KEY, []);
    

    if (ureshiiLists.length === 0) {
        window.location.href = 'ureshiilists.html?action=addToList&animeId=' + animeId;
        return;
    }
    

    let addToListModal = document.getElementById('add-to-list-modal');
    if (!addToListModal) {

        addToListModal = document.createElement('div');
        addToListModal.id = 'add-to-list-modal';
        addToListModal.className = 'modal';
        

        addToListModal.innerHTML = `
            <div class="modal-content">
                <span class="close">&times;</span>
                <div class="modal-header">
                    <h3>Gestión de UreshiiListas</h3>
                </div>
                <div class="modal-body">
                    <button id="create-new-list-button" class="create-new-list-button">CREAR UNA NUEVA LISTA</button>
                    <div id="lists-container" class="lists-container">
                    </div>
                </div>
            </div>
        `;
        

        document.body.appendChild(addToListModal);
        

        addToListModal.style.display = 'flex';
        document.body.classList.add('modal-open');

    const closeButton = addToListModal.querySelector('.close');
    closeButton.addEventListener('click', () => {
        addToListModal.classList.add('fade-out');
        setTimeout(() => {
            addToListModal.style.display = 'none';
            addToListModal.classList.remove('fade-out');
            document.body.classList.remove('modal-open');
            updateVisualStateOnModalClose(animeId);
        }, 300);
    });
        

        addToListModal.addEventListener('click', (e) => {
            if (e.target === addToListModal) {
                addToListModal.classList.add('fade-out');
                setTimeout(() => {
                    addToListModal.style.display = 'none';
                    addToListModal.classList.remove('fade-out');
                    document.body.classList.remove('modal-open');
                    updateVisualStateOnModalClose(animeId);
                }, 300);
            }
        });
        

        const createNewListButton = addToListModal.querySelector('#create-new-list-button');
        createNewListButton.addEventListener('click', () => {
            window.location.href = 'ureshiilists.html?action=createList&animeId=' + animeId;
        });
    }
    

    const listsContainer = addToListModal.querySelector('#lists-container');
    listsContainer.innerHTML = '';
    
    ureshiiLists.forEach(list => {
        const listItem = document.createElement('div');
        listItem.className = 'list-item';
        
        const listInfo = document.createElement('div');
        listInfo.className = 'list-info';
        
        const listName = document.createElement('div');
        listName.className = 'list-name';
        listName.textContent = list.name;
        
        const listCount = document.createElement('div');
        listCount.className = 'list-count';
        listCount.textContent = `${list.items.length} elementos`;
        
        const listActions = document.createElement('div');
        listActions.className = 'list-actions';
        

        const addButton = document.createElement('button');
        addButton.className = 'add-to-list-button';
        

        const animeInList = list.items.includes(Number(animeId));
        

        addButton.innerHTML = `<svg class="tooltip-icon__action-icon--toIky" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-t="add-svg" aria-hidden="false" role="img" aria-labelledby="add-svg-${animeId}-${list.id}"><title id="add-svg-${animeId}-${list.id}">Añadir</title><path d="M13 3v8h8v2h-8v8h-2v-8H3v-2h8V3z"></path></svg>`;
        

        if (animeInList) {
            addButton.classList.add('in-list');
            addButton.style.opacity = '0.5';
            addButton.style.pointerEvents = 'none';
        }
        
        addButton.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            

            if (!list.items.includes(Number(animeId))) {
                list.items.push(Number(animeId));
                list.updatedAt = new Date().toISOString();
                

                localStorage.setItem(URESHII_LISTS_KEY, JSON.stringify(ureshiiLists));
                

                const MY_LIST_KEY = 'anime-my-list';
                let myList = (window.safeParseLocalStorage || function(key, def) { 
        try { return JSON.parse(localStorage.getItem(key)) || def; } 
        catch(e) { return def; }
    })(MY_LIST_KEY, []);
                if (!myList.includes(Number(animeId))) {
                    myList.push(Number(animeId));
                    localStorage.setItem(MY_LIST_KEY, JSON.stringify(myList));
                }
                

                const anime = animeData.find(a => Number(a.id) === Number(animeId));
                if (anime) {
                    anime.inMyList = true;
                }
                

                updateVisualIndicators(animeId, true);
                

                showNotification('Añadido a la lista ' + list.name);
                

                const deleteButton = listItem.querySelector('.delete-from-list-button');
                if (deleteButton) {
                    deleteButton.classList.remove('disabled');
                }
            }
            

            addToListModal.classList.add('fade-out');
            setTimeout(() => {
                addToListModal.style.display = 'none';
                addToListModal.classList.remove('fade-out');
                document.body.classList.remove('modal-open');
                updateVisualStateOnModalClose(animeId);
            }, 300);
        });
        

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-from-list-button';

        if (!animeInList) {
            deleteButton.classList.add('disabled');
        }
        
        deleteButton.innerHTML = `<svg class="custom-list-card-delete-button__icon--pENvJ" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-t="trash-svg" aria-hidden="true" role="img"><path d="M13 2h-2a1 1 0 0 0-1 1v1H4a1 1 0 0 0 0 2h1v15a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6h1a1 1 0 1 0 0-2h-6V3a1 1 0 0 0-1-1m-1 2v2h5v14H7V6h5V4zm-2 5a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0v-6a1 1 0 0 0-1-1zm4 0a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0v-6a1 1 0 0 0-1-1z"></path></svg>`;
        

        if (animeInList) {
            deleteButton.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation(); 
                

                const index = list.items.indexOf(Number(animeId));
                if (index > -1) {
                    list.items.splice(index, 1);
                    list.updatedAt = new Date().toISOString();
                    

                    localStorage.setItem(URESHII_LISTS_KEY, JSON.stringify(ureshiiLists));
                    

                    const isInAnyList = ureshiiLists.some(l => l.items.includes(Number(animeId)));
                    

                    const anime = animeData.find(a => Number(a.id) === Number(animeId));
                    if (anime) {
                        anime.inMyList = isInAnyList;
                    }
                    

                    if (!isInAnyList) {
                        const myListIndex = window.myList.indexOf(Number(animeId));
                        if (myListIndex > -1) {
                            window.myList.splice(myListIndex, 1);
                            localStorage.setItem(MY_LIST_KEY, JSON.stringify(window.myList));
                        }
                    }
                    

                    updateVisualIndicators(animeId, isInAnyList);
                    

                    showNotification('Eliminado de la lista ' + list.name);
                    

                    addToListModal.classList.add('fade-out');
                    setTimeout(() => {
                        addToListModal.style.display = 'none';
                        addToListModal.classList.remove('fade-out');
                        document.body.classList.remove('modal-open');
                        updateVisualStateOnModalClose(animeId);
                    }, 300);
                }
            });
        }
        
        listInfo.appendChild(listName);
        listInfo.appendChild(listCount);
        
        listActions.appendChild(addButton);
        listActions.appendChild(deleteButton);
        
        listItem.appendChild(listInfo);
        listItem.appendChild(listActions);
        
        listsContainer.appendChild(listItem);
    });
    

    addToListModal.style.display = 'flex';  
    document.body.classList.add('modal-open');
    

    const closeButton = addToListModal.querySelector('.close');
    closeButton.addEventListener('click', () => {
        addToListModal.classList.add('fade-out');
        setTimeout(() => {
            addToListModal.style.display = 'none';
            addToListModal.classList.remove('fade-out');
            document.body.classList.remove('modal-open');
            updateVisualStateOnModalClose(animeId);
        }, 300);
    });

    addToListModal.addEventListener('click', (e) => {
        if (e.target === addToListModal) {
            addToListModal.classList.add('fade-out');
            setTimeout(() => {
                addToListModal.style.display = 'none';
                addToListModal.classList.remove('fade-out');
                document.body.classList.remove('modal-open');
                updateVisualStateOnModalClose(animeId);
            }, 300);
        }
    });
    

    const createNewListButton = addToListModal.querySelector('#create-new-list-button');
    createNewListButton.addEventListener('click', () => {
        window.location.href = 'ureshiilists.html?action=createList&animeId=' + animeId;
    });
}


function showNotification(message) {

    let notification = document.getElementById('ureshii-notification');
    if (!notification) {
        notification = document.createElement('div');
        notification.id = 'ureshii-notification';
        notification.className = 'favorites-notification';
        notification.innerHTML = `<div class="favorites-notification-content">${message}</div>`;
        
        document.body.appendChild(notification);
    } else {
        notification.querySelector('.favorites-notification-content').textContent = message;
    }
    

    notification.classList.remove('hide');
    notification.classList.remove('show');
    

    void notification.offsetWidth;
    

    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    

    setTimeout(() => {
        notification.classList.remove('show');
        notification.classList.add('hide');
        

        setTimeout(() => {
            notification.classList.remove('hide');
        }, 300);
    }, 6000);
}


function toggleMyList(animeId) {

    addToUreshiiList(animeId);
}




function showNotification(message) {

    let notification = document.getElementById('ureshii-notification');
    if (!notification) {
        notification = document.createElement('div');
        notification.id = 'ureshii-notification';
        notification.className = 'favorites-notification';
        notification.innerHTML = `<div class="favorites-notification-content">${message}</div>`;
        
        document.body.appendChild(notification);
    } else {
        notification.querySelector('.favorites-notification-content').textContent = message;
    }
    

    notification.classList.remove('hide');
    notification.classList.remove('show');
    

    void notification.offsetWidth;
    

    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    

    setTimeout(() => {
        notification.classList.remove('show');
        notification.classList.add('hide');
        

        setTimeout(() => {
            notification.classList.remove('hide');
        }, 300);
    }, 6000);
}


function syncAnimeListState() {

    const MY_LIST_KEY = 'anime-my-list';
    const myList = (window.safeParseLocalStorage || function(key, def) { 
        try { return JSON.parse(localStorage.getItem(key)) || def; } 
        catch(e) { return def; }
    })(MY_LIST_KEY, []);
    

    if (typeof animeData !== 'undefined' && Array.isArray(animeData)) {
        animeData.forEach(anime => {

            const wasInList = anime.inMyList;
            anime.inMyList = myList.some(id => String(id) === String(anime.id));
            

            if (wasInList !== anime.inMyList) {
                updateVisualIndicators(anime.id, anime.inMyList);
            }
        });
        console.log('Estado de animes sincronizado con localStorage');
    }
}


document.addEventListener('DOMContentLoaded', function() {
    syncAnimeListState();
});


window.updateVisualIndicators = updateVisualIndicators;




window.addEventListener('storage', function(e) {

    if (e.key === 'anime-my-list' || e.key === 'anime-ureshii-lists') {
        console.log('Detectado cambio en localStorage:', e.key);
        

        syncAnimeListState();
        

        if (typeof displayAnimes === 'function') {
            displayAnimes();
        }
    }
});



function updateVisualIndicators(animeId, inList) {

    if (typeof animeData !== 'undefined' && Array.isArray(animeData)) {
        const anime = animeData.find(a => String(a.id) === String(animeId));
        if (anime) {
            anime.inMyList = inList;
        }
    }
    

    function updateSliderButton(button) {
        if (inList) {
            button.classList.add('in-list');

            const tooltip = button.querySelector('.tooltip');
            if (tooltip) {
                tooltip.textContent = 'Eliminar de la lista';
            }

            const svg = button.querySelector('svg');
            const path = svg ? svg.querySelector('path') : null;
            if (path) {
                path.setAttribute('d', 'M18 2H6a1 1 0 0 0-1 1v17.056c0 .209.065.412.187.581a.994.994 0 0 0 1.394.233l4.838-3.455a1 1 0 0 1 1.162 0l4.838 3.455A1 1 0 0 0 19 20.056V3a1 1 0 0 0-1-1z');
            }
        } else {
            button.classList.remove('in-list');

            const tooltip = button.querySelector('.tooltip');
            if (tooltip) {
                tooltip.textContent = 'Agregar a Ureshiilist';
            }

            const svg = button.querySelector('svg');
            const path = svg ? svg.querySelector('path') : null;
            if (path) {
                path.setAttribute('d', 'M17 18.113l-3.256-2.326A2.989 2.989 0 0 0 12 15.228c-.629 0-1.232.194-1.744.559L7 18.113V4h10v14.113zM18 2H6a1 1 0 0 0-1 1v17.056c0 .209.065.412.187.581a.994.994 0 0 0 1.394.233l4.838-3.455a1 1 0 0 1 1.162 0l4.838 3.455A1 1 0 0 0 19 20.056V3a1 1 0 0 0-1-1z');
            }
        }
    }
    

    function updateSliderButtons() {
        const sliderButtons = document.querySelectorAll(`.hero-slide-button.add-button[data-anime-id="${animeId}"]:not(.favorite-button), .fixed-buttons-container .hero-slide-button.add-button[data-anime-id="${animeId}"]:not(.favorite-button)`);
        
        sliderButtons.forEach(button => {
            updateSliderButton(button);
        });
        
        return sliderButtons.length > 0;
    }
    

    function setupSliderObserver() {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType === Node.ELEMENT_NODE) {

                        if (node.matches && node.matches(`.hero-slide-button.add-button[data-anime-id="${animeId}"]:not(.favorite-button)`)) {
                            updateSliderButton(node);
                        }

                        const childButtons = node.querySelectorAll ? node.querySelectorAll(`.hero-slide-button.add-button[data-anime-id="${animeId}"]:not(.favorite-button)`) : [];
                        childButtons.forEach(button => {
                            updateSliderButton(button);
                        });
                    }
                });
            });
        });
        

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
        

        setTimeout(() => {
            observer.disconnect();
        }, 5000);
    }
    

    const animeCards = document.querySelectorAll(`.anime-card[data-anime-id="${animeId}"]`);
    
    animeCards.forEach(card => {

        let cornerIndicator = card.querySelector('.in-list-corner');
        
        if (inList) {

            if (!cornerIndicator) {
                cornerIndicator = document.createElement('div');
                cornerIndicator.className = 'in-list-corner';
                cornerIndicator.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="false" role="img">
                        <path d="M18 2H6a1 1 0 0 0-1 1v17.056c0 .209.065.412.187.581a.994.994 0 0 0 1.394.233l4.838-3.455a1 1 0 0 1 1.162 0l4.838 3.455A1 1 0 0 0 19 20.056V3a1 1 0 0 0-1-1z"></path>
                    </svg>
                `;
                const posterElement = card.querySelector('.anime-poster');
                if (posterElement) {
                    posterElement.insertBefore(cornerIndicator, posterElement.firstChild);
                }
            }
        } else {

            if (cornerIndicator) {
                cornerIndicator.remove();
            }
        }
        

        const watchlistButton = card.querySelector('.watchlist-button');
        if (watchlistButton) {
            if (inList) {
                watchlistButton.classList.add('in-list');
                watchlistButton.querySelector('.tooltip').textContent = 'Eliminar de Ureshiilist';
                watchlistButton.querySelector('svg').setAttribute('data-t', 'watchlist-filled-svg');
                watchlistButton.querySelector('svg path').setAttribute('d', 'M18 2H6a1 1 0 0 0-1 1v17.056c0 .209.065.412.187.581a.994.994 0 0 0 1.394.233l4.838-3.455a1 1 0 0 1 1.162 0l4.838 3.455A1 1 0 0 0 19 20.056V3a1 1 0 0 0-1-1z');
            } else {
                watchlistButton.classList.remove('in-list');
                watchlistButton.querySelector('.tooltip').textContent = 'Agregar a Ureshiilist';
                watchlistButton.querySelector('svg').setAttribute('data-t', 'watchlist-svg');
                watchlistButton.querySelector('svg path').setAttribute('d', 'M17 18.113l-3.256-2.326A2.989 2.989 0 0 0 12 15.228c-.629 0-1.232.194-1.744.559L7 18.113V4h10v14.113zM18 2H6a1 1 0 0 0-1 1v17.056c0 .209.065.412.187.581a.994.994 0 0 0 1.394.233l4.838-3.455a1 1 0 0 1 1.162 0l4.838 3.455A1 1 0 0 0 19 20.056V3a1 1 0 0 0-1-1z');
            }
            

            watchlistButton.replaceWith(watchlistButton.cloneNode(true));
            const newWatchlistButton = card.querySelector('.watchlist-button');
            newWatchlistButton.addEventListener('click', (e) => {
                e.stopPropagation();
                addToUreshiiList(animeId);
            });
        }
    });
    

    updateSliderButtons();
    

    setupSliderObserver();
    

    requestAnimationFrame(() => {
        updateSliderButtons();
    });
    

    const updateEvent = new CustomEvent('animeListUpdated', {
        detail: { animeId: animeId, inList: inList }
    });
    document.dispatchEvent(updateEvent);
    

    setTimeout(() => {

        const heroSlider = document.querySelector('.hero-slider');
        if (heroSlider) {
            const heroButtons = heroSlider.querySelectorAll(`.hero-slide-button.add-button[data-anime-id="${animeId}"]`);
            heroButtons.forEach(button => updateSliderButton(button));
        }
        

        const fixedContainer = document.querySelector('.fixed-buttons-container');
        if (fixedContainer) {
            const fixedButtons = fixedContainer.querySelectorAll(`.hero-slide-button.add-button[data-anime-id="${animeId}"]`);
            fixedButtons.forEach(button => updateSliderButton(button));
        }
    }, 100);
    
    const watchlistSvgButtons = document.querySelectorAll(`[data-anime-id="${animeId}"].watchlist-button svg, [data-anime-id="${animeId}"] .watchlist-button svg`);
    watchlistSvgButtons.forEach(svg => {
        const button = svg.closest('.watchlist-button');
        if (button) {
            if (inList) {
                svg.setAttribute('data-t', 'watchlist-filled-svg');
                const path = svg.querySelector('path');
                if (path) {
                    path.setAttribute('d', 'M18 2H6a1 1 0 0 0-1 1v17.056c0 .209.065.412.187.581a.994.994 0 0 0 1.394.233l4.838-3.455a1 1 0 0 1 1.162 0l4.838 3.455A1 1 0 0 0 19 20.056V3a1 1 0 0 0-1-1z');
                }
            } else {
                svg.setAttribute('data-t', 'watchlist-svg');
                const path = svg.querySelector('path');
                if (path) {
                    path.setAttribute('d', 'M17 18.113l-3.256-2.326A2.989 2.989 0 0 0 12 15.228c-.629 0-1.232.194-1.744.559L7 18.113V4h10v14.113zM18 2H6a1 1 0 0 0-1 1v17.056c0 .209.065.412.187.581a.994.994 0 0 0 1.394.233l4.838-3.455a1 1 0 0 1 1.162 0l4.838 3.455A1 1 0 0 0 19 20.056V3a1 1 0 0 0-1-1z');
                }
            }
        }
    });
}



function isAnimeInAnyList(animeId) {
    const URESHII_LISTS_KEY = 'anime-ureshii-lists';
    const ureshiiLists = (window.safeParseLocalStorage || function(key, def) { 
        try { return JSON.parse(localStorage.getItem(key)) || def; } 
        catch(e) { return def; }
    })(URESHII_LISTS_KEY, []);
    return ureshiiLists.some(list => list.items.includes(Number(animeId)));
}


function updateVisualStateOnModalClose(animeId) {

    const inAnyList = isAnimeInAnyList(animeId);
    

    const anime = animeData.find(a => Number(a.id) === Number(animeId));
    if (anime) {
        anime.inMyList = inAnyList;
    }
    

    const MY_LIST_KEY = 'anime-my-list';
    let myList = (window.safeParseLocalStorage || function(key, def) { 
        try { return JSON.parse(localStorage.getItem(key)) || def; } 
        catch(e) { return def; }
    })(MY_LIST_KEY, []);
    const inMyList = myList.includes(Number(animeId));
    
    if (inAnyList && !inMyList) {

        myList.push(Number(animeId));
        localStorage.setItem(MY_LIST_KEY, JSON.stringify(myList));
    } else if (!inAnyList && inMyList) {

        const index = myList.indexOf(Number(animeId));
        if (index > -1) {
            myList.splice(index, 1);
            localStorage.setItem(MY_LIST_KEY, JSON.stringify(myList));
        }
    }
    

}


window.updateVisualStateOnModalClose = updateVisualStateOnModalClose;
