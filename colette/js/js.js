$(() => {
  $(".slide>li").each(function () {
    $(".dot_con").append('<li><a href="#"></a></li>');
  });
  $(".slide>li:first-child,.dot_con>li:first-child>a").addClass("on");

  let len = $(".slide>li").length;
  let cnt = 0;

  $(".dot_con>li").click(function () {
    clearInterval(intv);
    $(".dot_con>li>a").removeClass("on");
    $(this).children("a").addClass("on");

    let num = $(this).index(); //0,1,2,3
    cnt = num;
    $(".slide>li").removeClass("on");
    $(".slide>li").eq(num).addClass("on");

    intv = setInterval(function () {
      nextAni();
    }, 4500);
    return false;
  });

  let intv = setInterval(function () {
    nextAni();
  }, 4500);
  function nextAni() {
    $(".slide>li").removeClass("on");
    $(".dot_con>li").children("a").removeClass("on");
    cnt++;
    if (cnt >= len) {
      cnt = 0;
    }
    $(".dot_con>li").eq(cnt).children("a").addClass("on");
    $(".slide>li").eq(cnt).addClass("on");
  }
  function prevAni() {
    $(".slide>li").removeClass("on");
    $(".dot_con>li").children("a").removeClass("on");
    cnt--;
    if (cnt < 0) {
      //-1이면 3으로 cnt를 바꿔라
      cnt = len - 1; //length==4
    }
    $(".slide>li").eq(cnt).addClass("on");
    $(".dot_con>li").eq(cnt).children("a").addClass("on");
  }

  $(".next").click(function () {
    clearInterval(intv);
    nextAni();
    intv = setInterval(function () {
      nextAni();
    }, 4500);
  });
  $(".prev").click(function () {
    clearInterval(intv);
    prevAni();
    intv = setInterval(function () {
      prevAni();
    }, 4500);
  });
});

// 사이드메뉴 토글
$(document).ready(function () {
  $(".sidebar-menu-small").hide();

  $(".menu").click(function () {
    $(">ul", this).toggle(300);
  });
  $(".menu").click(function () {
    $(".sidebar-menu > ul > li > a:after").addClass("on");
  });
});
