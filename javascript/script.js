var clickCounter=0;

function openMenu() {
    const icon = document.querySelector(".icon");
    const topNav = document.querySelector(".topnav");
    if(clickCounter>=1){
        icon.classList.remove("active");
        topNav.classList.remove("mobile-active");
        clickCounter--;
    }else{
        icon.classList.add("active");
        topNav.classList.add("mobile-active");
        clickCounter++;
    }
};

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        center: true,
        nav: true,
        dots: false,
        margin: 5,
        responsiveClass:true,
        responsive:{
            0:{
                items:3,
                slideBy: 3,
            },
            600:{
                items: 7,
                slideBy: 7,
            },
            1000:{
                items: 7,
                slideBy: 3,
            }
        }
    });
});