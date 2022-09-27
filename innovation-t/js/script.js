$(document).ready(function(){
    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 6000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });

      // 메뉴바
      $('.menu').click(function(){
        $('.menu_bar').css('right', '0');
        $('.menu_bar').css('opacity', '1');
      });
      $('.cancel').click(function(){
        $('.menu_bar').css('right', '-100%');
        $('.menu_bar').css('opacity', '0');
      });
});

setInterval(function(){
  $('.notice ul').not(':animated').animate({
      top:'-120px'
  },600,function(){
      $('.notice ul').append($('.notice ul li').eq(0));
      $('.notice ul').css("top",0);
  })
},3000)
