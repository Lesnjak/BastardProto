"use strict";
$(document).ready(function () {
    /////////////////change checked//////////////////
    if ($(document).width() < 768) {
        $('#radio33').attr('checked', '');
        $('#radio11').attr('checked', 'checked');
    }


    ///////////////////////////text animate/////////////////////////
    $(function () {

        var $slogans = $("p.slogan").find("strong");
        var $holder = $("#holder");

        //set via JS so they're visible if JS disabled
        $slogans.parent().css({position: "absolute", top: "0px", left: "0px"});

        //settings
        var transitionTime = 1;
        var slogansDelayTime = 6;

        //internal
        var totalSlogans = $slogans.length;

        var oldSlogan = 0;
        var currentSlogan = -1;

        //initialize
        switchSlogan();

        function switchSlogan() {

            oldSlogan = currentSlogan;

            if (currentSlogan < totalSlogans - 1) {
                currentSlogan++
            } else {
                currentSlogan = 0;
            }

            TweenLite.to($slogans.eq(oldSlogan), transitionTime, {top: -20, alpha: 0, rotationX: 90});
            TweenLite.fromTo($slogans.eq(currentSlogan), transitionTime, {top: 20, alpha: 0, rotationX: -90}, {
                top: 0,
                alpha: 1,
                rotationX: 0
            });

            TweenLite.delayedCall(slogansDelayTime, switchSlogan);
        }

    });


///////////////////////////////////////////line animate//////////////////////////////////
    $(document).scroll(function () {

        var voises = $('.voice-section').offset().top - 1000;
        var servises = $('.servise').offset().top - 900;
        var clients = $('.clients').offset().top - 1000;
        var our = $('.our-works').offset().top - 900;
        var order = $('.order').offset().top - 900;
        var blog = $('.blog').offset().top - 900;
        var footer = $('.footer').offset().top - 900;
        // var seven = $('.project-section-seven').offset().top - 900;


        var top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
        if (top > voises) {
            $('.voice-section').addClass('redLine')
        }

        if (top > servises) {
            $('.servise').addClass('redLine1')
        }
        if (top > clients) {
            $('.clients').addClass('redLine')
        }

        if (top > our) {
            $('.our-works').addClass('redLine1')
        }

        if (top > order) {
            $('.order').addClass('redLine')
        }

        if (top > order) {
            $('.blog').addClass('redLine1')
        }

        if (top > footer) {
            $('.footer').addClass('redLine')
        }

        if (top > order) {
            $('.form').addClass('redLineVertical')
        }
        // if (top > seven) {
        //     $('.project-section-seven').addClass('redLine1')
        // }


    });
//////////////////////////////////////////video backgr///////////////////////////
    $(document).on('input', ':input', function () {
        var input = $(this);
        input.toggleClass('filled', Boolean(input.val().length));
    });


});


$(document).ready(function () {
    if ($(window).width() > 768) {
        // var videobackground = new $.backgroundVideo($('.jquery-background-video'), {
        //     "align": "centerXY",
        //     "width": 1280,
        //     "height": 720,
        //     "path": "video/",
        //     "filename": "NYC-Traffic",
        //     "types": ["mp4", "ogv", "webm"],
        //     "preload": true,
        //     "autoplay": true,
        //     "loop": false
        //
        // });

    }
    console.log($(window).width());

    $('.menu-button').on('click', function () {
        // $('body').css('overflow','hidden');

        $('.aside__right div').removeClass('aside__border1').addClass('aside__border');

        setTimeout(function () {
            $('.lineChoise').addClass('showLine');
        }, 1000);
    });
    $('.menu-close').on('click', function () {
        // $('body').css('overflow','visible');
        $('.aside__right div').addClass('aside__border1');

        $('.lineChoise').removeClass('showLine');


    });

    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > $('.nameBlock .popup-btn').offset().top - 30) {
                $('.headerScroll .buttonStock').addClass('buttonStockScroll');

            }
            else {
                $('.headerScroll .buttonStock').removeClass('buttonStockScroll');
            }
            if ($(window).width() < 480) {
                if ($(this).scrollTop() > 1000) {
                    $('.headerScroll .buttonStock').addClass('buttonStockScroll');

                    $('.logo').css('display', 'none');


                }
                else {
                    $('.headerScroll .buttonStock').removeClass('buttonStockScroll');

                    $('.logo').css('display', 'block');

                }
            }
            // if ($(window).width() < 768) {
            //     if ($(this).scrollTop() > 0) {
            //
            //         $('.showlogo img').css('display', 'none');
            //     }
            //
            //     else {
            //
            //         $('.showlogo img').css('display', 'block');
            //     }
            // }
            if ($(this).scrollTop() > 0) {
                $('.headerScrollNo').addClass('headerScroll');
                $('.headerScrollNo-portfolio').addClass('headerScroll-portfolio');

            }

            else {
                $('.headerScrollNo').removeClass('headerScroll');
                $('.headerScrollNo-portfolio').removeClass('headerScroll-portfolio');

            }
        });
    });


