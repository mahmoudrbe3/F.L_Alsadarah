// M7R
jQuery(document).ready(function($){
$('.owl-carousel').owlCarousel({
    rtl:true,
    loop:true,
    margin:20,
    nav:true,
	navText:["<i class='fa fa-angle-right'></i>","<i class='fa fa-angle-left'></i>"],
	dots: true,
	autoplay: true,
	autoplayTimeout: 7000,
	autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        667:{
            items:4
        },
        1000:{
            items:4
        }
    }
});
$('.owl-carousel2').owlCarousel({
    rtl:true,
    loop:true,
    margin:40,
    nav:true,
	navText:["<i class='fa fa-angle-right'></i>","<i class='fa fa-angle-left'></i>"],
	dots: true,
	autoplay: true,
	autoplayTimeout: 5000,
	autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        667:{
            items:2
        },
        1000:{
            items:2
        }
    }
});
$('.owl-carousel3').owlCarousel({
    rtl:true,
    loop:true,
    margin:20,
    nav:true,
	navText:["<i class='fa fa-angle-right'></i>","<i class='fa fa-angle-left'></i>"],
	dots: true,
	autoplay: true,
	autoplayTimeout: 9000,
	autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        667:{
            items:3
        },
        1000:{
            items:2
        }
    }
});
$(".nav_bx .navbar-nav li").hover(function () {
$(".nav_bx .navbar-nav li ul").addClass("animated flipInX");
});
$("#signin_link").click(function(){
   $("#signin_form").slideToggle("slow"), $("#req_form").slideUp("slow");
});
$("#req_link").click(function(){
   $("#req_form").slideToggle("slow"), $("#signin_form").slideUp("slow");
});
$(".boxer").not(".retina, .boxer_fixed, .boxer_top, .boxer_format, .boxer_mobile, .boxer_object").boxer();
$(".scroll").click(function (event) {
   event.preventDefault();
   $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 2000);
});
$('[data-toggle="tooltip"]').tooltip()
});