$(() => {
    $('.top-banner__container').slick({
        slidesToShow: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 4000,
        vertical: false,
        rtl: false,
        appendArrows: '.top-banner__buttons',
        pauseOnHover: false,
        pauseOnFocus: true,
        arrows: false,

    });
}
);

$(".top-banner__container").on("beforeChange", function (event, slick, currentSlide, nextSlide) {
    $(".main-banner-content h1").removeClass("animated fadeInUp").css("opacity", "0");
    $(".main-banner-content h3").removeClass("animated zoomIn").css("opacity", "0");
    $(".main-banner-content .btn").removeClass("animated fadeInDown").css("opacity", "0");
});
$(".top-banner__container").on("afterChange", function () {
    $(".main-banner-content h1").addClass("animated fadeInUp").css("opacity", "1");
    $(".main-banner-content h3").addClass("animated zoomIn").css("opacity", "1");
    $(".main-banner-content .btn").addClass("animated fadeInDown").css("opacity", "1");
});