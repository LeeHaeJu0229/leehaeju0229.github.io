$(document).ready(function(){
    // 스킵
    $('.skip a').on('focus', function(){
        $(this).stop().animate({"top":0});
    });
    $('.skip a').on('click', function(){
        $(this).stop().animate({"top":"-30px"});
    });
    $('.skip a').on('focusout', function(){
        $(this).stop().animate({"top":"-30px"});
    });

    // 메인 슬라이드
    $('.main_slide').eq(0).css({
        left: 0
    })

    $(window).scroll(function(){
        if($(document).scrollTop() >= $('#section02').offset().top - $('#header').height()){
            $('#header').css({
                'box-shadow': '0px -2px 20px 0px rgba(0,0,0,0.1)'
            })
        }
        else{
            $('#header').css({
                'box-shadow': '0 0 0 0 rgba(0,0,0,0)'
            })
        }
    })
    
    var main_slide_length = $('.main_slide').length;
    var main_slide_num = 1;
    $('.main_dot .line').eq(0).addClass('on').html('<span>'+main_slide_num+' / '+main_slide_length+'</span>');

    // 메인슬라이드 자동
    // main_slide_interval();
    var count = 1
    var tmp = 0;
    // var dot_on_index = $('.main_dot .line.on').index() + 1;
    $('.main_slide_btn.next').click(function(){
        btn_init('.main_slide_btn');
        btn_init('.main_dot .line');

        tmp = count % main_slide_length;
        count++;
        tmp = $('.main_dot .line.on').index() + 1;
        if(tmp == main_slide_length){
            tmp = 0
        }

        main_slide('.main_slide', tmp, "100%", (tmp - 1), "-100%");
        
        $('.main_dot .line').eq(tmp - 1).removeClass('on');
        $('.main_dot .line').eq(tmp).addClass('on');

        main_num();
        // console.log(tmp)
    });

    $('.main_slide_btn.prev').click(function(){
        btn_init('.main_slide_btn');
        btn_init('.main_dot .line');

        count--;
        tmp = count % main_slide_length;
        tmp = $('.main_dot .line.on').index();
        // console.log(tmp)
        
        main_slide('.main_slide', (tmp - 1), "-100%", tmp, "100%");

        $('.main_dot .line').eq(tmp).removeClass('on');
        $('.main_dot .line').eq(tmp - 1).addClass('on');

        main_num();
    });
    
    
    $('.main_dot .line').click(function(){
        btn_init('.main_slide_btn');
        btn_init('.main_dot .line');

        var dot_tmp = $(this).index();
        var on_dot_index = $('.main_dot .line.on').index();

        $('.main_dot .line').removeClass('on');
        $('.main_dot .line').eq(dot_tmp).addClass('on');

        $('.main_dot .line span').remove();
        $('.main_dot .line.on').html('<span>'+(dot_tmp + 1)+' / '+main_slide_length+'</span>');

        if(dot_tmp > on_dot_index){
            $('.main_slide').eq(dot_tmp).css({
                left: "100%"
            }).animate({
                left: 0
            }, 800)

            $('.main_slide').eq(dot_tmp - 1).animate({
                left: "-100%"
            }, 800)
        }
        if(dot_tmp < on_dot_index){
            $('.main_slide').eq(dot_tmp).css({
                left: "-100%"
            }).animate({
                left: 0
            }, 800)

            $('.main_slide').eq(dot_tmp + 1).animate({
                left: "100%"
            }, 800)
            // 3개
            $('.main_slide').eq(dot_tmp - 1).animate({
                left: "100%"
            }, 800)
        }
    })

    // $('.main_slide_box').hover(function(){
    //     clearInterval(timer);
    // }, function(){
    //     main_slide_interval();
    // });

    // 베스트 슬라이드**
    $('.best_slide_box').eq(0).css({
        left: 0
    })
    var best_prod_box_length = $('.best_slide_box').length;
    var count2 = 1;
    $('.slide_btn.right').click(function(){
        btn_init('.slide_btn');

        var tmp = count2 % best_prod_box_length;
        count2++;

        main_slide('.best_slide_box', tmp, "100%", (tmp - 1), "-100%");
    });;

    $('.slide_btn.left').click(function(){
        btn_init('.slide_btn');

        count2--;
        var tmp = count2 % best_prod_box_length;
        
        main_slide('.best_slide_box', (tmp - 1), "-100%", tmp, "100%");
    });

    // 시즌 슬라이드 및 버튼
    $('.type_slide_box.slide_box01').css({
        left: 0
    });

    var type_index = 0;
    var type_slide_box = 0;
    var count3 = 1;
    $(".type_btn .type").click(function(){
        count3 = 1;
        
        $('.type_btn .type a').css({
            color: '#777'
        });
        $(this).children('a').css({
            color: '#eea9a7'
        });

        type_index = $(this).index();

        $('.type_container').css({
            display: 'none'
        })
        $('.type_container').eq(type_index).css({
            display: 'block'
        })

        var type_slide_arr = ['#type_moist',
                            '#type_aging',
                            '#type_acne',
                            '#type_whitening',
                            '#type_pore',
                            '#type_boosting',
                            '#type_sun',
                            '#type_deadskin'];
        type_slide_box = $(''+type_slide_arr[type_index]+' .type_slide_box')

        // 슬라이드 1개일 때 버튼 삭제
        if(type_slide_box.length == 1){
            $('.type_slide_btn').css({
                display:'none'
            })
        }
        else{
            $('.type_slide_btn').css({
                display:'block'
            })
        }

        // 슬라이드 박스 초기화
        $(type_slide_box).css({
            left: '100%'
        });
        $(type_slide_box).eq(0).css({
            left: 0
        });
    });

    $('.type_slide_btn.right').click(function(){
        btn_init('.type_slide_btn');

        var tmp = count3 % type_slide_box.length;
        count3++;

        main_slide(type_slide_box, tmp, "100%", (tmp - 1), "-100%");
    });
    $('.type_slide_btn.left').click(function(){
        btn_init('.type_slide_btn');

        count3--;
        var tmp = count3 % type_slide_box.length;

        main_slide(type_slide_box, (tmp - 1), "-100%", tmp, "100%");
    });

    // 이벤트 슬라이드**
    var event_slide_index = $('.event_slide').index();
    var slide_wid = parseInt($('.event_slide').width()) + 15;
    // console.log(slide_wid)
    $('.event_slide').eq(0).css({
        left: 0
    })
    $('.event_slide').eq(1).css({
        left: slide_wid
    })
    $('.event_slide').eq(2).css({
        left: slide_wid * 2
    })
    
    var count4 = 1;
    $('.event_slide_btn.right').click(function(){
        btn_init('.event_slide_btn');

        var tmp = count4 % $('.event_slide').length;

        // 첫번째 이미지 위치 초기화
        if(tmp == $('.event_slide').length - 1) {
            $('.event_slide').eq(0).css({
                left: slide_wid * 2
            }).animate({
                left: slide_wid
            }, 800);
        }
        
        count4++;

        $('.event_slide').eq(tmp).css({
            left: slide_wid
        }).animate({
            left: 0
        }, 800)

        $('.event_slide').eq(tmp - 1).animate({
            left: slide_wid * -1
        }, 800)

        $('.event_slide').eq(tmp + 1).css({
            left: slide_wid * 2
        }).animate({
            left: slide_wid
        }, 800);
    });

    $('.event_slide_btn.left').click(function(){
        btn_init('.event_slide_btn');
        
        count4--;   
        var tmp = count4 % $('.event_slide').length;


        $('.event_slide').eq(tmp - 1).css({
            left: slide_wid * -1
        }).animate({
            left: 0
        }, 800)

        $('.event_slide').eq(tmp).animate({
            left: slide_wid
        }, 800)

        $('.event_slide').eq(tmp + 1).animate({
            left: slide_wid * 2
        }, 800)

        // 수동 초기화
        if(tmp == $('.event_slide').length - 1) {
            $('.event_slide').eq(0).animate({
                left: slide_wid * 2
            }, 800)
        }
    });
    
    /*------------------------------------*/
    ///////////////// 함수 /////////////////
    /*------------------------------------*/
    var timer_interval = 600;
    var slide_easing = 'easeOutSine';
    function main_slide(name, next, pos1, prev, pos2){
        $(name).eq(next).css({
            left: pos1
        }).animate({
            left: 0
        }, timer_interval, slide_easing)

        $(name).eq(prev).animate({
            left: pos2
        }, timer_interval, slide_easing)
    };

    function btn_init(btn_name){
        $(btn_name).css('pointer-events', 'none');
        setTimeout(function(){
            $(btn_name).css('pointer-events', 'auto');
        }, timer_interval);
    }

    function main_slide_interval(){
        timer = setInterval(function(){
            $('.main_slide_btn.next').trigger('click');
        }, 4000);
    }

    function main_num(){
        main_slide_num = $('.main_dot .line.on').index() + 1;
        $('.main_dot .line span').remove();
        $('.main_dot .line.on').html('<span>'+main_slide_num+' / '+main_slide_length+'</span>');
    }
}); 