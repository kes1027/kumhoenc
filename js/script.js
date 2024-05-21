// DOM 구조가 파악되면 실행
$(function () {
  // alert('준비완료!');

  // 대상을 변수에 저장
  const $menu = $('.gnb > li');
  const $submenu = $('.submenu');
  const duration = 300;

  // 메뉴 영역에 마우스가 들어오면
  $menu.on('mouseenter', function () {
    $(this).find($submenu).stop().slideDown(duration);
    $(this).addClas('on');
  });

  // 메뉴 영역에 마우스가 나가면
  $menu.on('mouseleave', function () {
    $submenu.stop().slideUp(duration);
    $(this).removeClass('on');
  });
});
