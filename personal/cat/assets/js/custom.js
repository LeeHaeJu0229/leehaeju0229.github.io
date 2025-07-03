//okpt("CSS Particle Effects");
// haert effect
function initparticles() {
    hearts();
}
 
function hearts() {
    $.each($(".hearts"), function(){
        var heartcount = ($(this).width()/100)*3;
        for(var i = 0; i <= heartcount; i++) {
            var size = ($.rnd(60,120)/10);
            $(this).append('<span class="particle" style="top:' + $.rnd(20,80) + '%; left:' + $.rnd(0,95) + '%;width:' + size + 'px; height:' + size + 'px;animation-delay: ' + ($.rnd(0,30 / 10) + 's;"></span>'));
        }
    });
}
 
jQuery.rnd = function(m,n) {
        m = parseInt(m);
        n = parseInt(n);
        return Math.floor( Math.random() * (n - m + 1) ) + m;
}
initparticles();

$(document).ready(function(){
    /* cat toggle */
    $('#toggle').click(function(){
        if ($('#toggle').is(":checked")) {
            $('#wrap').addClass("checked");
            $('.switch').addClass("checked");
            $('.moon-inside').addClass("checked");
            $('.ico span').addClass("checked");
        } else {
            $('#wrap').removeClass("checked");
            $('#wrap').css({
                transition: '.6s background'
            });
            $('.switch').removeClass("checked");
            $('.moon-inside').removeClass("checked");
            $('.ico span').removeClass("checked");
        }
    })

    /* browser */
    $('#left_side .ico').click(function(){  
        var index = $(this).index();
        $('.browser').removeClass('open');
        setTimeout(function(){
            $('.browser').eq(index).addClass('open');
        },100)
    })
    $('#right_side .ico').click(function(){  
        var index = $(this).index();
        var leftIcoLength = $('#left_side .ico').length;
        var indexRight = index + leftIcoLength;
        $('.browser').removeClass('open');
        setTimeout(function(){
            $('.browser').eq(indexRight).addClass('open');
        },100)
    })
    $('.ico').click(function(){
        $('.browser_body').show();
        $('.browser_body.design_box').hide();
        $('.object_box').show();
        $('.iframe_box').hide();

        $('.browser_sec').removeClass('open');
        $('.browser').show();

        $('#about .iframe_box iframe').attr('src', '../scroll/about.html');
        $('#memories .iframe_box iframe').attr('src', '../scroll/');
    })

    $('.browser_top .btn_box span.close').click(function(){
        $('.browser').removeClass('open');
        $('.browser_sec').removeClass('open');

        setTimeout(function(){
            /* close iframe reset */
            $('#about .iframe_box iframe').attr('src', '../scroll/about.html');
            $('#memories .iframe_box iframe').attr('src', '../scroll/');
            
            $('.browser_body').show();
            $('.object_box').show();
            $('.iframe_box').hide();
            $('.design_box').hide();
            

            $('.browser').show();
            $('.browser_sec').hide();
        },500)
    })

    $('.goPage').click(function(){
        $('.browser_body').show();
        $('.object_box').hide();
        $('.iframe_box').show();
        $('.design_box').hide();
    })
    // if($('.browser_body').has('.iframe_box')){
    //     $('.browser_body').css({
    //         'overflow-x': 'hidden',
    //         'overflow-y': 'hidden'
    //     })
    // }

    $('.goDesign').click(function(){
        $('.object_box').hide();
        $('.iframe_box').hide();
        $('.browser_body').hide();
    })
    $('#mamonde .goDesign').click(function(){
        var index = $(this).index();
        $('#mamonde .browser_body.design_box').eq(index - 2).show();
    })
    $('#polygon .goDesign').click(function(){
        var index = $(this).index();
        $('#polygon .browser_body.design_box').eq(index - 2).show();
    })
    $('#mamonde .goDesign').click(function(){
        var index = $(this).index();
        $('#mamonde .browser_body.design_box').eq(index - 2).show();
    })
    $('#template .goDesign').click(function(){
        var index = $(this).index();
        $('#template .browser_body.design_box').eq(index - 2).show();
    })
    $('#ps_web .goDesign').click(function(){
        var index = $(this).index();
        $('#ps_web .browser_body.design_box').eq(index).show();
    })
    $('#ps_catalog .goDesign').click(function(){
        var index = $(this).index();
        $('#ps_catalog .browser_body.design_box').eq(index).show();
    })
    $('#ps_detail .goDesign').click(function(){
        var index = $(this).index();
        $('#ps_detail .browser_body.design_box').eq(index).show();
    })
    $('#ps_poster .goDesign').click(function(){
        var index = $(this).index();
        $('#ps_poster .browser_body.design_box').eq(index).show();
    })
    $('#ps_etc .goDesign').click(function(){
        var index = $(this).index();
        $('#ps_etc .browser_body.design_box').eq(index).show();
    })
    $('#ai .goDesign').click(function(){
        var index = $(this).index();
        $('#ai .browser_body.design_box').eq(index).show();
    })

    $('.soon').click(function(){
        $('#prepare').toggleClass('on')
    })

    $('.goSec').click(function(){
        $('.browser').hide();

        var index = $(this).index();
        // console.log(index)
        $('.browser_sec').eq(index).show();
        $('.browser_sec').eq(index).addClass('open')
    })

    /* img slide */
    $('.mamonde .slide').eq(0).css({
        left: 0
    })
    $('.everybot .slide').eq(0).css({
        left: 0
    })
    $('.beauren .slide').eq(0).css({
        left: 0
    })
    $('.ecotech .slide').eq(0).css({
        left: 0
    })
    $('.glance .slide').eq(0).css({
        left: 0
    })
    $('.mommake .slide').eq(0).css({
        left: 0
    })
    $('.piezo .slide').eq(0).css({
        left: 0
    })
    $('.mediogen .slide').eq(0).css({
        left: 0
    })
    $('.bnf .slide').eq(0).css({
        left: 0
    })

    var count = 1;
    var hhhhhh = 0;
    $('.mamonde .slide_btn .next').click(function(){
        var tmp = count % $('.mamonde .slide').length;
        var img_height = $('.mamonde .slide:eq('+tmp+') img').height();
        $('.mamonde').height(img_height)

        count++
        slider('.mamonde .slide', tmp, "100%", (tmp - 1), "-100%");
    })
    $('.mamonde .slide_btn .prev').click(function(){
        count--

        var tmp = count % $('.mamonde .slide').length;
        slider('.mamonde .slide', (tmp - 1), "-100%", tmp, "100%");

        var img_height = $('.mamonde .slide:eq('+(tmp - 1)+') img').height();
        $('.mamonde').height(img_height)
    })

    $('.everybot .slide_btn .next').click(function(){
        var tmp = count % $('.everybot .slide').length;
        var img_height = $('.everybot .slide:eq('+tmp+') img').height();
        $('.everybot').height(img_height)

        count++
        slider('.everybot .slide', tmp, "100%", (tmp - 1), "-100%");
    })
    $('.everybot .slide_btn .prev').click(function(){
        count--

        var tmp = count % $('.everybot .slide').length;
        slider('.everybot .slide', (tmp - 1), "-100%", tmp, "100%");

        var img_height = $('.everybot .slide:eq('+(tmp - 1)+') img').height();
        $('.everybot').height(img_height)
    })

    $('.beauren .slide_btn .next').click(function(){
        var tmp = count % $('.beauren .slide').length;
        var img_height = $('.beauren .slide:eq('+tmp+') img').height();
        $('.beauren').height(img_height)

        count++
        slider('.beauren .slide', tmp, "100%", (tmp - 1), "-100%");
    })
    $('.beauren .slide_btn .prev').click(function(){
        count--

        var tmp = count % $('.beauren .slide').length;
        slider('.beauren .slide', (tmp - 1), "-100%", tmp, "100%");

        var img_height = $('.beauren .slide:eq('+(tmp - 1)+') img').height();
        $('.beauren').height(img_height)
    })

    $('.ecotech .slide_btn .next').click(function(){
        var tmp = count % $('.ecotech .slide').length;
        var img_height = $('.ecotech .slide:eq('+tmp+') img').height();
        $('.ecotech').height(img_height)

        count++
        slider('.ecotech .slide', tmp, "100%", (tmp - 1), "-100%");
    })
    $('.ecotech .slide_btn .prev').click(function(){
        count--

        var tmp = count % $('.ecotech .slide').length;
        slider('.ecotech .slide', (tmp - 1), "-100%", tmp, "100%");

        var img_height = $('.ecotech .slide:eq('+(tmp - 1)+') img').height();
        $('.ecotech').height(img_height)
    })

    $('.glance .slide_btn .next').click(function(){
        var tmp = count % $('.glance .slide').length;
        var img_height = $('.glance .slide:eq('+tmp+') img').height();
        $('.glance').height(img_height)

        count++
        slider('.glance .slide', tmp, "100%", (tmp - 1), "-100%");
    })
    $('.glance .slide_btn .prev').click(function(){
        count--

        var tmp = count % $('.glance .slide').length;
        slider('.glance .slide', (tmp - 1), "-100%", tmp, "100%");

        var img_height = $('.glance .slide:eq('+(tmp - 1)+') img').height();
        $('.glance').height(img_height)
    })

    $('.mommake .slide_btn .next').click(function(){
        var tmp = count % $('.mommake .slide').length;
        var img_height = $('.mommake .slide:eq('+tmp+') img').height();
        $('.mommake').height(img_height)

        count++
        slider('.mommake .slide', tmp, "100%", (tmp - 1), "-100%");
    })
    $('.mommake .slide_btn .prev').click(function(){
        count--

        var tmp = count % $('.mommake .slide').length;
        slider('.mommake .slide', (tmp - 1), "-100%", tmp, "100%");

        var img_height = $('.mommake .slide:eq('+(tmp - 1)+') img').height();
        $('.mommake').height(img_height)
    })

    $('.piezo .slide_btn .next').click(function(){
        var tmp = count % $('.piezo .slide').length;
        var img_height = $('.piezo .slide:eq('+tmp+') img').height();
        $('.piezo').height(img_height)

        count++
        slider('.piezo .slide', tmp, "100%", (tmp - 1), "-100%");
    })
    $('.piezo .slide_btn .prev').click(function(){
        count--

        var tmp = count % $('.piezo .slide').length;
        slider('.piezo .slide', (tmp - 1), "-100%", tmp, "100%");

        var img_height = $('.piezo .slide:eq('+(tmp - 1)+') img').height();
        $('.piezo').height(img_height)
    })

    $('.mediogen .slide_btn .next').click(function(){
        var tmp = count % $('.mediogen .slide').length;
        var img_height = $('.mediogen .slide:eq('+tmp+') img').height();
        $('.mediogen').height(img_height)

        count++
        slider('.mediogen .slide', tmp, "100%", (tmp - 1), "-100%");
    })
    $('.mediogen .slide_btn .prev').click(function(){
        count--

        var tmp = count % $('.mediogen .slide').length;
        slider('.mediogen .slide', (tmp - 1), "-100%", tmp, "100%");

        var img_height = $('.mediogen .slide:eq('+(tmp - 1)+') img').height();
        $('.mediogen').height(img_height)
    })

    $('.bnf .slide_btn .next').click(function(){
        var tmp = count % $('.bnf .slide').length;
        var img_height = $('.bnf .slide:eq('+tmp+') img').height();
        $('.bnf').height(img_height)

        count++
        slider('.bnf .slide', tmp, "100%", (tmp - 1), "-100%");
    })
    $('.bnf .slide_btn .prev').click(function(){
        count--

        var tmp = count % $('.bnf .slide').length;
        slider('.bnf .slide', (tmp - 1), "-100%", tmp, "100%");

        var img_height = $('.bnf .slide:eq('+(tmp - 1)+') img').height();
        $('.bnf').height(img_height)
    })

    function slider(name, next, pos1, prev, pos2){
        $(name).eq(next).css({
            left: pos1
        }).animate({
            left: 0
        },500)

        $(name).eq(prev).animate({
            left: pos2
        },500)
    };

})