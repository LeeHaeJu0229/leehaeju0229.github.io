const scrollSpeed = 400;
const hash = window.location.hash ? window.location.hash : '';

docReady(function(){
  calcBarProgress();
});

window.onload = function(){
  const header = $('.l-header');
  const headerH = header.height();

  if (!hash == '' || !hash == undefined) {
    let target = $(hash).length ? $(hash) : undefined;
    if (target){
      let offset = target.attr('data-offset') ? target.attr('data-offset') * -1 : 0;
      let position = target.offset().top - headerH - offset;
      window.scrollTo(position);
    }
  }

  $('[data-goto-hash]').on('click', function(e) {
    e.preventDefault();
    let href = $(this).attr('href');

    if (!href == '' || !href == undefined){
      let target = $(href).length ? $(href) : undefined;
      if (target){
        let offset = target.attr('data-offset') ? target.attr('data-offset') * -1 : 0;
        let position = target.offset().top - headerH - offset;
        $('html, body').animate({ scrollTop: position }, scrollSpeed);
      }
    }
  });

  toggleHeader();
  scrollViewport();
  window.addEventListener('scroll', function(){
    toggleHeader();
    scrollViewport();
  });

  const debouncedToggleHeader = debounce(toggleHeader, 100);
  const debouncedScrollViewport = debounce(scrollViewport, 100);
  window.addEventListener('resize', debouncedToggleHeader);
  window.addEventListener('resize', debouncedScrollViewport);
};


/* ---------------------------
  Utility
--------------------------- */
// document ready
function docReady(fn) {
	if (document.readyState === "complete" || document.readyState === "interactive") {
		setTimeout(fn, 1);
	} else {
		document.addEventListener("DOMContentLoaded", fn);
	}
}

// resizeが終わった後1回のみ実行できるように
function debounce(func, wait) {
  let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(func, wait);
  };
}

// check SP
function isSp($width) {
  let screenWidth = $width ? $width : 640;
  const userAgent = navigator.userAgent.toLowerCase();
  const isMobile = /iphone|ipod|android|blackberry|iemobile|opera mini/i.test(userAgent);

  // return isMobile && $(window).width() <= screenWidth;
  return $(window).width() <= screenWidth;
}

/* ---------------------------
  共通アニメーション・動き
--------------------------- */
// ローディングアニメーション用
function loadingFadeIn() {
  if (document.body.querySelector('body.loading')) {
    document.body.classList.remove('loading');
  }
}

// ページの先頭へ戻る
function goPageTop(speed){
  const scrollSpeed = speed ? speed : 400;
  $('html, body').animate({ scrollTop: 0 }, scrollSpeed);
}

// スクロール時に表示・非表示
function scrollViewport() {
  const animatedEls = document.querySelectorAll('.js-viewport');
  if (!animatedEls.length) return;

  const scroll = window.scrollY;
  const windowHeight = window.innerHeight;

  animatedEls.forEach(el => {
    const scrollPosition = el.getBoundingClientRect().top + scroll;

    if (scroll > scrollPosition - windowHeight) {
      if (!el.classList.contains('is-show')) {
        const delay = el.dataset.animDelay;
        if (delay !== undefined) {
          setTimeout(() => {
            el.classList.add('is-show');
          }, Number(delay));
        } else {
          el.classList.add('is-show');
        }
      }
    } else {
      if (el.classList.contains('is-show')) {
        el.classList.remove('is-show');
      }
    }
  });
}

function toggleHeader(){
  const header = document.querySelector('.l-header');
  const scroll = window.scrollY;
  const tgOffset = document.querySelector('.about-mv-wrap').clientHeight;

  // console.log(scroll, tgOffset)
  if(scroll + (header.offsetHeight / 2) >= tgOffset) {
    header.classList.add('is-scroll');
  } else {
    header.classList.remove('is-scroll');
  }
}

// bar graph
function calcBarProgress(){
  const wrap = $('.js-bar-progress');
  let speed = 1000;
  if(wrap.length < 1) return;
  
  wrap.each(function(){
    const bar = $(this).find('.bar');
    let winnerPercent = $(this).find('.bar.winner').data('per');
    
    bar.each(function(){
      let percent;
      if($(this).hasClass('winner')){
        percent = winnerPercent+'%';
        $(this).width(0).animate({width: percent}, speed);
      } else {
        percent = 100 - winnerPercent+'%';
      }
      $(this).find('.per').text(percent);
    });
  });
}


/* ---------------------------
  UI関連
--------------------------- */