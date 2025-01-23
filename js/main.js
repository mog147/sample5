if(window.matchMedia("(max-width: 768px)").matches){
  // ウィンドウサイズが 768px以下の場合のコードをここに

    // スライド開く
    $(function(){
      $(".btn-gNav").click(function() {

        if ($(".gnav").hasClass('open')) {

          $(".gnav").removeClass('open');
          $(".gnav").hide();

        } else {

          $(".gnav").addClass('open');
          $(".gnav").show();

        }          

      });
    });

      // スライド開く
      $(function(){
        $(".gnav").click(function() {
  
          if ($(".gnav").hasClass('open')) {
  
            $(".gnav").removeClass('open');
            $(".gnav").hide();
  
          } else {
  
            $(".gnav").addClass('open');
            $(".gnav").show();
  
          }          
  
        });
      });
    
    }

$(function(){

  //表示非表示切替
  $("#EN").on("click",function(){

          // 表示の場合の処理
          $(".en").css({'display': 'block'});
          $(".jp").css({'display': 'none'});
  
  })
});

$(function(){

  //表示非表示切替
  $("#JP").on("click",function(){

      $(".jp").css({'display': 'block'});
      $(".en").css({'display': 'none'});
      

  })
  
});



$(function(){
    $('.slider').slick({
      autoplay: true, //自動でスクロール
      autoplaySpeed: 0, //自動再生のスライド切り替えまでの時間を設定
      speed: 5000, //スライドが流れる速度を設定
      cssEase: "linear", //スライドの流れ方を等速に設定
      slidesToShow: 4, //表示するスライドの数
      swipe: false, // 操作による切り替えはさせない
      arrows: false, //矢印非表示
      pauseOnFocus: false, //スライダーをフォーカスした時にスライドを停止させるか
      pauseOnHover: false, //スライダーにマウスホバーした時にスライドを停止させるか
      responsive: [
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 3, //画面幅750px以下でスライド3枚表示
          }
        }
      ]
    });
  });
  
  
  
 //アコーディオンをクリックした時の動作
$('.title2').on('click', function() {//タイトル要素をクリックしたら
	$('.box').slideUp(500);//クラス名.boxがついたすべてのアコーディオンを閉じる
    
	var findElm = $(this).next(".box");//タイトル直後のアコーディオンを行うエリアを取得
    
	if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
		$(this).removeClass('close');//クラス名を除去    
	}else{//それ以外は
		$('.close').removeClass('close'); //クラス名closeを全て除去した後
		$(this).addClass('close');//クリックしたタイトルにクラス名closeを付与し
		$(findElm).slideDown(500);//アコーディオンを開く
	}
});

//ページが読み込まれた際にopenクラスをつけ、openがついていたら開く動作※不必要なら下記全て削除
$(window).on('load', function(){
	$('.accordion-area li:first-of-type section').addClass("open"); //accordion-areaのはじめのliにあるsectionにopenクラスを追加
	$(".open").each(function(index, element){	//openクラスを取得
		var Title =$(element).children('.title2');	//openクラスの子要素のtitle2クラスを取得
		$(Title).addClass('close');				///タイトルにクラス名closeを付与し
		var Box =$(element).children('.box');	//openクラスの子要素boxクラスを取得
		$(Box).slideDown(500);					//アコーディオンを開く
	});
});

$(function () {

  var webStorage = function () {

    if (sessionStorage.getItem('access')) {

      /*
        2回目以降アクセス時の処理
      */

      $(".loading-animation").addClass('is-active'); // loadingアニメーションを表示
      $(".loading").addClass('is-active');
      

    } else {

      /*
        初回アクセス時の処理
      */

      sessionStorage.setItem('access', 'true'); // sessionStorageにデータを保存

      $(".loading-animation").addClass('is-active'); // loadingアニメーションを表示

      setTimeout(function () {

        // ローディングを数秒後に非表示にする

        $(".loading").addClass('is-active');
        //$(".loading-animation").removeClass('is-active');

      }, 3000); // ローディングを表示する時間

    }

  }

  webStorage();
  
});
