$(function($) {

    $('#section_1').particleground({
        height: 'auto',
        dotColor: '#999',
        lineColor: '#999'
    });

    $('#wrapper').fullpage({
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
        menu: '#menu',
        css3: true,
        scrollingSpeed: 600,
        easingcss3: 'cubic-bezier(0.65, 0.05, 0.36, 1)',
        navigation: true,
        navigationPosition: 'right',
        afterLoad: function(anchorLink, index) {
            switch (index) {
                case 1:
                    $('#section_1 h1').css({
                        'opacity': '1'
                    })
                    $('#section_1 .intro-text').css({
                        'margin-top': '20px',
                        'opacity': '1'
                    })
                    break;
                case 2:
                    $('#section_2 .section-title h1').css({
                        'right': 'calc(50% - 75px)',
                        'opacity': '1'
                    });
                    $('#section_2 .section-title p').css({
                        'left': 'calc(50% - 60px)',
                        'opacity': '1'
                    });
                    $('#section_2 .row').css({
                        'opacity': '1'
                    });
                    break;
                case 3:
                    $('#section_3 .section-title h1').css({
                        'right': 'calc(50% - 75px)',
                        'opacity': '1'
                    });
                    $('#section_3 .section-title p').css({
                        'left': 'calc(50% - 60px)',
                        'opacity': '1'
                    });
                    $('#section_3 .container').css({
                        'opacity': '1'
                    });
                    break;
                case 4:
                    $('#section_4 .section-title h1').css({
                        'right': 'calc(50% - 100px)',
                        'opacity': '1'
                    });
                    $('#section_4 .section-title p').css({
                        'left': 'calc(50% - 60px)',
                        'opacity': '1'
                    });
                    $('#section_4 .team-title').css({
                        'transform': 'scale(1, 1)'
                    });
                    $('#section_4 .team-intro').css({
                        'opacity': '1'
                    });
                    break;
                case 5:
                    break;
            }
        },
        onLeave: function(index) {
            switch (index) {
                case 1:
                    $('#section_1 h1').css({
                        'opacity': '0.1'
                    })
                    $('#section_1 .intro-text').css({
                        'margin-top': '800px',
                        'opacity': '0'

                    })
                    break;
                case 2:
                    $('#section_2 .section-title h1').css({
                        'right': '0',
                        'opacity': '0.1'
                    });
                    $('#section_2 .section-title p').css({
                        'left': '0',
                        'opacity': '0.1'
                    });
                    $('#section_2 .row').css({
                        'opacity': '0.1'
                    });
                    break;
                case 3:
                    $('#section_3 .section-title h1').css({
                        'right': '0',
                        'opacity': '0.1'
                    });
                    $('#section_3 .section-title p').css({
                        'left': '0',
                        'opacity': '0.1'
                    });
                    $('#section_3 .container').css({
                        'opacity': '0.1'
                    });
                    break;
                case 4:
                    $('#section_4 .section-title h1').css({
                        'right': '0',
                        'opacity': '0.1'
                    });
                    $('#section_4 .section-title p').css({
                        'left': '0',
                        'opacity': '0.1'
                    });
                    $('#section_4 .team-title').css({
                        'transform': 'scale(0, 0)'
                    });
                    $('#section_4 .team-intro').css({
                        'opacity': '0.1'
                    });
                    break;
                case 5:
                    break;
            }
        },
        afterResize: function() {

        }
    });

    $('.multiple-items').slick({
        dots: true,
        infinite: true,
        fade: true,
        slidesToShow: 4,
        slidesToScroll: 1
    });

    $('#section_3 .multiple-items').on('click', function(e) {

        var _e = e.target;
        do {
            if (_e.className.indexOf('thumbnail') > -1) {
                $.fn.fullpage.setKeyboardScrolling(false);
                $.fn.fullpage.setAllowScrolling(false);
                createModal(_e);
            }
            _e = _e.parentNode;
        } while (_e.tagName === 'DIV')

    });



    // 模态框
    function createModal(elm) {
        // 创建遮罩层函数
        function createMask(data) {
            var maskDiv = $('<div id="mask"></div>');
            $('body').append(maskDiv);

            var contentDiv = $('<div class="popup"><div class="popup-header"><h4 class="text-center"></h4><i class="fa fa-times" aria-hidden="true"></i></div><div class="popup-content"></div></div>');
            $('body').append(contentDiv);
        }

        // 渲染数据
        function renderPopup(data) {
            $('.popup-header h4').text(data.title);
            $('.popup-content').append('<img src=' + data.img.split('_')[0] + '.png>');

        }

        createMask();
        $('.popup-header i').on('click', function(e) {
            $('.popup').remove();
            $('#mask').remove();
            $.fn.fullpage.setKeyboardScrolling(true);
            $.fn.fullpage.setAllowScrolling(true);
        });

        var data = {
            'title': $(elm).find('h4').text(),
            'img': $(elm).find('img').attr('src')
        }

        renderPopup(data);

    }








    window.onresize = window.onload = function() {

        if ($(window).width() < 992) {
            $('.multiple-items').slick('unslick');

            $('.multiple-items').slick({
                dots: true,
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1
            });
        }

        if ($(window).width() < 768) {
            $('.multiple-items').slick('unslick');

            $('.multiple-items').slick({
                dots: true,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            });
        }

        if ($(window).width() > 992) {
            $('.multiple-items').slick('unslick');

            $('.multiple-items').slick({
                dots: true,
                infinite: true,
                slidesToShow: 4,
                slidesToScroll: 2
            });
        }
    }

});
