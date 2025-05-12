$( document ).ready(function() {
    console.log( "ready!" );

$(document).ready(function() {
  $('.cart > li > a').click(function(event) {
    event.preventDefault();
    $(this).parent().siblings().find('ul').slideUp();
    $(this).parent().find('ul').slideToggle();
  });
});

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal' ,
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    });
function showBtnCondition() {
        if ($(this).scrollTop() > 300) {
        $('#gotop').fadeIn();
          } else {
           $('#gotop').fadeOut();
         }
       }
$(window).scroll(showBtnCondition);

$('#gotop').click(function(event){
  event.preventDefault();
    $('html,body').animate({
      scrollTop:0
    },1000);
  })
});