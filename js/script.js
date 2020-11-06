window.onload = function() {
  
  $(document).ready(function(){

    var scrollWindow = function() {
      $(window).scroll(function(){
        var $w = $(this),
          st = $w.scrollTop(),
          navbar = $(".navbar"),
          sd = $(".js-scroll-wrap");
        navLink = $(".nav-link");
        navbarExtended = $(".navbar-nav");
        brandOtherLetters = $(".otherLetters");
        btnLine = $(".btn-line");

        if (st > 150) {
          if ( !navbar.hasClass("scrolled") ) {
            navbar.addClass("scrolled");
            navLink.addClass("nav-link-dark");
            navbarExtended.addClass("navbar-nav-dark");
            brandOtherLetters.addClass("brandLettersDark");
            btnLine.addClass("btn-line-dark");
          }
        }
        if (st < 150) {
          if ( navbar.hasClass("scrolled") ) {
            navbar.removeClass("scrolled sleep");
            navLink.removeClass("nav-link-dark");
            navbarExtended.removeClass("navbar-nav-dark");
            brandOtherLetters.removeClass("brandLettersDark");
            btnLine.removeClass("btn-line-dark");
          }
        }
        if ( st > 350 ) {
          if ( !navbar.hasClass("awake") ) {
            navbar.addClass("awake");
          }

          if(sd.length > 0) {
            sd.addClass("sleep");
          }
        }
        if ( st < 350 ) {
          if ( navbar.hasClass("awake") ) {
            navbar.removeClass("awake");
            navbar.addClass("sleep");
          }
          if(sd.length > 0) {
            sd.removeClass("sleep");
          }
        }
      });
    };
    scrollWindow();


    // var anchor = $(".nav-link");
    // anchor.on('click', function(event) {
    //
    //   if (this.hash !== "") {
    //     event.preventDefault();
    //
    //     var hash = this.hash;
    //
    //     var target = $(hash).offset().top-150;
    //     $('html, body').animate({
    //       scrollTop: target
    //     }, 500, function(){
    //       // window.location.hash = hash;
    //     });
    //   }
    // });

    var context;
    var $window = $(window);
  
  });
}