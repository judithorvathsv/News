function showHiddenNavbar(){
    const menuList = document.querySelector('.header__dropdown');
    menuList.classList.toggle("showned-list");   
}

function hideNavbar(){
    const menuList = document.querySelector('.header__dropdown');
    menuList.classList.remove("showned-list");  
}

function updateClampClassMobileShort() {
    const articleTexts = document.querySelectorAll('.main__article-text-mobile-short'); 
    const width = window.innerWidth;

    articleTexts.forEach(articleText => {     
        articleText.classList.remove('clamp-2', 'clamp-6');

        if (width < 768) { 
            articleText.classList.add('clamp-2');
        } else if (width >= 768 ) { 
            articleText.classList.add('clamp-6');
        }     
    });
}

// Initial check
updateClampClassMobileShort();
// Update on resize
window.addEventListener('resize', updateClampClassMobileShort);


function updateClampClassTabletLong() {   
    const articleTexts = document.querySelectorAll('.main__article-text-tablet-long');    
    const width = window.innerWidth;

    articleTexts.forEach(articleText => {    
        articleText.classList.remove('clamp-2', 'clamp-6');

        if (width < 768) { 
            articleText.classList.add('clamp-2');
        } else if (width >= 768 && width < 1024) { 
            articleText.classList.add('clamp-6');
        } else { 
            articleText.classList.add('clamp-2');
        }
    });
}

// Initial check
updateClampClassTabletLong();
// Update on resize
window.addEventListener('resize', updateClampClassTabletLong);

