function showHiddenNavbar(){
    const menuList = document.querySelector('.header__dropdown');
    menuList.classList.toggle("showned-list");   
}

function hideNavbar(){
    const menuList = document.querySelector('.header__dropdown');
    menuList.classList.remove("showned-list");  
}

