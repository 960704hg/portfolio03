$(function () {


    $('.main_slide').on('init afterChange', function (e, s, c) {
        // c = 0,1
        var current = $('.main_slide .slick-current');
        current.addClass('on').siblings().removeClass('on');
    });

    $('.main_slide').slick({
        fade: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $('.main_visual .arrows .left').on('click', function () {
        $('.main_slide').slick('slickPrev')
    });

    $('.main_visual .arrows .right').on('click', function () {
        $('.main_slide').slick('slickNext')
    });

    // main_produt_slide
    $('.main_product_slide').slick({
        arrows: false,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]

    });

    $('.main_product .arrows .left').on('click', function () {
        $('.main_product_slide').slick('slickPrev')
    });

    $('.main_product .arrows .right').on('click', function () {
        $('.main_product_slide').slick('slickNext')
    });

    $('.main_product_slide').on('init afterChange', function (e, s, c) {
        var current = $('.main_product_slide .slick-current');
        current.addClass('on').siblings().removeClass('on');
        $('.main_product .slide_dots button').removeClass('on');
        $('.main_product .slide_dots button').eq(c ? c : 0).addClass('on');
    });

    $('.main_product .slide_dots button').on('click', function () {
        var idx = $(this).parent().index();
        $('.main_product_slide').slick('slickGoTo', idx);
    });

    $('.main_product .slide_dots button').on('click', function () {
        $('.main_product .slide_dots button').removeClass('on');
        $(this).addClass('on');
    });


    // main_new//
    $('.main_new').slick({
        slidesToShow: 4,
        arrows: false,
        autoplay: false,
    });

    $('.news_arrows i:first-child').on('click', function () {
        $('.main_new').slick('slickPrev')
    });

    $('.news_arrows i:last-child').on('click', function () {
        $('.main_new').slick('slickNext')
    });




})