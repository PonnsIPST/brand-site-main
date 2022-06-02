// Настройки слайдера
$(function () {
  $(".portfolio__slider").slick({
    infinite: true,
    // autoplay: true,
    arrows: false,
    autoplaySpeed: 10000,
    slidesToShow: 1,
    // nextArrow: '<button type="button" class="slick-next"><img src="images/portfolio/slider-arrow.svg" alt="Right-Arrow"></button>',
    // prevArrow: ''
  });
});

// Кнопка переключения слайдов
$(".portfolio__sldier-arrow-btn").on("click", function () {
  $(".portfolio__slider").slick("slickNext");
});

// Адаптив
if ( $(window).width() < 780 ) {
  // Меню
  $(".menu__btn").on("click", function () {
    $(".menu__inner").slideToggle();
  });
  
  
  // Аккордеон
  $(".features-slide-btn-1").on("click", function () {
    $(".whoweare__features-text-slide-1").slideToggle();

    if (!$(".features-arrow-img-1").hasClass("active")) {
      $(".features-arrow-img-1")
        .addClass("active")
        .attr("src", "images/whoweare/whoweare-arrow-up-img.svg");
    } else $(".features-arrow-img-1").removeClass("active").attr("src", "images/whoweare/whoweare-arrow-down-img.svg");
  });

  $(".features-slide-btn-2").on("click", function () {
    $(".whoweare__features-text-slide-2").slideToggle();

    if (!$(".features-arrow-img-2").hasClass("active")) {
      $(".features-arrow-img-2")
        .addClass("active")
        .attr("src", "images/whoweare/whoweare-arrow-up-img.svg");
    } else $(".features-arrow-img-2").removeClass("active").attr("src", "images/whoweare/whoweare-arrow-down-img.svg");
  });

  $(".features-slide-btn-3").on("click", function () {
    $(".whoweare__features-text-slide-3").slideToggle();

    if (!$(".features-arrow-img-3").hasClass("active")) {
      $(".features-arrow-img-3")
        .addClass("active")
        .attr("src", "images/whoweare/whoweare-arrow-up-img.svg");
    } else $(".features-arrow-img-3").removeClass("active").attr("src", "images/whoweare/whoweare-arrow-down-img.svg");
  });
}

// Плавные якоря
const anchors = document.querySelectorAll('.nav-link[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute("href").substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
