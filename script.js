/*========= フォント読み込み時のチラつきを防ぐ===============*/
setTimeout(function () {
  if (
    document.getElementsByTagName("html")[0].classList.contains("wf-active") !=
    true
  ) {
    document.getElementsByTagName("html")[0].classList.add("loading-delay");
  }
}, 1500);

/*========= スライダー部分===============*/
$(".slider").slick({
  autoplay: true, //自動的に動き出すか。初期値はfalse。
  autoplaySpeed: 4000, // 自動再生の速度
  speed: 1200, // スライドの切り替わり速度
  infinite: true, //スライドをループさせるかどうか。初期値はtrue。
  slidesToShow: 3, //スライドを画面に3枚見せる
  slidesToScroll: 3, //1回のスクロールで3枚の写真を移動して見せる
  prevArrow: '<div class="slick-prev"></div>', //矢印部分PreviewのHTMLを変更
  nextArrow: '<div class="slick-next"></div>', //矢印部分NextのHTMLを変更
  dots: true, //下部ドットナビゲーションの表示
  responsive: [
    {
      breakpoint: 900, //モニターの横幅が769px以下の見せ方
      settings: {
        slidesToShow: 2, //スライドを画面に2枚見せる
        slidesToScroll: 2, //1回のスクロールで2枚の写真を移動して見せる
      },
    },
    {
      breakpoint: 500, //モニターの横幅が426px以下の見せ方
      settings: {
        slidesToShow: 1, //スライドを画面に1枚見せる
        slidesToScroll: 1, //1回のスクロールで1枚の写真を移動して見せる
      },
    },
  ],
});

/*========= ふわっと表示部分===============*/
$(".openbtn").click(function () {
  //ボタンがクリックされたら
  $(this).toggleClass("active"); //ボタン自身に activeクラスを付与し
  $("#g-nav").toggleClass("panelactive"); //ナビゲーションにpanelactiveクラスを付与
});

$("#g-nav a").click(function () {
  //ナビゲーションのリンクがクリックされたら
  $(".openbtn").removeClass("active"); //ボタンの activeクラスを除去し
  $("#g-nav").removeClass("panelactive"); //ナビゲーションのpanelactiveクラスも除去
});

//スクロールをしたら1度だけアニメーションをする設定
$(
  ".concept-h2 , .concept-wrap-1, .concept-wrap-2 ,.product-wrap ,.onlineshop ,.news-wrap ,.sns-wrap ,.access-wrap"
).on("inview", function (event, isInView) {
  if (isInView) {
    //表示領域に入った時
    $(this).addClass("active"); //クラス名が付与
  }
});

/*========= 手書きアニメーション部分===============*/
var stroke;
stroke = new Vivus("mask", {
  //アニメーションをするIDの指定
  start: "manual", //自動再生をせずスタートをマニュアルに
  type: "scenario-sync", // アニメーションのタイプを設定
  duration: 60, //アニメーションの時間設定。数字が小さくなるほど速い
  forceRender: false, //パスが更新された場合に再レンダリングさせない
  animTimingFunction: Vivus.EASE, //動きの加速減速設定
});

$(window).on("load", function () {
  $("#splash").delay(4000).fadeOut("slow"); //ローディング画面を1.5秒（1500ms）待機してからフェイドアウト
  $("#splash_logo").delay(4000).fadeOut("slow"); //ロゴを1.5秒（1500ms）待機してからフェイドアウト
  stroke.play(); //SVGアニメーションの実行
});
