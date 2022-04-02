$(function(){

  $('.hamburger').on('click',function(){
    if ($('#header').hasClass('open')){
      $('#header').removeClass('open');
    } else {
      $('#header').addClass('open');
    }
  });

  $('#mask').on('click',function(){
    $('#header').removeClass('open');

  });
  let pagetop = $('#to-top');
  pagetop.hide();

  $(window).scroll(function() {
    // スクロール位置が700pxを超えた場合
    if ($(this).scrollTop() > 700) {
      // トップに戻るボタンを表示する
      pagetop.fadeIn();

    // スクロール位置が700px未満の場合
    } else {
      // トップに戻るボタンを非表示にする
      pagetop.fadeOut();
    }
  });
  
  pagetop.click(function() {
    // 0.5秒かけてページトップへ移動
    $('body,html').animate({scrollTop: 0}, 500);

    // イベントが親要素へ伝播しないための記述
    // ※詳しく知りたい方は「イベント　バブリング」または「jQuery バブリング」で調べてみてください
    return false;
  });

});