$(document).ready(function(){
    /* sub banner locator */
    $('.sub_banner .locator .location ul li').hover(function(){
        var locate_depth = $(this).index();

        $('.sub_banner .locator .location ul li:eq('+locate_depth+') .locate_depth').show();
    }, function(){
        $('.sub_banner .locator .location ul li .locate_depth').hide();
    });
    
    $('.sub_tab ul li').eq(0).addClass('on');
    /* sub tab click event */
    var contents = $(".sub_contents .sub_sec");
    $(".sub_tab ul li").click(function(e){
        e.preventDefault();
        
        var target = $(this);   //6개의 버튼 차겟을 변수 target에 할당
        var index = target.index(); //6개의 버튼에 인덱스 할당
        // alert(index);

        var section = contents.eq(index);   //6개의 컨텐츠에 인덱스 할당
        var offset = section.offset().top - 120 //6개의 컨텐츠의 offset 값 할당
        // alert(offset);
        $("html, body").animate({scrollTop:offset},400);
    }); 

    /* sub tab scroll event */
    var sub_tab_oft = $('.sub_tab').offset().top;
    $(window).scroll(function(){
        /* scroll fixed */
        var win_st = $(window).scrollTop();

        if(sub_tab_oft < win_st){
            $(
                '.sub_tab').css({
                position: 'fixed',
                top: '10px',
                'z-index': 1
            })
        }
        else if(sub_tab_oft >= win_st){
            $('.sub_tab').css({
                position: 'relative',
                top: 0
            })
        }

        /* scroll on */
        for(i = 0; i < $('.sub_sec').length; i++){
            // console.log(i)
            if(($('.sub_sec').eq(i).offset().top - 150) < win_st){
                $('.sub_tab ul li').removeClass('on');
                $('.sub_tab ul li').eq(i).addClass('on');
            }
        }
    })
});