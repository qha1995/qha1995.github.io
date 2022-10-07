$(function () {
    $('.gnb .box>ul>li>a').on('click', function (e) {
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

    var siteMap = $('.gnb .box>ul')
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

    //메인 슬라이드

    var mainSlider = $(".visual-slider").slick({
        arrows: false,
        autoplay: false,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        pauseOnFocus: false,
        fade: true,
        speed: 800,
        //useCSS:false,
    });


    var slideItem = $(".visual-slider figure");
    var idx = 0;

    function txtAni() {
        var Atxt = slideItem.eq(idx).find("h2");
        var txt = Atxt.text().split("");

        $.each(txt, function (idx) {
            if ($(window).width() > 768)
                Atxt.append("<span>" + txt[idx]);
            Atxt.find("span").css({ position: "relative", opacity: 0, left: 100, fontSize: "60px" })
                .delay(300 * idx)
                .animate({ opacity: 1, left: 0 }, 500)
        });
    }
    txtAni();

    var slideDots = $(".slick-dots li");

    slideItem.eq(0).addClass("on");
    $(".slick-dots").addClass("on");
    mainSlider.on("beforeChange", function () {
        $(".slick-dots").removeClass("on");

        slideItem.find("span").remove();
    });
    mainSlider.on("afterChange", function (event, slick, current) {
        $(".slick-dots").addClass("on");
        idx = current;
        slideDots.eq(current).addClass("on").siblings().removeClass("on");
        slideItem.eq(current).addClass("on").siblings().removeClass("on");
        txtAni();

    });

    var slidePrev = $("#main-visual i.xi-angle-left-thin");
    var slideNext = $("#main-visual i.xi-angle-right-thin");
    slidePrev.on("click", function () {
        mainSlider.slick("slickPrev")
    });
    slideNext.on("click", function () {
        mainSlider.slick("slickNext")
    });
    slideDots.on("click", function () {
        var idx = $(this).index();
        mainSlider.slick("slickGoTo", idx)
    });



    //trip


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


    $('#bgndVideo').YTPlayer({
        videoURL: 'https://youtu.be/Kn38BUQ-YRg',
        containment: '.movie',
        autoPlay: true,
        mute: true,
        //  startAt: 0,
        // opacity: 1,
        showControls: false,
        playOnlyIfVisible: false,

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


    $(window).on('scroll', function () {
        var sct = $(window).scrollTop();
        if (sct > $('.movie').offset().top - 200) {
            $('.movie').addClass('on')

        }
        //else {$('.movie').removeClass('on')}


    });

    $(function () {
        $('.choose>li>a').on('click', function (e) {
            e.preventDefault();
            //console.log($(this).parent().index());
            var idx = $(this).parent().index();
            $('.choose>li').removeClass('on');
            $(this).parent().addClass('on');
        })
    });




    $('.nemo .productArrows i:nth-child(1)::after ').on('click', function () {
        $('.news .container').slick('slickPrev')
    });
    $('.nemo .productArrows i:nth-child(2)::after ').on('click', function () {
        $('.news .container').slick('slickNext')
    });


    const SCE_ELE = document.querySelectorAll('.active-event')

    window.addEventListener('scroll', () => {
        let sct = window.scrollY;
        SCE_ELE.forEach(el => {
            //forEach = 배열
            sct > el.offsetTop - 300
                ? el.classList.add('on')
                : el.classList.remove('on')

        })

    });


    document.querySelector('.mopen').addEventListener('click', (e) => {
        const TG = e.currentTarget;
        // 값이 바뀌는 건 let을 씀.
        TG.classList.toggle('on');
        document.querySelector('#header').classList.toggle('ox')
    });
})



