$(document).ready(function(){
    /* if mobile size txt bug fix */
    if($(window).width() <= 800){
        for(i = 0; i < $('.box_name').length; i++){
            var box_heigth = $('.box_name').height();
            $('.box_name').eq(i + 1).css({
                top: box_heigth * -(i + 1)
            })
        }
    }

    setTimeout(function(){
        $('.load_pop').animate({
            top: '-100%'
        })
    }, 2000)
    
    // var box_w = $('.box_name').width();
    // var box_h = $('.box').height();
    // $('.move .a').css({

    // })
 
    /*------------------------------------*/
    ///////////////// Main /////////////////
    /*------------------------------------*/

    // project list loading
    setTimeout(function(){
    
        setTimeout(function(){
            load_menu();
            load_dot();
            load_list_txt();
        }, 700);
        function load_menu(){
            $('.nav div.home').delay(500).css({
                left: '-15px'
            }).animate({
                left: 0,
                opacity: 1
            }, 400)

            $('.nav div.menu').delay(500).css({
                left: '50px'
            }).animate({
                left: '35px',
                opacity: 1
            }, 400)
        }
        function load_dot(){
            $('.project_list .round_line .dot').delay(100).animate({
                width: '8px',
                height: '8px',
                opacity: 1
            }, 90)
            .animate({
                width: 0,
                height: 0
            }, 90)
            .animate({
                width: '8px',
                height: '8px'
            }, 90)
            .animate({
                width: '4px',
                height: '4px'
            }, 450)

            $('.nav .dot span').css({
                animation: 'menu_dot .8s .6s forwards'
            })
            setTimeout(function(){
                $('.nav .dot span').css({
                    animation: 'none',
                    transform: 'scale(1)'
                })
            }, 1400)
        }
        function load_list_txt(){
            $('.project_list .txt_box span:eq(0)').animate({
                left: '35px',
                opacity: 0
            }, 300)
            .animate({
                left: '4px',
                opacity: 1
            }, 400)
        }
    
    // project list hover
    setTimeout(function(){  // 로딩동안 hover 방지
        $('.project_list').hover(function(){
            $('.project_list .round_line svg circle').attr('r', '42').css({
                'stroke-dasharray': 264
            });
    
            $('.project_list .txt_box').css({
                padding: '15px 0'
            });
            
            $('.project_list .round_line .dot').addClass('hover_dot');     
            $('.project_list .txt_box span').removeClass().addClass('hover_list_txt');     
        },function(){
            $('.project_list .round_line svg circle').attr('r', '37.5').css({
                'stroke-dasharray': 236
            });
    
            $('.project_list .txt_box').css({
                padding: '24px 0'
            });

            $('.project_list .round_line .dot').removeClass('hover_dot')
            $('.project_list .txt_box span').removeClass().addClass('leave_list_txt');
        });

    }, 1300);


    // loading animate
    var scroll_tf = true;
    var box_length = $('.move01 .box').length;
    var project_h = $('.project_num').height();
    // console.log(box_length)
    if(scroll_tf = true){
        // console.log(scroll_tf)
        // 첫 번째 move
        for(i = 0; i < (box_length - 1); i++){
            $('.move:eq(0) .box').eq(i).delay(120 * i).animate({
                top: '-100%'
            },500)
        }

        $('.move:eq(0) .box').eq(3).css({
            animation: 'last_up .4s .4s ease forwards, last_up_easing .7s .4s ease-in-out forwards'
        })

        $('.box_num .num_up span').eq(0).delay(150).animate({
            top: 0
        },500)

        // 제목 스크롤
        $('.project_name .box_name').eq(0).css({
            animation: 'show_up .55s .1s forwards',
            display: 'block',
            overflow: 'hidden'
        })

        $('.box_name:eq(0) .name_up').delay(150).animate({
            top: 0
        },550)

        $('.box_name:eq(0) .rolling').delay(200).animate({
            top: 0
        },700)

        $('.box_name:eq(0) span').css({
            top: project_h
        }).animate({
            top: 0
        },600)

        $('.svg_box').eq(0).css({
            display: 'block'
        })

        // 함수 실행 중 scroll 비활성화
        scroll_tf = false;

        // 함수 실행 끝난 후 scroll 활성화
        setTimeout(function(){
            scroll_tf = true;
        }, 1300);
    }


    // 스크롤 시 move
    var direction;
    var count = 1;
    $(document).each(function(e) {
        $('#main_wrap').on('mousewheel DOMMouseScroll', function(e) {
            // e.preventDefault();
            if (!event) {
                event = window.event;
            }
            if (event.wheelDelta) {
                direction = event.wheelDelta / 120;
            } 

            // 내릴 때 direction -1
            if (direction < 0) {    
                
                // scroll이 true일 때 함수 실행
                if(scroll_tf){                 
                    var tmp = count % $('.move').length
                    count++;

                    $('.move:eq('+(tmp - 1)+') .box').eq(3).css({
                        animation: 'up_del .4s forwards'
                    });

                    for(i=0; i<(box_length - 1); i++){
                        $('.move:eq('+tmp+') .box').eq(i).delay(120 * i).css({
                            top: '105%'
                        }).animate({
                            top: '-120%'
                        },500)
                    }
                    
                    $('.move:eq('+tmp+') .box').eq(3).css({
                        animation: 'last_up .4s .4s ease forwards, last_up_easing .7s .4s ease-in-out forwards'
                    })

                    // 숫자 스크롤
                    num_scroll('.box_num .num_up span', 150, tmp, project_h, (tmp - 1), project_h * -1);

                    // 제목 스크롤
                    name_scroll('.project_name .box_name', (tmp - 1), 'hide_up .55s .1s forwards')
                    name_scroll('.project_name .box_name', tmp, 'show_up .55s .1s forwards')

                    // span name_up 스크롤
                    name_up_scroll($('.box_name:eq('+tmp+') .name_up'), 150, project_h, $('.box_name:eq('+(tmp - 1)+') .name_up'), project_h * -1);

                    // span rolling 스크롤
                    rolling_scroll($('.box_name:eq('+tmp+') .rolling'), 200, '300%', $('.box_name:eq('+(tmp - 1)+') .rolling'), project_h * -1, 600);
                    

                    $('.box_name:eq('+(tmp - 1)+') span').delay(150).animate({
                        top: project_h * -1
                    },600)
                    $('.box_name:eq('+tmp+') span').delay(150).css({
                        top: project_h
                    }).animate({
                        top: 0
                    },600)

                    $('.svg_box').eq((tmp - 1)).css({
                        display: 'none'
                    })
                    $('.svg_box').eq(tmp).css({
                        display: 'block'
                    })

                    // 함수 실행 중 scroll 비활성화
                    scroll_tf = false;

                    // 함수 실행 끝난 후 scroll 활성화
                    setTimeout(function(){
                        scroll_tf = true;
                    }, 1300);
                } 
            }
            

            // 올릴 때 direction 1
            else{
                // scroll이 true일 때 함수 실행
                if(scroll_tf){       
                    count--;
                    var tmp = count % $('.move').length

                    $('.move:eq('+tmp+') .box').eq(3).css({
                        animation: 'down_del .4s forwards'
                    })

                    for(i=0; i<(box_length - 1); i++){
                        $('.move:eq('+tmp+') .box').eq(i).delay(120 * i).css({
                            top: '-105%'
                        }).animate({
                            top: '120%'
                        },500)
                    }

                    $('.move:eq('+(tmp - 1)+') .box').eq(3).css({
                        animation: 'last_down .4s .4s forwards, last_down_easing .7s .4s ease-in-out forwards'
                    })

                    // 숫자 스크롤
                    num_scroll('.box_num .num_up span', 150, (tmp - 1), project_h * -1, tmp, project_h)

                    // 제목 스크롤
                    name_scroll('.project_name .box_name', (tmp - 1), 'show_down .55s .1s forwards')
                    name_scroll('.project_name .box_name', tmp, 'hide_down .55s .1s forwards')

                    // span name_up 스크롤
                    name_up_scroll($('.box_name:eq('+(tmp - 1)+') .name_up'), 150, project_h * -1, $('.box_name:eq('+tmp+') .name_up'), project_h);

                    // span rolling 스크롤
                    $('.box_name:eq('+(tmp - 1)+') .rolling').delay(200).css({
                        top: project_h * -1
                    }).animate({
                        top: 0
                    },500)
                    $('.box_name:eq('+tmp+') .rolling').delay(200).animate({
                        top: '300%'
                    }, 500)
                    

                    $('.box_name:eq('+tmp+') span').delay(150).animate({
                        top: project_h
                    },600)
                    $('.box_name:eq('+(tmp - 1)+') span').delay(150).css({
                        top: project_h * -1
                    }).animate({
                        top: 0
                    },600)

                    $('.svg_box').eq((tmp - 1)).css({
                        display: 'block'
                    })
                    $('.svg_box').eq(tmp).css({
                        display: 'none'
                    })

                    // 함수 실행 중 scroll 비활성화
                    scroll_tf = false;

                    // 함수 실행 끝난 후 scroll 활성화
                    setTimeout(function(){
                        scroll_tf = true;
                    }, 1300);
                }
            }
        });
    });

},2100)



    /*------------------------------------*/
    ///////////// Project List /////////////
    /*------------------------------------*/
    var list_margin = $(".list_box .list").css("margin-right");    
    list_margin = list_margin.replace("px", "");

    var list_w = $('.list_box .list').width();
    var list_mw = Number(list_w) + Number(list_margin);
    var list_box_w = list_mw * $('.list_box .list').length;

    $('.list_box').css({
        width: list_box_w + 20
    });
    // console.log((list_w + 20))
    
    var list_length = $('.list_box .list').length;
    var list_scroll_tf = false;
    var scrollMove = 0;
    setTimeout(function(){
        $('.project_list').click(function(){
            // 메뉴 색 변경
            $('.nav div').addClass('list_on');

            // 메뉴 dot animation
            $('.nav .dot span').css({
                animation: 'none',
                transform: 'scale(1)'
            })
            setTimeout(function(){
                $('.nav .dot span').css({
                    animation: 'menu_dot .8s .6s forwards'
                })
            }, 700)

            $('#project_list_warp').delay(150).animate({
                width: "100%"
            },600, 'easeInOutQuart')

            // 리스트 썸네일 딜레이 설정
            list_go_right(0, 740);
            list_go_right(1, 580);
            list_go_right(2, 420);
            list_go_right(3, 280);
            list_go_right(4, 140);
            list_go_right(5, 10);

            setTimeout(function(){
                list_scroll_tf = true;
                $('.list_box .list').css({
                    'pointer-events': 'auto'
                });
            }, 1700);

            $('.list_box').on('mousewheel DOMMouseScroll', function() {
                if(list_scroll_tf == true){ 
                    if (!event) {
                        event = window.event;
                    }
                    if (event.wheelDelta) {
                        direction = event.wheelDelta / 120;
                    } 

                    var tmp_list = document.getElementsByClassName('list_box')[0].style.transform;
                    tmp_list = tmp_list.replace("translateX(-", "")
                    // console.log(tmp_list);
                    // console.log(tmp_list.replace("px)", ""));

                    var window_w = $(window).width();
                    var list_box_right = $('.list_box').width() - tmp_list.replace("px)", "")

                    if(direction < 0 ){
                        if(list_box_right <= window_w){
                            $('.list_box').css({
                                transform : 'translateX(-'+(Number(scrollMove) + Number(list_margin))+'px)'
                            })
                        }
                        else{
                            scrollMove = scrollMove + 50
                            $('.list_box').css({
                                transform : 'translateX(-'+scrollMove+'px)'
                            })
                        }
                    }
                    else if(direction > 0 && 50 <= scrollMove ){
                        scrollMove = scrollMove - 50
                        $('.list_box').css({
                            transform : 'translateX(-'+scrollMove+'px)'
                        })
                    }
                }
            });
        });
    },1400)
    
    $('.list_back_btn').click(function(){
        // 메뉴 색 변경
        setTimeout(function(){
            $('.nav div').removeClass('list_on');

            $('.nav .dot span').css({
                animation: 'none',
                transform: 'scale(1)'
            })
            setTimeout(function(){
                $('.nav .dot span').css({
                    animation: 'menu_dot .8s forwards'
                })
            },600)
        }, 700)
        
        list_scroll_tf = false;

        $('#project_list_warp').delay(150).animate({
            width: 0
        },600, 'easeInQuart')

        $('.list_box .list').css({
            'pointer-events': 'none'
        });
        
        setTimeout(function(){
            $('.list_box .list').css({
                left: '-200%'
            })

            scrollMove = 0;
            $('.list_box').css({
                transform : 'translateX(0px)'
            })
        },700)
    });

    $('.list_box .list').hover(function(){
        $(this).children('.list_name_box').css({
            opacity: 1,
            // transform: 'translate(-50%, -50%) scaleY(1)'
        })

        $(this).find('.name_up').css({
            top: '20px'
        })
        $(this).find('.name_up').eq(0).delay(50).animate({
            top: 0
        },250)
        $(this).find('.name_up').eq(1).delay(120).animate({
            top: 0
        },250)
        $(this).find('.name_up').eq(2).delay(80).animate({
            top: 0
        },250)
        $(this).find('.name_up').eq(3).delay(170).animate({
            top: 0
        },250)
        $(this).find('.name_up').eq(4).delay(50).animate({
            top: 0
        },250)
        $(this).find('.name_up').eq(5).delay(120).animate({
            top: 0
        },250)
        
        $(this).find('div span').css({
            top: '20px'
        }).animate({
            top: 0
        },300)
    },function(){
        $(this).children('.list_name_box').css({
            opacity: 0,
            // transform: 'translate(-50%, -50%) scaleY(0)'
        })
    })

    /*------------------------------------*/
    ///////////////// 함수 /////////////////
    /*------------------------------------*/

    // project number scroll
    function num_scroll(name, delay, next, pos1, prev, pos2){
        $(name).eq(next).delay(delay).css({
            top: pos1
        }).animate({
            top: 0
        }, 550)

        $(name).eq(prev).delay(delay).animate({
            top: pos2
        }, 550)
    }

    // project name scroll
    function name_scroll(name, this_pos, this_ani){
        $(name).eq(this_pos).css({
            animation: this_ani,
            display: 'block',
            overflow: 'hidden'
        })
    }

    // project name span up scroll
    function name_up_scroll(next, delay, pos1, prev, pos2){
        $(next).delay(delay).css({
            top: pos1
        }).animate({
            top: 0
        }, 550)

        $(prev).eq(prev).delay(delay).animate({
            top: pos2
        }, 550)
    }
    

    // project span rolling scroll
    function rolling_scroll(next, delay, pos1, prev, pos2, sec){
        $(next).delay(delay).css({
            top: pos1
        }).animate({
            top: 0
        }, sec)

        $(prev).eq(prev).delay(delay).animate({
            top: pos2
        }, sec)
    }
    // rolling_scroll($('.box_name:eq('+tmp+') .rolling'), 200, '300%', $('.box_name:eq('+(tmp - 1)+') .rolling'), project_h * -1, 600);

    // project list thumnail animation
    function list_go_right(index, delay){
        $('.list_box .list').eq(index).delay(delay).animate({
            left: 0,
            opacity: 1
        }, 100) 
    }

});