$(function(){
	$(".member-list .profile-block").each(function(){
		path = $(this).attr("data");
		$(this).css('background-image', 'url(img/'+ path +')');
		//console.log(path);
	});
});