////////////////////////////////////////////////scroll-menu////////////////////////////////////////////////

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }


    function pageScroll() {

    }

    pageScroll();

    (function () {

        // Aside menu
        var Menu = function () {
            function Menu(options) {
                _classCallCheck(this, Menu);

                this.button = document.querySelector(options.button);
                this.elem = document.querySelector(options.elem);
                this.closeButton = document.querySelector(options.closeButton);
                this.toggleElem = document.querySelector(options.toggleElem);
                this.animateElems = document.querySelectorAll(options.animateElems);

                this.init();
            }

            _createClass(Menu, [{
                key: 'open',
                value: function open() {
                    this.button.classList.add('closed');
                    this.closeButton.classList.remove('closed');
                    this.elem.classList.add('opened');
                    // this.toggleElem.classList.add('hidden');
                    for (var i = 0; i < this.animateElems.length; ++i) {
                        this.animateElems[i].classList.add('animate');
                    }
                    window.addEventListener('wheel', this.scrollDestroy);
                }
            }, {
                key: 'close',
                value: function close() {
                    this.button.classList.remove('closed');
                    this.closeButton.classList.add('closed');
                    this.elem.classList.remove('opened');
                    // this.toggleElem.classList.remove('hidden');
                    for (var i = 0; i < this.animateElems.length; ++i) {
                        this.animateElems[i].classList.remove('animate');
                    }
                    window.removeEventListener('wheel', this.scrollDestroy);
                }
            }, {
                key: 'scrollDestroy',
                value: function scrollDestroy(e) {
                    e.preventDefault();
                }
            }, {
                key: 'init',
                value: function init() {
                    var _this = this;

                    this.button.addEventListener('click', function () {
                        _this.open();
                    });
                    this.closeButton.addEventListener('click', function () {
                        _this.close();
                    });
                    // escape keydown
                    document.documentElement.addEventListener('keydown', function (e) {
                        if (e.keyCode === 27) _this.close();
                    });
                }
            }]);

            return Menu;
        }();

        var aside = new Menu({
            button: '.menu-button',
            elem: '.aside',
            closeButton: '.menu-close',
            toggleElem: '#fp-nav', // show/hide
            animateElems: '.js-animated'
        });

        if (document.querySelector('.menu')) {
            var links = document.querySelectorAll('.menu li a');
            for (var i = 0; i < links.length; ++i) {
                links[i].addEventListener('click', function () {
                    aside.close();
                });
            }
        }
    })(document);
////////////////////////////////////////////////end scroll-menu////////////////////////////////////////////////
    var userInput = $('.userInput');

    userInput.on('focus', function () {


        $(this).parent().addClass('focus');
    });
    userInput.on('blur', function () {

        if ($(this).val() == '') {

            $(this).parent().removeClass('focus')
        }

    });


//////////////////////////////popup///////////////////////////////
    $(document).ready(function () {
        $(' .popup-btn').click(function (e) {
            $('.popup-wrap').fadeIn(250);
            $('.popup-box').removeClass('transform-out').addClass('transform-in');
            e.preventDefault();
        });

        $(' .popup-close-all').click(function (e) {
            $('.popup-wrap').fadeOut(500);
            $('.popup-box').removeClass('transform-in').addClass('transform-out');
            e.preventDefault();
        });
        $(' .popup-btn-agree').click(function (e) {
            var name = $('.form form #name').val();
            var phone = $('.form form #phone').val();
            var email = $('.form form #email').val();
            var regExp = email.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i);
            if (name && phone && regExp) {
                e.preventDefault();

                $('.popup-wrap-agree').fadeIn(250);
                $('.popup-box-agree').removeClass('transform-out').addClass('transform-in');


            }
        });
        $(' .popup-btn-agree1').click(function (e) {
            var name = $('form #name1').val();
            var phone = $('form #phone1').val();
            var email = $('form #email1').val();
            var regExp = email.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i);
            if (name && phone && regExp) {
                e.preventDefault();
                $(' .popup-close-all').click();
                $('.popup-wrap-agree').fadeIn(250);
                $('.popup-box-agree').removeClass('transform-out').addClass('transform-in');


            }
        });
        $(' .popup-btn-agree2').click(function (e) {
            var email = $('form #email-blog').val();
            var regExp = email.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i);
            if (regExp) {
                e.preventDefault();
                $(' .popup-close-all').click();
                $('.popup-wrap-agree-blog').fadeIn(250);
                $('.popup-box-agree-blog').removeClass('transform-out').addClass('transform-in');


            }
        });

        $(' .popup-close-agree').click(function (e) {
            // var name= $('.form form #name').val();
            // var phone= $('.form form #phone').val();
            // var email= $('.form form #email').val();
            $('.popup-wrap-agree').fadeOut(500);
            $('.popup-box-agree').removeClass('transform-in').addClass('transform-out');

            e.preventDefault();
        });

    });


