window.onload = function () {
    window.addEventListener('scroll', function (e){
        // use this to console log pxs as you scroll down
        // console.log(window.pageYOffset);
        if(window.pageYOffset > 100){
            document.querySelector("header").classList.add('is-scrolling')
        } else{
            document.querySelector("header").classList.remove('is-scrolling')
        }
    });
}