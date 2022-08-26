// $(function () {
//     $('.mbtn').on('click', function () {
//         $('.gnb').toggleClass('on')
//     })
//     $('.gnb>ul>li>a').on('click', function (event) {
//         if ($(window).width() < 769)
//             event.preventDefault();
//         $('.smenu').hide();
//         $(this).next().show();
//     });
//     $(window).on('resize', function () {
//         $('.smenu').removeAttr('style')
//     })
// })


// function toggleClass() {
//     $(this).toggleClass('on');
//     $('.Footer .popup').toggleClass('on');
// }
// $('.pop li').on('click', toggleClass);
// $('.popup i').on('click', toggleClass);


window.addEventListener('DOMContentLoaded', () => {
    const MainSlider = new Swiper('.MainSlider', {
        direction: "vertical",
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        }
    })

    // slideItem.eq(1).addClass("on")
    // mainSlider.on("afterChange", function (event, slick, current) {
    //     direction = true;
    //     slideDots.eq(current).addClass("on").siblings().removeClass("on");
    //     slideItem.eq(current + 1).addClass("on").siblings().removeClass("on");
    //     slideItem.eq(current + 1).css({
    //         zIndex: 10,
    //         transform: "translateY(0%)",
    //         transition: "1s",
    //     });

    // });
    // mainSlider.on("beforeChange", function (event, slick, current, next) {
    //     console.log(direction)
    //     direction ? v = "+" : v = "-";
    //     slideItem.css({
    //         zIndex: 0,
    //         transform: "translateY(" + v + 100 + "%)",
    //         transition: "none"
    //     });
    // });
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

    var swiper = new Swiper(".Product", {
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",

        },
        pagination: {
            el: ".swiper-pagination",

            clickable: true,
        },

    });



    document.querySelector('#Collect').addEventListener('mousemove', function (e) {
        let X = e.pageX;
        let Y = e.pageY;
        console.log(X, Y);
        document.querySelector('.cursor').style.left = X + 'px';
        document.querySelector('.cursor').style.top = Y + 'px';
    })
    document.querySelector('#New').addEventListener('mousemove', function (e) {
        let X = e.pageX;
        let Y = e.pageY;
        console.log(X, Y);
        document.querySelector('.cursor').style.left = X + 'px';
        document.querySelector('.cursor').style.top = Y + 'px';
    })



});
