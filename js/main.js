$(function(){

    //表示非表示切替
    $("#EN").on("click",function(){

            // 表示の場合の処理
            $(".en").css({'visibility': 'visible'});
            $(".jp").css({'visibility': 'hidden'});
    
    })
});

$(function(){

    //表示非表示切替
    $("#JP").on("click",function(){

        $(".en").css({'visibility': 'hidden'});
        $(".jp").css({'visibility': 'visible'});

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
  
  
  
  Resources





