$(function () {
  // GNB menu
  const $window = $(window);
  const $menu = $('.gnb > li');
  const $submenu = $('.submenu');
  const $header = $('#header');

  // 전체 메뉴: 모바일, 타블렛
  const $mSubmenu = $('.m-submenu-wrap');
  const $dim = $('.dim');
  const $btnClose = $('.btn-close');
  const $btnMenu = $('.btn-menu');
  const duration = 300;

  const $mGnbMenu = $('.m-gnb > li');
  const $mGnbSubmenu = $('.m-gnb-sub');

  // 모바일 메뉴
  // 모바일 용 메뉴를 클릭했을 때
  $mGnbMenu.on('click', function () {
    $(this).toggleClass('on');
    $(this).siblings().removeClass('on');
    $(this).find($mGnbSubmenu).stop().slideToggle(duration);
    $(this).siblings().find($mGnbSubmenu).stop().slideUp(duration);
  });

  $btnMenu.on('click', function () {
    $mSubmenu.addClass('active');
    $dim.fadeIn(duration);
  });

  $btnClose.on('click', function () {
    $mSubmenu.removeClass('active');
    $dim.fadeOut(duration);
  });

  // 모바일 용 서브메뉴 초기화
  $mGnbMenu.removeClass('on');
  $mGnbSubmenu.stop().slideUp(duration);

  // ---------------------------------- //
  // 메뉴 영역에 마우스가 들어오면
  $menu.on('mouseenter', function () {
    $submenu.stop().show();
    // 활성화된 메뉴 표시 : on 클래스 부여
    $(this).addClass('on');
    // header에 active 클래스 부여
    $header.addClass('active');
  });

  // 메뉴 영역에 마우스가 나가면
  $menu.on('mouseleave', function () {
    $submenu.stop().hide();
    $menu.removeClass('on');
    $header.removeClass('active');
  });

  // ---------------------------------- //

  // 슬라이더
  // s: 3. 초기화 실행
  const visualSlider = new Swiper('.visual-slider', {
    loop: true,
    slidesPerView: 'auto',
    // spaceBetween: 40,

    autoplay: {
      delay: 3000,
    },
    speed: 1000, //슬라이드 되는 속도 : 기본값 300ms (0.3초)
    effect: 'slide', // 기본값(slide), fade, cube, coverflow, flip, card 등

    // 진행률 표시
    on: {
      autoplayTimeLeft(swiper, timeLeft, percentage) {
        const percentageValue = (1 - percentage) * 100 + '%';
        document.querySelector('.progress-bar').style.width = percentageValue;
      },
    },
    // 진행률 표시
  });

  // 멈춤 버튼
  var sw = 0;
  $('.btn_pause').click(function () {
    if (sw == 0) {
      $('.btn_pause').addClass('on');
      visualSlider.autoplay.stop();
      sw = 1;
    } else {
      $('.btn_pause').removeClass('on');
      visualSlider.autoplay.start();
      sw = 0;
    }
    console.log(sw);
  });
  // 멈춤 버튼

  // ---------------------------------- //

  // 프로젝트 슬라이더
  const projectSlider = new Swiper('.project-slider', {
    loop: true,
    slidesPerView: 'auto',
    // spaceBetween: 40,

    // autoplay: {
    //   delay: 3000,
    // },
    speed: 1000, //슬라이드 되는 속도 : 기본값 300ms (0.3초)
    effect: 'slide', // 기본값(slide), fade, cube, coverflow, flip, card 등

    // Navigation arrows
    navigation: {
      prevEl: '.project-button-prev',
      nextEl: '.project-button-next',
    },
  });
  // 프로젝트 슬라이더

  // ---------------------------------- //
  // s: news
  gsap.registerPlugin(ScrollTrigger);
  const newsList1 = $('.news-list > li:first-child');
  const newsList2 = $('.news-list > li:last-child');

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.news',
      // markers: true,
      start: 'top 0%',
      end: 'bottom+=2000px',
      pin: true, //트리거를 고정
      // scrub: 1, //스크롤 값을 따라잡게, 1초 동안
    },
  });
  // e: news
  // ---------------------------------- //
  tl.to(newsList1, {
    yPercent: -90,
    // duration: 30,
    // ease: 'power4.in',
    scrollTrigger: {
      trigger: '.news',
      // markers: true,
      start: 'top 0%',
      end: 'bottom+=2000px',
      scrub: 1,
    },
  });
  tl.to(
    newsList2,
    {
      yPercent: -70,
      // duration: 30,
      // ease: 'power4.in',
      scrollTrigger: {
        trigger: '.news',
        // markers: true,
        start: 'top 0%',
        end: 'bottom+=2000px',
        scrub: 1,
      },
    },
    '<'
  );
  // ---------------------------------- //
  // family site
  $('.family-site select').on('change', function () {
    const linkValue = $(this).val();
    window.open(linkValue);
  });

  // ---------------------------------- //
  // end:jquery
});
