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
 	var dialog = $('<div class="ryui-dialog flex-box flex-align-items-center flex-justify-center"></div>');
 	options = $.extend({
 		title:'',
 		width:'',
 		height:'',
 		content:'',
 		target:$("body")
 	},options);
 	dialog.options = options; 
 	RY.dialog.init(dialog,param);
 	return dialog;
 };
 RY.dialog.init = function(dialog,param){
 	var options = dialog.options;
 	dialog.mask = $('<div class="ryui-dialog-mask"></div>').appendTo(dialog),
 	dialog.body = $('<div class="ryui-dialog-body"></div>').appendTo(dialog),
 	dialog.title = $('<div class="ryui-dialog-title"><h2>'+ options.title +'</h2></div>').appendTo(dialog.body),
 	dialog.closeBtn = $('<span class="ryui-dialog-closeBtn"></span>').appendTo(dialog.title),
 	dialog.content = $('<div class="ryui-dialog-content"></div>').appendTo(dialog.body);
 	if(options.width && options.height){
 		dialog.body.css({'width':options.width,'height':options.height});
 	}else if(options.width){
 		dialog.body.css('width',options.width);
 	}else if (options.height) {
 		dialog.body.css('height',options.height);
 	}
 	dialog.closeBtn.on("click",function(){
 		RY.dialog.methods.close(dialog);
 	})
 	dialog.content.append(options.content);
 	if(options.target){
 		options.target.append(dialog);
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
 	var toast = $('<div class="ryui-toast"></div>');
 	toast.body = $('<div class="ryui-toast-body"></div>').appendTo(toast);
 	toast.bg = $('<div class="ryui-toast-bg"></div>').appendTo(toast.body);
 	toast.text = $('<div class="ryui-toast-text">'+ options.text +'</div>').appendTo(toast.body);
 	if(options.width && options.height){
 		toast.body.css({'width':options.width,'height':options.height});
 	}else if(options.width){
 		toast.body.css('width',options.width);
 	}else if(options.height){
 		toast.body.css('height',options.height);
 	}
 	if(options.target){
 		options.target.append(toast);
 	}
 	if(options.holdtime){
 		setTimeout(function(){
 			toast.remove();
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
 	var loading_li = '';
 	for(var i=1;i<=12;i++){
 		loading_li += '<li class="ryui-loading-frames-'+ i +'"></li>';
 	}
 	RY.loading.wrap = $('<div class="ryui-loading flex-box flex-align-items-center flex-justify-center"><div class="ryui-loading-mask"></div></div>');
 	var loading_position = $('<div class="ryui-loading-position"></div>').appendTo(RY.loading.wrap);
 	var loading_frames = $('<ul class="ryui-loading-frames ryui-loading-rotate">'+ loading_li +'</ul>').appendTo(loading_position);
 	loading_frames.css({
 		"width":options.width,
 		"height":options.height,
 		"color":options.color
 	});
 	options.target.append(RY.loading.wrap);

 };
 RY.loading.methods = {
 	close:function(){
 		RY.loading.wrap.remove();
 	}
 };