/*-------------------------------------------
スライダー
-------------------------------------------*/
$(".slider").slick({
  autoplay: true,
  autoplaySpeed: 4000,
  speed: 1200,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  prevArrow: '<div class="slick-prev"></div>',
  nextArrow: '<div class="slick-next"></div>',
  dots: true,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

/*-------------------------------------------
ハンバーガーメニュー
-------------------------------------------*/
$(".openbtn").click(function () {
  $(this).toggleClass("active");
  $("#g-nav").toggleClass("panelactive");
});

$("#g-nav a").click(function () {
  $(".openbtn").removeClass("active");
  $("#g-nav").removeClass("panelactive");
});

/*-------------------------------------------
ふわっと表示 
-------------------------------------------*/
$(
  ".concept-h2 , .concept-wrap-1, .concept-wrap-2 ,.product-wrap ,.onlineshop ,.news-wrap ,.sns-wrap ,.access-wrap"
).on("inview", function (event, isInView) {
  if (isInView) {
    $(this).addClass("active");
  }
});

/*-------------------------------------------
手書きアニメーション
-------------------------------------------*/
var stroke;
stroke = new Vivus("mask", {
  start: "manual",
  type: "scenario-sync",
  duration: 40,
  forceRender: false,
  animTimingFunction: Vivus.EASE,
});

$(window).on("load", function () {
  $("#splash").delay(3000).fadeOut("slow");
  $("#splash_logo").delay(3000).fadeOut("slow");
  stroke.play();
});
