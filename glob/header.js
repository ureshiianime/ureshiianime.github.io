document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navCategories = document.querySelector('.nav-categories');
    
    if (menuToggle && navCategories) {
        menuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            navCategories.classList.toggle('active');
        });
        
        const navLinks = document.querySelectorAll('.nav-category');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    navCategories.classList.remove('active');
                }
            });
        });
        
        document.addEventListener('click', function(event) {
            if (!navCategories.contains(event.target) && !menuToggle.contains(event.target)) {
                navCategories.classList.remove('active');
            }
        });
    }

    const firstVisitNotification = document.getElementById('first-visit-notification');
    const notificationClose = document.querySelector('.notification-close');
    
    const hasVisitedBefore = localStorage.getItem('hasVisitedBefore');
    
    if (!hasVisitedBefore && firstVisitNotification) {
        firstVisitNotification.classList.add('show');
        
        localStorage.setItem('hasVisitedBefore', 'true');
        
        if (notificationClose) {
            notificationClose.addEventListener('click', function() {
                firstVisitNotification.classList.remove('show');
            });
        }
    }

    const header = document.querySelector('header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > header.offsetHeight) {
            header.classList.add('hidden');
        } else {
            header.classList.remove('hidden');
        }
        
        lastScrollTop = scrollTop;
    });
});