//arrows: false, 버튼 없애주는 
//autoplay: true, 자동 재생하는
//document.querySelector = $
//document.quertSeclector('h1').style.display='none';

$(function () {
    $('.main_slider').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
    })
})