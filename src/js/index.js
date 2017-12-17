/*
 * @authors liweiliang QQ:406320591(406320591@QQ.com).
 * @date 2017-08-05,
 * @version 1.0.0
 * @liweiliang Inc. All Rights Reserved
 */
$(function(){
	$(".ryui-nav-btn").on("click",function(){
		$(".ryui-nav").toggleClass('ryui-nav-on');
	})
	$(".ryui-nav  a").on("click",function(){
		$(this).parent("li").siblings().removeClass('ryui-active');
		$(this).parent("li").addClass('ryui-active');
	})
})