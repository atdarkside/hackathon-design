$(function(){

	var Sec = $("body > section");
	var SlideNum = $(Sec).length;
	NowSec = 0;

	var CateSec = $(".cate-sec");
	var CateNum = $(CateSec).length;
	NowCateSec = 0;

	$(".controll-left").hide(400);

	var NextSlide =  function(NowSec){

		$(Sec).eq(NowSec).removeClass("show-sec");
		$(Sec).eq(NowSec).addClass("hidden-sec");

		$(Sec).eq(NowSec + 1).addClass("show-sec");
		$(Sec).eq(NowSec + 1).removeClass("hidden-sec");

		NowSec++;

	}

	var PrevSlide =  function(NowSec){

		$(Sec).eq(NowSec).addClass("show-sec");
		$(Sec).eq(NowSec).removeClass("hidden-sec");

		$(Sec).eq(NowSec - 1).removeClass("show-sec");
		$(Sec).eq(NowSec - 1).addClass("hidden-sec");

		NowSec--;

	}

	$("body").on("click",function(){
		NextSlide(NowSec);
	});

	$(".controll-right i").on("click",function(){
		if(CateNum == NowCateSec + 1){
			return false;
		}
		$(CateSec).eq(NowCateSec).addClass("cate-sec-hidden");

		setTimeout(function(){
			$(CateSec).eq(NowCateSec + 1).addClass("cate-sec-show");
			$(CateSec).eq(NowCateSec + 1).removeClass("cate-sec-hidden");
			NowCateSec++;
			if(CateNum == NowCateSec + 1) {
				$(".controll-right").hide(400);
			} 
			if(NowCateSec != 0) {
				$(".controll-left").show(400);
			}
			
		},500);
	});

	$(".controll-left i").on("click",function(){
		if(NowCateSec == 0){
			return false;
		}
		$(CateSec).eq(NowCateSec).removeClass("cate-sec-show");

		setTimeout(function(){
			$(CateSec).eq(NowCateSec - 1).removeClass("cate-sec-hidden");
			NowCateSec--;
			if(NowCateSec == 0) {
				$(".controll-left").hide(400);
			}
			if(CateNum != NowCateSec + 1) {
				$(".controll-right").show(400);
				console.log("S");
			}
		},500);
	});

});