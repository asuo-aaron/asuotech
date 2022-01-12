$(document).ready(function(){

    // Adding scrollspy to
    $('body').scrollspy({target: ".navbar-nav", offset: 67})

    // Product Carousel
    $('#product-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        autoplay:true,
        smartSpeed:1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })

        // Testimonial Carousel
        $('#testimonial-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            dots:false,
            autoplay:true,
            smartSpeed:1000,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:2
                }
            }
        })

});