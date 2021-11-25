$(function(){

    // sticky navbar
    $(window).on('scroll', function () {

      var scroll = $(window).scrollTop();

      if (scroll < 245) {
        $(".navbar").removeClass("sticky");
      } else {
        $(".navbar").addClass("sticky");
      }
    });
    
    // slick
    $('.slick_slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed:1000,
        autoplay:true,
        autoplaySpeed: 3000,
        arrows: true,
        prevArrow: '.prev_arrow',
        nextArrow: '.next_arrow',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 350,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }]

    });

    // Back To Top
    $(window).on('scroll', function() {
        if($(this).scrollTop() > 400){
            $('.back_to_top').fadeIn(200)
        } else{
            $('.back_to_top').fadeOut(200)
        }
    });

    $('.back_to_top').on('click', function () {

      $('html, body').animate({
            scrollTop: 0,
      }, 1500);
    });

});