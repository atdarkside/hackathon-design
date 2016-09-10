$(function(){
	setTimeout(function(){
		$(".image-wra").addClass("view");
	},200);

	

	var Sec = $("body > section");
	var SlideNum = $(Sec).length;
	var NowSec = 0;

	var CateSec = $(".cate-sec");
	var CateNum = $(CateSec).length;
	var NowCateSec = 0;

	// ud-move
	var SecNum = 0;
	var save_clock  = 0;
	var next_clock = 0; 
	var stop = false;

	$(".controll-left").hide(400);

	var NextSlide =  function(){

		$(Sec).eq(0).removeClass("show-sec");
		$(Sec).eq(0).addClass("hidden-sec");

		$(Sec).eq(1).addClass("show-sec");


	}

	var PrevSlide =  function(){

		$(Sec).eq(1).removeClass("show-sec");

		$(Sec).eq(0).removeClass("hidden-sec");
		(Sec).eq(0).addClass("show-sec");

		stop = false;

	}




	var mousewheelevent = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';
    $('body').on(mousewheelevent,function(e){
    	if(!$(Sec).eq(0).hasClass("hidden-sec")){


        var delta = e.originalEvent.deltaY ? -(e.originalEvent.deltaY) : e.originalEvent.wheelDelta ? e.originalEvent.wheelDelta : -(e.originalEvent.detail);
        	
        	next_clock = e.timeStamp - save_clock;
    		save_clock = e.timeStamp;
    		if(next_clock < 0) return false;

        	if (delta < 0 ){
				NowSec = NextSlide(NowSec);
				no_scroll();
				setTimeout(function(){
					return_scroll();
				},1000);
        	} 
        }
    });

	$(".returnLink").on("click",function(){
		NowSec = PrevSlide(NowSec);
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
			}
		},500);
	});



function no_scroll(){

var scroll_event = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';
$(document).on(scroll_event,function(e){e.preventDefault();});

$(document).on('touchmove.noScroll', function(e) {e.preventDefault();});
}
 

function return_scroll(){

var scroll_event = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';
$(document).off(scroll_event);

$(document).off('.noScroll');
}
});