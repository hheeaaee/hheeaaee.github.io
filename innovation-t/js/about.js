$(document).ready(function(){
    $('.menu').click(function(){
        $('.menu_bar').css('right', '0');
        $('.menu_bar').css('opacity', '1');
      });
      $('.cancel').click(function(){
        $('.menu_bar').css('right', '-100%');
        $('.menu_bar').css('opacity', '0');
      });

      $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 1) {
          $(".menu_btn strong").css("background" , "#ffffff");
        }
        else{
            $(".menu_btn strong").css("background" , "#ffffff");   
        }
      })
});