////////////////////////slider portf/////////////////////////////

    var slicPort = $('.slider-nav');


    slicPort.slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 500,
        dots: true,
        responsive: [
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    dots: false
                }
            }
        ]

    });

    //////////////////////////slider video///////////////////////////////
    $('.slider-for-two').slick({
        touchMove: false,
        swipe: true,
        slidesToShow: 1,

        arrows: false,
        speed: 400,
        loop: false,
        // vertical:true,
        asNavFor: '.slider-nav-two'
    });
    $('.slider-nav-two').slick({
        touchMove: false,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 400,
        asNavFor: '.slider-for-two',
        dots: true,
        focusOnSelect: true

    });
////////////////////////////////////////////slider servises////////////////////////
    $('.slider-nav-three').slick({
        loop: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        speed: 500,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2
                }
            }
        ]

    });
    $('.slider-project').slick({
        loop: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots:true,
        speed: 500,
        appendArrows: $('.buttons-block-proj'),
        prevArrow:'<div id="prev"><span class="rotat">➞</span><span>Назад </span></div>',
        nextArrow:'<div id="next"><span>Вперед </span><span>➞</span></div>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow:3
                }
            },
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2
                }
            }
        ]

    });
    $('.slider-nav .slick-slide ').on('click', function (e) {
        $('.slick-slide').removeClass('slick-current');

        $(e.target).parent().parent().parent().addClass('slick-current');
    });

    $('a[data-slide]').click(function (e) {
        e.preventDefault();
        var slideno = $(this).data('slide');
        $('.slider-nav').slick('slickGoTo', slideno - 1);
    });

    $('.slider-nav img ').on('click', function (e) {
        var target = e.target;

        $('.slider-nav img').parent().removeClass('focus');
        $(target).parent().addClass('focus');
        console.log(target);


    });


/////////////////////////////////////////////////////////////

    // $('.lightbox').magnificPopup({
    //     type: 'iframe'});
    $(document).ready(function () {
        var tar = 'ghj';
        $(".scroll-box").niceScroll({
            cursorcolor: "#fff",
            cursorwidth: "7px",
            cursorborder: "0px solid #5e90be",
            cursorborderradius: 4,
            autohidemode: false


        });
        if($(document).width()>993){
            $("html").niceScroll({
                cursorcolor: "grey",
                cursorwidth: "8px",
                cursorborder: "0px solid #5e90be",
                cursorborderradius: 4,
                autohidemode: false


            });
        }


        $(window).resize(function () {
            $(".scroll-box").getNiceScroll().resize();
        });
        $('.lightbox, .serv').click(function (e) {
            // $('body').css('overflow','hidden');
            // $('body,html').animate({scrollTop: 0}, 1000);
            var eframe = $('.youtube-video');
            var link = $(this).attr('data-youtube');
            if (tar != this) {
                eframe.attr('src', 'https://www.youtube.com/embed/' + link + '?enablejsapi=1&version=3&playerapiid=ytplayer');
            }
            else {

            }

            tar = this;

            $('.popup-wrap-video').fadeIn(250);
            $('.popup-box-video').removeClass('transform-out').addClass('transform-in');

            setTimeout(function () {
                eframe[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
            }, 1000);

            e.preventDefault();
        });

        $('.popup-close').click(function (e) {
            $('.popup-wrap-video').fadeOut(500);
            $('.popup-box-video').removeClass('transform-in').addClass('transform-out');
            $('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
            e.preventDefault();
        });
    });

});

$(document).ready(function () {
    $('.main-video  ').click(function (e) {
        // $('body').css('overflow','hidden');
        // $('body,html').animate({scrollTop: 0}, 600);
        $('.popup-wrap-video-main').fadeIn(250);
        $('.popup-box-video-main').removeClass('transform-out').addClass('transform-in');
        $('.youtube-video-main')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');

        e.preventDefault();
    });

    $(' .popup-close-main').click(function (e) {
        // $('body').css('overflow','visible');
        $('.popup-wrap-video-main').fadeOut(500);
        $('.popup-box-video-main').removeClass('transform-in').addClass('transform-out');
        $('.youtube-video-main')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
        e.preventDefault();
    });
});
$(document).ready(function () {

});
$('.servise-servise .circle-image').on('click',function () {
    $(this).parent().parent()[0].click();

})


