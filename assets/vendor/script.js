$(document).ready(function () {
  var hamburger = $('.hamburger');
  var navLinks = $('.nav-links');
  var modal = $('.modal');
  var videoContainer = $('.video-container');

  //hamburger menu to show navigation links on click
  hamburger.click(function() {
    hamburger.toggleClass('active');
    navLinks.toggleClass('is-active');
    $('body').toggleClass('hide-scroll');

  });
  
  // for displaying dropdown menus
  $('.home-menu, .page-menu, .gallery-menu, .service-menu, .about-menu, .blog-menu, .shop-menu').click(function() {
    $(this).children('.dropdown').slideToggle();
  });

  // plays video when modal button is clicked
  modal.click(function(){
    var video = $('video');
    videoContainer.addClass('active');

    if(videoContainer.hasClass('active')) {
      video.get(0).play();
      video.get(0).currentTime = 0;
      videoContainer.click(function(e) {
        if(e.target === videoContainer.get(0)){
          videoContainer.removeClass('active');
          video.get(0).pause();
          video.get(0).currentTime = 0;
        }
      });
      //stops video when modal close button is clicked
      $('.modal-close').click(function() {
        videoContainer.removeClass('active');
        video.get(0).pause();
        video.get(0).currentTime = 0;
      })
    }
  });

  // Counter functionality
  var counterContainer = $('.counter-container');
  $(window).scroll(function() {
    var top_of_element = counterContainer.offset().top;
    var bottom_of_element = counterContainer.offset().top + counterContainer.outerHeight();
    var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
    var top_of_screen = $(window).scrollTop();
    if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
      $('.target').each(function() {
        var $this = $(this);
        var countTo = $this.attr('data-target');
        
        $({ countNum: $this.text()}).animate({
          countNum: countTo
        },
        {
          duration: 1500,
          easing:'linear',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
          }
        });  
      });
    }
  })

  // Accordian Functionality
  // toggles active class and displays specific panel
  $('.accordian-title').click(function() {
    $(this).parent().siblings().removeClass('active');
    $(this).parent().siblings().find('div.panel').slideUp();
    if($(this).parent().hasClass('active')){
      $(this).next().slideUp(function() {
        $(this).parent().removeClass('active');
      })
    } else {
      $(this).next().slideDown(function () {
        $(this).parent().addClass('active');
      });
    }
  })
});