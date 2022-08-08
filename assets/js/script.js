window.onload = function () {
    window.addEventListener('scroll', function (e){
        // use this to console log pxs as you scroll down
        // console.log(window.pageYOffset);
        if(window.pageYOffset > 150){
            document.querySelector("header").classList.add('is-scrolling')
        } else{
            document.querySelector("header").classList.remove('is-scrolling')
        }
    });
}

const menu_button = document.querySelector(".menuButton button");
const close_button = document.querySelector(".closeButton button");
const closeOpen = document.querySelector(".closeButton");
const menuClose = document.querySelector(".menuButton");
const dropDown = document.querySelector(".dropDown");

menu_button.onclick = ()=>{
    dropDown.classList.add("activeDrop");
    menuClose.classList.add("activeMenu");
    closeOpen.classList.add("activeClose");
} 

close_button.onclick = ()=>{
    closeOpen.classList.remove("activeClose");
    menuClose.classList.remove("activeMenu");
    dropDown.classList.remove("activeDrop");
}