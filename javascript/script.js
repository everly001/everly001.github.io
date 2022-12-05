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
                items: 9,
                slideBy: 3,
            }
        }
    });
});