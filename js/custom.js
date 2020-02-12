$(document).ready(function() {
//onscroll fixed header  
$(window).scroll(function(){
  if ($(window).scrollTop() >=50) {
    $('.header').addClass('fixed');
  }
  else {
    $('.header').removeClass('fixed');
  }
});


//datepicker----------------------------------
  $('#expiry').datetimepicker({
    format: 'DD/MM/YYYY',
  });


//sldier-----------------

  var owl = $('.main_slider');
  owl.owlCarousel({
    margin: 10,
    nav: false,
    loop: true,
    dots:false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  })

// animation
AOS.init();


// scroll target offset
  $('a[href^="#"]').click(function() {
      var target = $(this.hash);
      if (target.length == 0) target = $('a[name="' + this.hash.substr(1) + '"]');
      if (target.length == 0) target = $('html');
      $('html, body').animate({ scrollTop: target.offset().top-80 });
      return false;
  });

  //active class
  $('nav li a').click(function(e) {

      $('nav li.active').removeClass('active');

      var $parent = $(this).parent();
      $parent.addClass('active');
      e.preventDefault();
  });




})  
