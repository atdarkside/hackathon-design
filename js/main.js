$(function(){

	var Sec = $("body > section");
	var SlideNum = $(Sec).length;
	NowSec = 0;

	var NextSlide =  function(NowSec){

		$(Sec).eq(NowSec).removeClass("show-sec");
		$(Sec).eq(NowSec).addClass("hidden-sec");

		$(Sec).eq(NowSec + 1).addClass("show-sec");
		$(Sec).eq(NowSec + 1).removeClass("hidden-sec");

	}

	$("body").on("click",function(){
		NextSlide(NowSec);
	});
});