//arrows: false, 버튼 없애주는 
//autoplay: true, 자동 재생하는
//document.querySelector = $
//document.quertSeclector('h1').style.display='none';
$(function () {
    $('.main_slider').on('init reInit afterChange', function () {
        var here = $('.slick-current');
        here.addClass('on').siblings().removeClass('on')

    })

    $('.main_slider').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        fade: true,
    })
})

