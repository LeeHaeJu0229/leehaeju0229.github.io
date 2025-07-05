$(document).ready(function(){
    var slick_track_w = $('.slick-track').width();
        slick_track_w = slick_track_w - 20;
        // console.log(slick_track_w)
    $('.slick-track').width(slick_track_w);

    $('.responsive').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1050,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 680,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
            }
          },
          {
            breakpoint: 420,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          }

        ]
    });

    var htmlWidth = $('html').width();
    if(htmlWidth < 485){
        $('#nav .hamberger').click(function(){
            $(this).toggleClass('mobile')
        });
    }

    $('#nav .hamberger').click(function(){
        btn_init($('#nav .hamberger'), 500)

        $('#nav .hamberger').toggleClass('active');
        $('#nav').toggleClass('layer_on');

        $('#layer_menu').toggleClass('layer_on');

        setTimeout(function(){
            $('#layer_menu .layer_left .depth01 li .depth02').slideUp();
            $('#layer_menu .layer_left .depth01 li .mask').removeClass('on');
            $('#layer_menu .layer_left .depth01 li > a').removeClass('active');
            $('#layer_menu .layer_right .preview').hide();
            $('#layer_menu .layer_right .preview').eq(0).show();
        },500);
    });
    function btn_init(btn_name, timer_interval){
        $(btn_name).css('pointer-events', 'none');
        setTimeout(function(){
            $(btn_name).css('pointer-events', 'auto');
        }, timer_interval);
    }

    $('#dot_menu ul li').click(function(e){
        e.preventDefault();

        var index = $(this).index();
        var sec_of_t = $('.section').eq(index).offset().top;

        $('html, body').animate({scrollTop:sec_of_t}, 400);
    })

    /* layer menu */
    $('#layer_menu .layer_left .depth01 li').click(function(){
        var index = $(this).index();

        $('#layer_menu .layer_left .depth01 li .depth02').slideUp();
        $('#layer_menu .layer_left .depth01 li:eq('+index+') .depth02').stop().slideToggle();
    })
    $('#layer_menu .layer_left .depth01 li').eq(1).click(function(){
        $('#layer_menu .layer_left .depth01 li:eq(1) > a').toggleClass('active');
    })

    $('#layer_menu .layer_right .preview').eq(0).show();
    $('#layer_menu .layer_left .depth01 li a').hover(function(){
        $('#layer_menu .layer_right .preview').hide();

        var index = $(this).parents().index();
        $('#layer_menu .layer_right .depth01 .preview').eq(index).stop().fadeIn();
    },function(){
        
    })
    $('#layer_menu .layer_left .depth02 div').hover(function(){
        $('#layer_menu .layer_right .preview').hide();

        var index = $(this).index();
        $('#layer_menu .layer_right .depth02 .preview').eq(index).stop().fadeIn();
    },function(){
        
    })

    $('#layer_menu .layer_right .go_btn a').hover(function(){
        $(this).text('GO!')
    },function(){
        $(this).text('LEARN MORE')
    })


    /* show up animation */
    $('.main_txt_box em').addClass('show');
    $('.main_txt_box h1').addClass('show');
    $('.main_txt_box p').addClass('show');
    $('.main_ico_box ul li').addClass('show');

    $(window).scroll(function(){
        var sec_length = $('.section').length;
        var w_scroll_t = $(window).scrollTop();

        $('#dot_menu ul li').removeClass("on");
        for(i = 0; i < sec_length; i++){
            if($('.section').eq(i).offset().top - 120 <= w_scroll_t){
                $('#dot_menu ul li').removeClass('on')
                $('#dot_menu ul li').eq(i).addClass('on')
            }
        }

        var on_sec = $('#dot_menu ul li.on').index();
        var prev_sec_h = $('.section').eq(on_sec - 1).height();
        if($('#section02').offset().top - prev_sec_h / 10 <= w_scroll_t){
            $('#section02 .tit_box .title h2 span').addClass('show')
        }
        if($('#section04').offset().top - prev_sec_h / 3 <= w_scroll_t){
            // console.log(prev_sec_h)
            $('#section04 .publish .web_box').addClass('show')
        }

        var port_length = $('.portfolio .port').length;
        for(i = 0; i < port_length; i++){
            if($('.portfolio .port').eq(i).offset().top - 500 <= w_scroll_t){
                $('.portfolio .port').eq(i).addClass('show');
            }
        }
    })
});

/* =================================
skill counter
=================================== */
if ($('.counter .count').length) {
    $c = $('.counter .count');

    $c.each(function () {
        var $this = $(this);
        $this.data('target', parseInt($this.html()));
        $this.data('counted', false);
        $this.html('0');
    });

    $(window).bind('scroll', function () {
        var speed = 2500;

        $c.each(function (i) {
            var $t = $(this);
            if (!$t.data('counted') && $(window).scrollTop() + $(window).height() >= $t.offset().top) {
                $t.data('counted', true);

                $t.animate({
                    dummy: 1
                }, {
                    duration: speed,
                    step: function (now) {
                        var $this = $(this);
                        var val = Math.round($this.data('target') * now);
                        $this.html(val);
                    },
                    easing: 'easeInOutQuart'
                });

                // easy pie
                // $('.pie').easyPieChart({
                //     barColor: '#f82c47',
                //     trackColor: 'transparent',
                //     scaleColor: false,
                //     lineWidth: 15,
                //     size: 150,
                //     lineCap: 'square',
                //     animate: { duration: speed, enabled: true }
                // });
                $('.pie:even').easyPieChart({
                    barColor: '#fcbf0a',
                    trackColor: 'transparent',
                    scaleColor: false,
                    lineWidth: 10,
                    lineCap: 'round',
                    animate: { duration: speed, enabled: true }
                });
                $('.pie:odd').easyPieChart({
                    barColor: '#e09200',
                    trackColor: 'transparent',
                    scaleColor: false,
                    lineWidth: 10,
                    lineCap: 'round',
                    animate: { duration: speed, enabled: true }
                });
            }
        });
    }).triggerHandler('scroll');
}