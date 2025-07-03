/* =================================
   scroll setting
=================================== */
$('#header em a').click(function(e){
    e.preventDefault();

    var sec01_oft = $('#section1').offset().top;
    $('html, body').animate({scrollTop:sec01_oft}, 400);
})
$('.sec1_arr').click(function(e){
    e.preventDefault();

    var sec02_oft = $('#section2').offset().top;
    $('html, body').animate({scrollTop:sec02_oft}, 400);
})

/* =================================
   scroll show
=================================== */
var sec02_oft = $('.sec').eq(1).offset().top;
sec02_oft = sec02_oft - $(window).height() / 2.5;
$(window).scroll(function(){
    var windowScrollTop = $(window).scrollTop();
    if(sec02_oft < windowScrollTop){
        $('.sec2_box').addClass('show');
    }

    var window_h = $(window).height();
    var slide_length = $('#section8 .slide_box').length;
    for(i = 0; i < slide_length; i++){
        if($('#section8 .slide_box').eq(i).offset().top - window_h / 2 <= windowScrollTop){
            $('#section8 .slide_box').eq(i).addClass('show');
        }
    }

    var port_length = $('.portfolio').length;
    for(i = 0; i < port_length; i++){
        if($('.portfolio').eq(i).offset().top - window_h / 2 <= windowScrollTop){
            $('.portfolio').eq(i).addClass('show');
        }
    }
})

/* =================================
   MAIN HOVER EFFECT
=================================== */
var $wrap = $('.sec1_box'),
lFollowX = 0,
lFollowY = 0,
x = 0,
y = 0,
friction = 1 / 10;

function main_hover() {
x += (lFollowX - x) * friction;
y += (lFollowY - y) * friction;

$wrap.css({
'transform': 'translate(-50%, -50%) perspective(600px) rotateY(' + -x + 'deg) rotateX(' + y + 'deg)'
});
window.requestAnimationFrame(main_hover);
}

$(window).on('mousemove click', function(e) {
var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
lFollowX = (7 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
lFollowY = (7 * lMouseY) / 100;
});

main_hover();


/* =================================
   TYPING EFFECT
=================================== */
(function($) {
    "use strict";
    $('[data-typer-targets]').typer();
    $.typer.options.clearOnHighlight=false;
})(jQuery);

//배경 파티클 애니메이션
/* ---- particles.js config ---- */
particlesJS("particles-js", {
    "particles": {
        "number": {
        "value": 14,
        "density": {
            "enable": true,
            "value_area": 1104.8066982851817
        }
        },
        "color": {
        "value": "#ffffff"
        },
        "shape": {
        "type": "circle",
        "stroke": {
            "width": 2,
            "color": "#4a1f70"
        },
        "polygon": {
            "nb_sides": 5
        },
        },
        "opacity": {
        "value": 0,
        "random": false,
        "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
        }
        },
        "size": {
        "value": 7.891476416322726,
        "random": true,
        "anim": {
            "enable": true,
            "speed": 5,
            "size_min": 0.1,
            "sync": false
        }
        },
        "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#6c4bd7",
        "opacity": 0.5,
        "width": 2
        },
        "move": {
        "enable": true,
        "speed": 1.3,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
            "enable": true,
            "rotateX": 600,
            "rotateY": 1200
        }
        }
    },
    "interactivity": {
        "detect_on": "window",
        "events": {
        "onhover": {
            "enable": false,
            "mode": "repulse"
        },
        "onclick": {
            "enable": false,
            "mode": "push"
        },
        "resize": true
        },
        "modes": {
        "grab": {
            "distance": 400,
            "line_linked": {
            "opacity": 1
            }
        },
        "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
        },
        "repulse": {
            "distance": 200,
            "duration": 0.4
        },
        "push": {
            "particles_nb": 4
        },
        "remove": {
            "particles_nb": 2
        }
        }
    },
    "retina_detect": true
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

                $('.pie:even').easyPieChart({
                    barColor: '#5a26af',
                    trackColor: 'transparent',
                    scaleColor: false,
                    lineWidth: 8,
                    lineCap: 'round',
                    animate: { duration: speed, enabled: true }
                });
                $('.pie:odd').easyPieChart({
                    barColor: '#3b1579',
                    trackColor: 'transparent',
                    scaleColor: false,
                    lineWidth: 8,
                    lineCap: 'round',
                    animate: { duration: speed, enabled: true }
                });
            }
        });
    }).triggerHandler('scroll');
}


/* =================================
   main
=================================== */
$(document).ready(function(){
    $('.sec1_arr').hover(function(){
        $('.sec1_arr span').addClass('show');
    },function(){
        $('.sec1_arr span').removeClass('show');
    })

    $('#nav').click(function(){
        $(this).toggleClass('show');

        if($(window).width() <= 480){
            $(this).toggleClass('mobile');
        }

        $('#header em a').toggle();
    })


    /* =================================
        slick slider
    =================================== */
    $('.responsive').slick({
        dots: true,
        infinite: false,
        speed: 400,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
        {
            breakpoint: 1920,
            settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            dots: true
            }
        },
        {
            breakpoint: 1050,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: true
            }
        },
        {
            breakpoint: 680,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,

            }
        },
        {
            breakpoint: 420,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            }
        }

        ]
    });

    /* animation slide hover gif */
    $('.slide_box.ani .web_slide').hover(function(){
        var target_index = $(this).parent().parent().index();
        target_index = target_index + 1;

        $(this).find('.web_img img').attr("src","assets/img/thumb_ani0"+target_index+".gif");
    },function(){
        var target_index = $(this).parent().parent().index();
        target_index = target_index + 1;

        $(this).find('.web_img img').attr("src","assets/img/thumb_ani0"+target_index+".jpg");
    })
    
    /* hamburger menu */
    var windowWidth = $( window ).width();
    if(windowWidth <= 480){
        $('#nav .hamburger').click(function(){
            $(this).toggleClass('mobile')
        });
    }

    $('#nav').click(function(){
        btn_init($('#nav'), 500)

        $("#header h1").toggle();

        $('#nav .hamburger').toggleClass('show');
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

    /* layer menu */
    $('#layer_menu .layer_left .depth01 li').click(function(){
        var index = $(this).index();

        $('#layer_menu .layer_left .depth01 li .depth02').slideUp();
        $('#layer_menu .layer_left .depth01 li:eq('+index+') .depth02').stop().slideToggle();
    })
    $('#layer_menu .layer_left .depth01 li').eq(2).click(function(){
        $('#layer_menu .layer_left .depth01 li:eq(2) > a').toggleClass('active');
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

    /* lightGallery */
    $("#mamonde_web").lightGallery(); 
    $("#everybot_web").lightGallery();
    $("#beauren_web").lightGallery();
    $("#mommake_web").lightGallery(); 
    $("#glance_web").lightGallery();
    $("#ecotech_web").lightGallery();
    $("#piezo_web").lightGallery(); 
    $("#bnf_web").lightGallery();
    $("#mediozen_web").lightGallery();

    $('.detail').lightGallery({
        selector: 'this'
    });
    $('.poster').lightGallery({
        selector: 'this'
    });
    $('.ai').lightGallery({
        selector: 'this'
    });
})