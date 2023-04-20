let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    menu.classList.toggle('fa-bars');
    navbar.classList.toggle('active');
};

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};


$(document).ready(function () {
    var silder = $(".owl-carousel");
    silder.owlCarousel({
        loop:true,
        autoplay: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: false,
        items: 1,
        center: true,
        margin: 40,
        dots: true,
        responsive: {
            0: {
                items: 1,
            },
            575: { items: 1 },
            768: { items: 2 },
            991: { items: 3 },
            1200: { items: 4 }
        },
        nav    : true,
        smartSpeed :800,
        navText : ["<i class='fa fa-chevron-left fa-lg' style='color:#cecece;'></i>","<i class='fa fa-chevron-right fa-lg' style='color:#cecece;'></i>"]   
    });
});









