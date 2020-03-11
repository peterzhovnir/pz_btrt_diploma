import 'jquery-validation/dist/jquery.validate';
import 'jquery-validation/dist/additional-methods';
import 'slick-carousel';

(function ($) {
    "use strict";

    const $modal = $(".my-modal");
    const $modalBackground = $modal.find(".background");
    const $modalImage = $modal.find(".image");

    const $modalBook = $(".book-modal");
    const $modalBookBackground = $modalBook.find(".background");
    const $modalWindow = $modalBook.find(".modal__center");

    const $buttonToggler = $(".navbar-toggler");
    const $navMenu = $(".nav-menu");
    let isMobile = $buttonToggler.is(":visible");
    let isAnimating = false;
    let modeChanged = false;

    // Header Sticky
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 120) {
            $(".nav-bar_white").addClass("is-sticky");
            $(".nav-bar__btn").addClass("black-link");
        } else {
            $(".nav-bar_white").removeClass("is-sticky");
            $(".nav-bar__btn").removeClass("black-link");
        }
    });

    // ----SCROLL EVENT----
    $(window).on("scroll", function () {
        var scrolled = $(window).scrollTop();
        if (scrolled > 300) $(".go-top-btn").fadeIn("slow");
        if (scrolled < 300) $(".go-top-btn").fadeOut("slow");
    });

    // ----CLICK EVENT----
    $(".go-top-btn").on("click", function () {
        $("html, body").animate({ scrollTop: "0" }, 500);
    });
    // ----MENU SCROLL EVENT_about----
    $(".home-btn").on("click", function () {
        $("html, body").animate({ scrollTop: "0" }, 500);
    });
    $(".about-btn").on("click", function () {
        $("html, body").animate({ scrollTop: $("#aboutId").offset().top }, 500);
    });
    $(".offer-btn").on("click", function () {
        $("html, body").animate({ scrollTop: $("#stunId").offset().top }, 500);
    });
    $(".menu-btn").on("click", function () {
        $("html, body").animate({ scrollTop: $("#menuId").offset().top }, 500);
    });
    $(".team-btn").on("click", function () {
        $("html, body").animate({ scrollTop: $("#teamId").offset().top }, 500);
    });
    $(".gallery-btn").on("click", function () {
        $("html, body").animate({ scrollTop: $("#galleryId").offset().top }, 500);
    });
    $(".blog-btn").on("click", function () {
        $("html, body").animate({ scrollTop: $("#contactId").offset().top }, 500);
    });
    $(".contact-btn").on("click", function () {
        $("html, body").animate({ scrollTop: $("#contactId").offset().top }, 500);
    });

    $buttonToggler.on("click", function () {
        if (!isAnimating) {
            isAnimating = true;
            $navMenu.slideToggle(300, "swing", () => {
                isAnimating = false;
                console.log(1111);
            });
        }
    });
    //---------GALLERY-MODAL----//
    $(".popup-btn").on("click", e => {
        const $gridImage = $(e.currentTarget).parent();
        const url = $gridImage.find("img").attr("src");

        $modalImage.attr("src", url);
        $modal.fadeIn(300);
        console.log(url);
    });

    $modalBackground.on("click", () => {
        $modal.fadeOut(0);
    });
    //---------GALLERY-MODAL----//

    //---------BOOK-MODAL----//

    $(".book-btn").on("click", e => {
        $modalBook.fadeIn(300);
        console.log(url);
    });

    $modalBookBackground.on("click", () => {
        $modalBook.fadeOut(0);
    });
    $(".book-modal .close").on("click", () => {
        $modalBook.fadeOut(0);
    });

    //---------BOOK-MODAL----//

    $(window).on("resize", () => {
        const newValue = $buttonToggler.is(":visible");
        isMobile;
        if (isMobile !== newValue) {
            isMobile = newValue;
            modeChanged = true;
        } else {
            modeChanged = false;
        }

        if (modeChanged) {
            if (isMobile) {
                $navMenu.fadeOut(0);
            } else {
                $navMenu.fadeIn(0);
            }
        }
    });

    if (isMobile) {
        $navMenu.fadeOut(0);
    }

    $modal.fadeOut(0);

    //----------FORM VALIDATE---

    //-------newsletter-validate-----//
    $("form[name='newsletter-form-n']").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            messages: {
                email: "Please enter a valid email address"
            },
            submitHandler: function (form) {
                form.submit();
            }
        }
    });
    //-------newsletter-validate-----//

    //-----------------contact-validate-----------------//
    $("form[name='contactForm']").validate({
        // Specify validation rules
        rules: {
            // The key name on the left side is the name attribute
            // of an input field. Validation rules are defined
            // on the right side
            firstname: "required",
            lastname: "required",
            email: {
                required: true,
                // Specify that email should be validated
                // by the built-in "email" rule
                email: true
            },
            phone: {
                required: true,
                phoneUS: true
            },
            message: {
                required: true,
                maxlength: 300
            }
        },
        // Specify validation error messages
        messages: {
            firstname: "Please enter your firstname",
            lastname: "Please enter your lastname",
            phone: {
                required: "Please provide a phone number",
                minlength: "Your phone number is to short"
            },
            email: "Please enter a valid email address",
            message: {
                required: "Please write about yourself",
                maxlength: "We don't need an essay"
            }
        },
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        submitHandler: function (form) {
            form.submit();
        }
    });
    //-----------------contact-validate-----------------//

    $("form[name='modalBookingForm']").validate({
        // Specify validation rules
        rules: {
            // The key name on the left side is the name attribute
            // of an input field. Validation rules are defined
            // on the right side
            firstname: "required",
            email: {
                required: true,
                // Specify that email should be validated
                // by the built-in "email" rule
                email: true
            },
            phone: {
                required: true,
                phoneUS: true
            },
            date: "required",
            time: "required"
        },
        // Specify validation error messages
        messages: {
            firstname: "Please enter your firstname",
            phone: {
                required: "Please provide a phone number"
            },
            email: "Please enter a valid email address",
            message: {
                required: "Please write about yourself",
                maxlength: "We don't need an essay"
            }
        },
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        submitHandler: function (form) {
            form.submit();
        }
    });

    //-----------------book-validate-----------------//

    //----------FORM VALIDATE---
})(jQuery);

$(() => {
    $('.team-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: true,
        dotsClass: 'team-slider-controls__dots',
        arrows: false,
        speed: 700,
        autoplaySpeed: 5000,
        rtl: false,
        mobileFirst: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1

                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1

                }
            }
        ]
    });
}
);

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