$('.hero-carousel').slick({
    autoplay: true,
    autoplaySpeed: 1500,
    centerMode:true,
    arrows:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
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


  $(".hero-caption").hover(function(){
    $(this).css("opacity", ".75");
    }, function(){
    $(this).css("opacity", "1");
  });

  /*Modals*/

  //Draggable Functions
  $("#rumblingModal").draggable({
    handle: ".modal-header"
  });

  $("#chainsawModal").draggable({
    handle: ".modal-header"
  });

  $("#kimetsuModal").draggable({
    handle: ".modal-header"
  });

  $("#shieldModal").draggable({
    handle: ".modal-header"
  });

  //Functions for Iframe
  var url = $("#theRumbling").attr('src');
    
  $("#rumblingModal").on('hide.bs.modal', function(){
      $("#theRumbling").attr('src', '');
  });
    
  $("#rumblingModal").on('show.bs.modal', function(){
      $("#theRumbling").attr('src', url);
  });


  $("#chainsawModal").draggable({
    handle: ".modal-header"
  });

  var url2 = $("#chainsaw").attr('src');
    
  $("#chainsawModal").on('hide.bs.modal', function(){
      $("#chainsaw").attr('src', '');
  });
    
  $("#chainsawModal").on('show.bs.modal', function(){
      $("#chainsaw").attr('src', url2);
  });

  $("#kimetsuModal").draggable({
    handle: ".modal-header"
  });

  var url3 = $("#kimetsu").attr('src');
    
  $("#kimetsuModal").on('hide.bs.modal', function(){
      $("#kimetsu").attr('src', '');
  });
    
  $("#kimetsuModal").on('show.bs.modal', function(){
      $("#kimetsu").attr('src', url3);
  });

  var url4 = $("#shieldHero").attr('src');
    
  $("#shieldModal").on('hide.bs.modal', function(){
      $("#shield").attr('src', '');
  });
    
  $("#shieldModal").on('show.bs.modal', function(){
      $("#shield").attr('src', url3);
  });
  
});


