$(function () {//메인 슬라이드
    var mainSlider = $(".visual-slider").slick({
        arrows: false,
        autoplay: false,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        pauseOnFocus: false,
        //https://cubic-bezier.com/
        cssEase: "cubic-bezier(.47,.46,.22,1)",
        speed: 1600,
        swipe: false,
        //useCSS:false,
        //easing:"linear",
        //https://api.jqueryui.com/easings/
        //dots:true,
        //prevArrow:"<i class='xi-angle-left-thin'></i>",
        //nextArrow:"<i class='xi-angle-right-thin'></i>",
    });

    var slideDots = $(".slick-dots li");
    var slideItem = $(".visual-slider figure");

    var direction = true;

    var slidePrev = $(".main-visual i.xi-long-arrow-left");
    var slideNext = $(".main-visual i.xi-long-arrow-right");

    slidePrev.on("click", function () {
        direction = false;
        mainSlider.slick("slickPrev");
    });
    slideNext.on("click", function () {
        mainSlider.slick("slickNext")
    });
    slideDots.on("click", function () {
        var idx = $(this).index();
        mainSlider.slick("slickGoTo", idx)
    });
    slideItem.eq(1).addClass("on");
    mainSlider.on("afterChange", function (event, slick, current) {
        slideDots.eq(current).addClass("on").siblings().removeClass("on");
        slideItem.eq(current + 1).addClass("on").siblings().removeClass("on");
        direction = true;
    });
    mainSlider.on("beforeChange", function (event, slick, current, next) {
        direction ? v = "+" : v = "-";
        slideItem.eq(current + 1).animate({ backgroundPositionX: v + 500 }, 1000).siblings().css({ backgroundPositionX: 0 });
    });
})

//product


$('.product_pic').slick({
    arrows: false,
    dots: true,
    slidesToShow: 5,
    centerMode: true,
});


$('.product .productArrows i:nth-child(1)').on('click', function () {
    $('.product_pic').slick('slickPrev')
});
$('.product .productArrows i:nth-child(2)').on('click', function () {
    $('.product_pic').slick('slickNext')
});
