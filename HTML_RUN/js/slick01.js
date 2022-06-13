$(function () {

    $('.visual_slider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,


    });

    $('.slider01').slick({
        autoplay: true,
        arrows: false,
        pauseOnHover: false,
        autoplaySpeed: 2000,
        speed: 1000
    });

    $('.slider02').slick({
        slidesToShow: 3
    });
})
// slidesToShow 3개 슬라이드 보여주는게 안되서 html에서 같은 걸 복사하여 6개로 만든다