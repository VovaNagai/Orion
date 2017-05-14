$(document).ready(function() {
    $('.carousel').carousel({
        interval: 2000
    });
    $(".button-slide-left").click(function(){
        $('.left.carousel-control').click();
    });
    $(".button-slide-right").click(function(){
        $('.right.carousel-control').click();
    });
});