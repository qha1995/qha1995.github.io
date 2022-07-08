$('.top_banner i').on('click', function () {
    $('.top_banner').slideUp();
});

$('.main_slider').on('init afterChange', function (e, s, c) {
    var current = $('.slick-current');
    current.addClass('on').siblings().removeClass('on')
})

$('.main_slider').slick({
    arrows: false,
    //autoplay: true,
    dots: true,
    pauseOnHover: false,
    pauseOnFocus: false,
})

$(function () {
    $('.find_menu>li>a').on('click', function (e) {
        e.preventDefault();
        //console.log($(this).parent().index());
        var idx = $(this).parent().index();
        $('.find_menu>li').removeClass('on');
        $(this).parent().addClass('on');
    })


    $(function () {
        $('.busan>li>a').on('click', function (e) {
            e.preventDefault();
            //console.log($(this).parent().index());
            var idx = $(this).parent().index();
            $('.busan>li').removeClass('on');
            $(this).parent().addClass('on');
        })



    })
})
