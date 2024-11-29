function toggleHiddenNavbar(){
    const topicList = document.querySelector('.header__nav-topic-dropdown');
    topicList.classList.toggle("showned-element");   
}

function toggleHiddenLogin(){
    const loginForm = document.querySelector('.header__login');
    loginForm.classList.toggle("showned-element");   

    const registerForm = document.querySelector('.header__register');
    registerForm.classList.remove("showned-element"); 
}

function toggleHiddenRegister(){
    const registerForm = document.querySelector('.header__register');
    registerForm.classList.toggle("showned-element");  
    
    const loginForm = document.querySelector('.header__login');
    loginForm.classList.remove("showned-element"); 
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

