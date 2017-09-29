	

$(function(){
	$(".ryui-nav-btn").on("click",function(){
		$(".ryui-nav").toggleClass('ryui-nav-on');
	})
	$(".ryui-nav  a").on("click",function(){
		$(this).parent("li").siblings().removeClass('ryui-active');
		$(this).parent("li").addClass('ryui-active');
	})
})