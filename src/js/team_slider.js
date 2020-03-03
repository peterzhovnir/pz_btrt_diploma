$(()=>{
    $('.team-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: true,
        dotsClass:'team-slider-controls__dots',
        arrows:false,
        speed: 700,
        autoplaySpeed: 5000,
        rtl: false,
        mobileFirst: true,
        pauseOnHover: false,
        pauseOnFocus:false,
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
