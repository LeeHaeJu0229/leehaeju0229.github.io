$(document).ready(function(){
  /* cat toggle */
  $('#myCat #catToggle').click(function(){
      if ($(this).is(":checked")) {
          $('#wrap').addClass("them_dark");
          $('#myCat').addClass("is_active");
      } else {
          $('#wrap').removeClass("them_dark");
          $('#myCat').removeClass("is_active");
      }
  })

  /* browser */
  $('#left_side .btn_ico').click(function(){  
      var index = $(this).index();
      $('.js-browser').removeClass('open');
      setTimeout(function(){
          $('.js-browser').eq(index).addClass('open');
      },100)
  })
  $('#right_side .btn_ico').click(function(){  
      var index = $(this).index();
      var leftIcoLength = $('#left_side .btn_ico').length;
      var indexRight = index + leftIcoLength;
      $('.js-browser').removeClass('open');
      setTimeout(function(){
          $('.js-browser').eq(indexRight).addClass('open');
      },100)
  })
  $('.btn_ico').click(function(){
      // $('.browser_body').show();
      // $('.browser_body .design_box').hide();
      // $('.object_list').show();
      // $('.iframe_box').hide();

      // $('.browser_sec').removeClass('open');
      // $('.js-browser').show();

      // $('#about .iframe_box iframe').attr('src', '/about/');
      // $('#memories .iframe_box iframe').attr('src', '../scroll/');
  })

  $('.browser_top .btn_box span.close').click(function(){
      $('.js-browser').removeClass('open');

      setTimeout(function(){
          /* close iframe reset */
          // $('#about .iframe_box iframe').attr('src', '/about/');
          // $('#memories .iframe_box iframe').attr('src', '../scroll/');
          
          $('.browser_body').show();
          $('.object_list').show();
          $('.iframe_box').hide();
          $('.design_box').hide();

          $('.js-browser').show();
      },500)
  })

  var objectList = $('.js-browser .object_list');
  var iframeBox = $('.js-browser .iframe_box');
  var designBox = $('.js-browser .design_box');
  var imgDesign = $('.js-browser .design_box .design_img');
  $('.folder .btn_ico').click(function(){
    $('.js-browser').show();
    // $('.browser_body').show();
    objectList.show();
    iframeBox.hide();
    designBox.hide();
    imgDesign.hide();

    if($(this).hasClass('btn_go_page')){
      console.log();
      iframeBox.show();
    }
  });
  $('.js-browser').each(function(){
    var tgDesign = $(this).find('.design_box .design_img');
    iframeBox.hide();
    designBox.hide();

    $(this).find('.btn_object').click(function(){
      if($(this).attr('target') == '_blank' || $(this).hasClass('js_prepare')) return;
      objectList.hide();
      iframeBox.hide();
      designBox.hide();

      if($(this).hasClass('btn_design')){
        designBox.show();
        tgDesign.eq($(this).data('index')).show();
      }
      if($(this).hasClass('btn_go_page')){
        console.log();
        iframeBox.show();
      }
    });
  });

  $('.js_prepare').each(function(){
    toggleToast($(this));
  })
})

let prepareTimer = null;
function toggleToast(btn){
  btn.on('click', function(){
    if($('#prepare').hasClass('on')) return;

    $('#prepare').addClass('on');
    if (prepareTimer) clearTimeout(prepareTimer);
    prepareTimer = setTimeout(function(){
      $('#prepare').removeClass('on');
      prepareTimer = null;
    }, 1000);
  });
};

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