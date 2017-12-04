/*
 * @authors liweiliang QQ:406320591(406320591@QQ.com).
 * @date 2017-08-05,
 * @version 1.0.0
 * @liweiliang Inc. All Rights Reserved
 */
 var RY = {};
 RY.dialog = function(options,param){
 	if(typeof options == "string" && options == "close"){
 		return RY.dialog.methods[options]();
 	}
 	var $ryui_dialog = $('<div class="ryui-dialog flex-box flex-align-items-center flex-justify-center"></div>');
 	options = $.extend({
 		title:'',
 		width:'',
 		height:'',
 		content:'',
 		target:$("body")
 	},options);
 	$ryui_dialog.options = options; 
 	RY.dialog.init($ryui_dialog,param);
 	return $ryui_dialog;
 };
 RY.dialog.init = function($ryui_dialog,param){
 	var options = $ryui_dialog.options;
 	$ryui_dialog_mask = $('<div class="ryui-dialog-mask"></div>'),
 	$ryui_dialog_body = $('<div class="ryui-dialog-body"></div>'),
 	$ryui_dialog_title = $('<div class="ryui-dialog-title"><h2>'+ options.title +'</h2></div>'),
 	$ryui_dialog_closeBtn = $('<span class="ryui-dialog-closeBtn"></span>'),
 	$ryui_dialog_content = $('<div class="ryui-dialog-content"></div>');
 	$ryui_dialog.append($ryui_dialog_mask).append($ryui_dialog_body);
 	$ryui_dialog_body.append($ryui_dialog_title).append($ryui_dialog_content);
 	$ryui_dialog_title.append($ryui_dialog_closeBtn);
 	if(options.width && options.height){
 		$ryui_dialog_body.css({'width':options.width,'height':options.height});
 	}else if(options.width){
 		$ryui_dialog_body.css('width',options.width);
 	}else if (options.height) {
 		$ryui_dialog_body.css('height',options.height);
 	}
 	$ryui_dialog_closeBtn.on("click",function(){
 		RY.dialog.methods.close($ryui_dialog);
 	})
 	$ryui_dialog_content.append(options.content);
 	if(options.target){
 		options.target.append($ryui_dialog[0]);
 	}
 };
 RY.dialog.methods = {
 	close:function(target){
 		return target.remove();
 	}
 };

 RY.toast = function (options) {
 	options = $.extend({
 		width:'',
 		heigth:'',
 		holdtime:3000,
 		text:'提示',
 		target:$("body")
 	},options);
 	var $ryui_toast = $('<div class="ryui-toast"></div>'),
 	$ryui_toast_body = $('<div class="ryui-toast-body"></div>'),
 	$ryui_toast_bg = $('<div class="ryui-toast-bg"></div>'),
 	$ryui_toast_text = $('<div class="ryui-toast-text">'+ options.text +'</div>');

 	$ryui_toast.append($ryui_toast_body);
 	$ryui_toast_body.append($ryui_toast_bg).append($ryui_toast_text);

 	if(options.width && options.height){
 		$ryui_toast_body.css({'width':options.width,'height':options.height});
 	}else if(options.width){
 		$ryui_toast_body.css('width',options.width);
 	}else if(options.height){
 		$ryui_toast_body.css('height',options.height);
 	}
 	if(options.target){
 		options.target.append($ryui_toast[0]);
 	}
 	if(options.holdtime){
 		setTimeout(function(){
 			$ryui_toast[0].remove();
 		},options.holdtime)
 	}
 };
 
 RY.loading = function(options,param){
 	if(typeof options == 'string' && options == 'close'){
 		return RY.loading.methods[options]();
 	}
 	options = $.extend({
 		width:"64",
 		height:"64",
 		color:"#03b4fa",
 		target:$("body")

 	},options);
 	
 	var ryui_loading_li = '';
 	for(var i=1;i<=12;i++){
 		ryui_loading_li += '<li class="ryui-loading-frames-'+ i +'"></li>';
 	}
 	RY.loading.wrap = $('<div class="ryui-loading flex-box flex-align-items-center flex-justify-center"><div class="ryui-loading-mask"></div></div>');
 	var $ryui_loading_position = $('<div class="ryui-loading-position"></div>');
 	var $ryui_loading_frames = $('<ul class="ryui-loading-frames ryui-loading-rotate">'+ ryui_loading_li +'</ul>');
 	$ryui_loading_frames.css({"width":options.width,"height":options.height,"color":options.color});
 	$ryui_loading_position.append($ryui_loading_frames);
 	RY.loading.wrap.append($ryui_loading_position);
 	options.target.append(RY.loading.wrap);

 };
 RY.loading.methods = {
 	close:function(){
 		RY.loading.wrap.remove();
 	}
 };