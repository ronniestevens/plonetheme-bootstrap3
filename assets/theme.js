/* animate the searchbox */
$('#zoek').click(function() {
    $( '#searchbox' ).animate({width: 'toggle'});
});

$('.carousel').carousel()

/* Flex Slider */
$(window).load(function() {
    $('.flexslider').flexslider({
        animation: "slide",
        controlNav: true,
        pauseOnHover: true,
        slideshowSpeed: 15000
    });
});