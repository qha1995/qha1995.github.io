const DDD = document.querySelector('.box .rotated_logo');
window.addEventListener('scroll', function () {
    let sct = window.scrollY;
    console.log(sct, DDD);
    DDD.style.transform = 'rotate(' + sct / 2 + 'deg)';

})

$(function () {
    $('.gnb>ul>li>a').on('click', function (e) {
        if ($('.gnb').hasClass('on')) {
            e.preventDefault();
            $('.smenu').slideUp()
            $(this).next().stop().slideToggle();
        }
    });

    $('.mbtn').on('click', function () {
        $('.gnb').toggleClass('on')
    });

    $(window).on('resize', function () {
        $('.gnb').removeClass('on');
        $('smenu').removeAttr('style')
    });

    var siteMap = $('.gnb>ul')
        .clone()
        .addClass('container')
        .appendTo($('body'))
        .wrap('<div class="sitemap"></div>'); //생성하고 나서 싸줘야 함
    //var wrapper = $('<div class="sitemap"></div>');
    //var siteMap = siteMapInner.wrap(wrapper);
    //siteMap.appendTo($('body'));
    $('<i class="xi-close"></i>').appendTo(siteMap.parent()); // appendTo(el) el의 마지막 자식으로 추가


    $('.mclone').on('click', function () {
        $('.sitemap').show()
    });

    $('.sitemap .xi-close').on('click', function () {
        $('.sitemap').hide()
    })
})

//메인 슬라이드
var mainSlider01 = $(".visual_slider_l").slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    pauseOnFocus: false,
    vertical: true,
    speed: 0,
    asNavFor: $(".visual_slider_r")

});

var mainSlider02 = $(".visual_slider_r").slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    pauseOnFocus: false,
    vertical: true,
    //speed: 0,
    asNavFor: $(".visual_slider_l")
});

var slideDots = $(".slick-dots li");
var slideItem = $(".visual_slider_l  figure");

var direction = true;

var slidePrev = $("#main_visual i.xi-angle-left-thin");
var slideNext = $("#main_visual i.xi-angle-right-thin");


slidePrev.on("click", function () {
    direction = false;
    mainSlider01, mainSlider02.slick("slickPrev");
});
slideNext.on("click", function () {
    direction = true;
    mainSlider01, mainSlider02.slick("slickNext")
});
slideDots.on("click", function () {
    var idx = $(this).index();
    mainSlider01, mainSlider02.slick("slickGoTo", idx)



});


slideItem.eq(1).addClass("on")
mainSlider01.on("afterChange", function (event, slick, current) {
    direction = true;
    slideDots.eq(current).addClass("on").siblings().removeClass("on");
    slideItem.eq(current + 1).addClass("on").siblings().removeClass("on");
    slideItem.eq(current + 1).css({
        zIndex: 10,
        transform: "translateY(0%)",
        transition: "1s",
    });

});


mainSlider01.on("beforeChange", function (event, slick, current, next) {
    console.log(direction)
    direction ? v = "+" : v = "-";
    slideItem.css({
        zIndex: 0,
        transform: "translateY(" + v + 100 + "%)",
        transition: "none"
    });
});

//NEW

$('.new_slider').slick({
    arrows: false,
    autoplay: true,
    pauseOnHover: false,
    pauseOnFocus: false,
})

//VIDEO

$('#bgndVideo').YTPlayer({
    videoURL: 'https://youtu.be/ncD3agNcyH8',
    containment: '.movie',
    autoPlay: true,
    mute: true,
    //  startAt: 0,
    // opacity: 1,
    showControls: false,
    playOnlyIfVisible: true,

});

$('.movie i:nth-child(1)').on('click', function () {
    $('#bgndVideo').YTPPause();
});
$('.movie i:nth-child(2)').on('click', function () {
    $('#bgndVideo').YTPPlay();
});
$('.movie i:nth-child(3)').on('click', function () {
    $('#bgndVideo').YTPUnmute();
});
; 