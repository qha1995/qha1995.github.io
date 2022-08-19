$(function () {
    var closeBanner = () => {
        //$('.TopBanner').toggleClass();
        $('.TopBanner').slideToggle('on');
        //document.querySelector('.TopBanner').classList.toggle('on')
    }
    $('.TopBanner i').on('click', closeBanner);



    //$(function () {
    //  $('.TopBanner i').on('click', function () {
    //    $('.TopBanner').slideUp();

    //  });

    //})




    $('#bgndVideo').YTPlayer({
        videoURL: 'https://youtu.be/qoXf5Zr3BhA',
        containment: '.movie_play01',
        autoPlay: true,
        mute: true,
        //  startAt: 0,
        // opacity: 1,
        showControls: false,
        playOnlyIfVisible: true,

    });
    $('#bgndVideo02').YTPlayer({
        videoURL: 'https://youtu.be/cpFXov0VvBY',
        containment: '.movie_play02',
        autoPlay: false,
        mute: true,
        //  startAt: 0,
        // opacity: 1,
        showControls: false,
        playOnlyIfVisible: true,

    });

    $('.movie02 i:nth-child(1)').on('click', function () {
        $('#bgndVideo').YTPPause();
    });
    $('.movie02 i:nth-child(2)').on('click', function () {
        $('#bgndVideo').YTPPlay();
    });
    $('.movie02 i:nth-child(3)').on('click', function () {
        $('#bgndVideo').YTPUnmute();
    });


    $('.movie02 i:nth-child(1)').on('click', function () {
        $('#bgndVideo02').YTPPause();
    });
    $('.movie02 i:nth-child(2)').on('click', function () {
        $('#bgndVideo02').YTPPlay();
    });
    $('.movie02 i:nth-child(3)').on('click', function () {
        $('#bgndVideo02').YTPUnmute();
    });

    $('.MainSlider').slick({
        arrows: false,
        dots: true,
        autoplay: false,
        autolplaySpeed: 2000,
    });

    $('.MainArrow i:nth-child(1)').on('click', function () {
        $('.MainSlider').slick('slickPrev')
    });
    $('.MainArrow i:nth-child(2)').on('click', function () {
        $('.MainSlider').slick('slickNext')
    });

    //Product


    $('.ProductPic').slick({
        arrows: false,
        dots: true,
        slidesToShow: 4,

    });


    $('.Product .ProductArrows i:nth-child(1)').on('click', function () {
        $('.ProductPic').slick('slickPrev')
    });
    $('.Product .ProductArrows i:nth-child(2)').on('click', function () {
        $('.ProductPic').slick('slickNext')



    });

    //e.currentTarget
    function toggleClass() {
        $(this).toggleClass('on');
        $('.Footer .popup').toggleClass('on');
    }
    $('.pop li').on('click', toggleClass);
    $('.popup i').on('click', toggleClass);

    function mopen() {
        $(this).toggleClass('on');
        $('.Gnb').toggleClass('on');
    }

    $('.mopen').on('click', mopen)

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

});



