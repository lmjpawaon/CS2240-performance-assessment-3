$('.hero-carousel').slick({
    autoplay: true,
    autoplayspeed: 1500,
    centerMode:true,
    arrows:false,
});

$('.carousel').slick({
    infinite: true,
    arrows: true,
    prevArrow:'<button class="prevBtn"><span class="iconify" data-icon="ooui:previous-ltr" style="color: #f5f5f1;"></span></button>',
    nextArrow:'<button class="nxtBtn"><span class="iconify" data-icon="ooui:previous-rtl" style="color: #f5f5f1;"></span></button>',
    centerMode:true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

$(document).ready(function() {

    //loader function
  $(window).on('load',function(){
    $(".loader").fadeOut(1500);
  });
    
  $(window).scroll( function(){
  
      $('.fade-in').each( function(i){
          
          var bottom_of_object = $(this).position().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          if( bottom_of_window > bottom_of_object ){
              
              $(this).animate({'opacity':'1'},500);
                  
          }
          
      }); 
  
  });
  
});


