// client logo slider
if ($(".splide").length) {
  document.addEventListener('DOMContentLoaded', function () {
    new Splide('.logo-carousel-module .splide', {
      type: 'loop',
      drag: 'free',
      focus: 'center',
      arrows: false,
      pagination: false,
      autoWidth: true,
      gap: 50,
      perPage: 7,
      autoScroll: {
        speed: 1,
      },
    }).mount(window.splide.Extensions);
  });
}


jQuery(document).ready(function(){









function isAppleDevice(){
return (
(navigator.userAgent.toLowerCase().indexOf("ipad") > -1) ||
(navigator.userAgent.toLowerCase().indexOf("iphone") > -1) ||
(navigator.userAgent.toLowerCase().indexOf("ipod") > -1)
);
}
var isAndroid = navigator.userAgent.toLowerCase().indexOf("android");
var appStoreURL = "";
if(isAndroid > -1){
jQuery('body').addClass('android-device');
jQuery('html').addClass('android-device');
}
else if( isAppleDevice() ){
jQuery('body').addClass('ios-device');
jQuery('html').addClass('ios-device');

  // jQuery( window ).on( "orientationchange", function( event ) {
  //   location.reload();
  // });


}





//Check Mobile Devices
var checkMobile = function(){

    //Check Device
    var isTouch = ('ontouchstart' in document.documentElement);

    //Check Device //All Touch Devices
    if ( isTouch ) {

        jQuery('body').addClass('touch');

        

    }
    else {

        jQuery('body').addClass('no-touch');

    };

};

//Execute Check
checkMobile();











// object notation
var site = {}



site.MOBILEMENUHEADERSCROLLFUNCTION = function() {
  
  if (jQuery(document).scrollTop() > 50) {
    jQuery('header.header').addClass('scrolled-effect');
    jQuery('.mobile-nav .navbar').removeClass('navbar-dark');
  }
  else {
    jQuery('header.header').removeClass('scrolled-effect');
    jQuery('.mobile-nav .navbar').addClass('navbar-dark');
  }
};

jQuery(window).scroll(function() {
  site.MOBILEMENUHEADERSCROLLFUNCTION();
});
site.MOBILEMENUHEADERSCROLLFUNCTION();






jQuery(window).resize(function(){


});



jQuery( window ).on( "orientationchange", function( event ) {

   
          
});









// set back

jQuery('.set-back').each(function(){

 var SETBACK = jQuery(this).find('img').attr('src');
  jQuery(this).css('background-image', 'url(' + SETBACK + ')');

});




// flickity slider
jQuery('.page-banner-module .main-carousel').flickity({
  
  // options
  cellAlign: 'left',
  contain: true,
  pageDots: false,
  wrapAround: true,
  on: {
    ready: function() {
      jQuery('.carousel-cell.is-selected').find('.in-from-top').addClass('fadeInDown');
      jQuery('.carousel-cell.is-selected').find('.in-zoom').addClass('zoomIn');
      jQuery('.carousel-cell.is-selected').find('.in-left').addClass('fadeInLeft');
      jQuery('.carousel-cell.is-selected').find('.in-right').addClass('fadeInRight');
    },
    change: function() {
      jQuery('.carousel-cell.is-selected').find('.in-from-top').addClass('fadeInDown');
      jQuery('.carousel-cell.is-selected').find('.in-zoom').addClass('zoomIn');
      jQuery('.carousel-cell.is-selected').find('.in-left').addClass('fadeInLeft');
      jQuery('.carousel-cell.is-selected').find('.in-right').addClass('fadeInRight');

      jQuery('.carousel-cell.is-selected').find('.in-from-top').removeClass('fadeOutUp');
      jQuery('.carousel-cell.is-selected').find('.in-zoom').removeClass('zoomOut');
      jQuery('.carousel-cell.is-selected').find('.in-left').removeClass('fadeOutLeft');
      jQuery('.carousel-cell.is-selected').find('.in-right').removeClass('fadeOutRight');







      jQuery('.carousel-cell:not(.is-selected)').find('.in-from-top').removeClass('fadeInDown');
      jQuery('.carousel-cell:not(.is-selected)').find('.in-zoom').removeClass('zoomIn');
      jQuery('.carousel-cell:not(.is-selected)').find('.in-left').removeClass('fadeInLeft');
      jQuery('.carousel-cell:not(.is-selected)').find('.in-right').removeClass('fadeInRight');

      jQuery('.carousel-cell:not(.is-selected)').find('.in-from-top').addClass('fadeOutUp');
      jQuery('.carousel-cell:not(.is-selected)').find('.in-zoom').addClass('zoomOut');
      jQuery('.carousel-cell:not(.is-selected)').find('.in-left').addClass('fadeOutLeft');
      jQuery('.carousel-cell:not(.is-selected)').find('.in-right').addClass('fadeOutRight');
    }
  }
});





jQuery('.touch .has-submenu > a').addClass('dual-click');
   
   jQuery(document).on( "click", ".dual-click", function(event) {
        
        jQuery(".dual-click").not(this).removeClass("clicked");
        jQuery(this).toggleClass("clicked");
        if (jQuery(this).hasClass("clicked")) {
            event.preventDefault();
        }
    });


// go top
 jQuery('.go-top').click(function(){
   jQuery('html, body').animate({scrollTop: 0}, 400);
  
});


// viewport checker
jQuery('.viewport-appear.classToAddzoomIn.number-count-start').viewportChecker({
  classToAdd: 'zoomIn',
  repeat: false,
  offset: 0,
  callbackFunction: function (elem, action) {
    $('.number-count-content .the-number').each(function () {
      $(this).prop('Counter',0).animate({
          Counter: $(this).text()
      }, {
          duration: 3000,
          easing: 'swing',
          step: function (now) {
              $(this).text(Math.ceil(now));
          }
      });
  });
  },
});


jQuery('.viewport-appear.classToAddzoomIn').viewportChecker({
  classToAdd: 'zoomIn',
  repeat: false,
  offset: 0
});

jQuery('.viewport-appear.classToAddfadeInLeft').viewportChecker({
  classToAdd: 'fadeInLeft',
  repeat: false,
  offset: 0
});

jQuery('.viewport-appear.classToAddfadeInRight').viewportChecker({
  classToAdd: 'fadeInRight',
  repeat: false,
  offset: 0
});

jQuery('.viewport-appear.classToAddfadeInUp').viewportChecker({
  classToAdd: 'fadeInUp',
  repeat: false,
  offset: 0
});

// testimonial-module
jQuery('.testimonial-module').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  centerMode: true,
  centerPadding: '0px',
  speed: 1000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});

// width condition
var FROMLGDESKTOPTOREST = 1500

if ($(window).width() <= FROMLGDESKTOPTOREST) {
  
 jQuery('header.header .header-main-wrap > .container-fluid').addClass('container');

};



});








// load
jQuery(window).load(function(){




// match height
  jQuery('.equal-row').each(function() {
       jQuery(this).children('.equal-block').matchHeight();
  });

  jQuery('.element-row').each(function() {
       jQuery(this).children('.equal-block').matchHeight();
  });







var siteLoad = {}




siteLoad.CAPTIONSLIDERHEIGHT = function() {

  
    

};   




jQuery(window).resize(function(){


});


});

