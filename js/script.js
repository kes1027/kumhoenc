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
});
