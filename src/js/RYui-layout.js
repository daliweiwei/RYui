/*
 * @authors liweiliang QQ:406320591(406320591@QQ.com).
 * @date 2017-12-12,
 * @version 1.0.0
 * @liweiliang Inc. All Rights Reserved
 * @parameter
 * 			isflow: true(column) false(row)
 */

 RY.layout = function(options,param){
 	if(typeof options == "string"){
 		return RY.layout.methods[options](param);
 	}
 	var _this = {
 		"boxModel":""
 	}
 	_this.options = $.extend({isflow:true,target:$("body"),border:""},options);
 	RY.layout.init(_this,_this.options);
 	return _this;
 }
 RY.layout.methods = {
 	get:function(param){}
 };
 RY.layout.init=function(target,options){
 	target.boxModel = $('<div class="ryui-fiexd"></div>');
 	if(options.border){
 		target.boxModel.css("border",options.border);
 	}
 	target.boxModel.addClass(options.isflow ? "ryui-fiexd-clomn" : "ryui-fiexd-row")
 	if(options.top){
 		target.topRegion = $('<div class="ryui-fiexd-top"></div>').appendTo(target.boxModel);
 		target.topRegion.css({
 			"height":options.top.height,
 			"left":(options.isflow ? 0 : (!!options.left && !!options.left.width ? options.left.width : 0)),
 			"right":(options.isflow ? 0 : (!!options.right && !!options.right.width ? options.right.width : 0))
 		});
 	}
 	if(options.left){
 		target.leftRegion = $('<div class="ryui-fiexd-left"></div>').appendTo(target.boxModel);
 		target.leftRegion.css({
 			"width":options.left.width,
 			"top":(options.isflow ? (!!options.top && !!options.top.height ? options.top.height : 0) : 0),
 			"bottom":(options.isflow ? (!!options.bottom && !!options.bottom.height ? options.bottom.height : 0) : 0)
 		});
 	}
 	if(options.right){
 		target.rightRegion = $('<div class="ryui-fiexd-right"></div>').appendTo(target.boxModel);
 		target.rightRegion.css({
 			"width":options.right.width,
 			"top":(options.isflow ? (!!options.top && !!options.top.height ? options.top.height : 0) : 0),
 			"bottom":(options.isflow ? (!!options.bottom && !!options.bottom.height ? options.bottom.height : 0) : 0)
 		});
 	}
 	if(options.bottom){
 		target.bottomRegion = $('<div class="ryui-fiexd-bottom"></div>').appendTo(target.boxModel);
 		target.bottomRegion.css({
 			"height":options.bottom.height,
 			"left":(options.isflow ? 0 : (!!options.left && !!options.left.width ? options.left.width : 0)),
 			"right":(options.isflow ? 0 : (!!options.right && !!options.right.width ? options.right.width : 0))
 		});
 	}
 	target.centerRegion = $('<div class="ryui-fiexd-center"></div>').appendTo(target.boxModel);
 	target.centerRegion.css({
 		"top":!!options.top && !!options.top.height ? options.top.height : 0,
 		"left":!!options.left && !!options.left.width ? options.left.width : 0,
 		"right":!!options.right && !!options.right.width ? options.right.width : 0,
 		"bottom":!!options.bottom && !!options.bottom.height ? options.bottom.height : 0
 	});
 	if(options.target){
 		options.target.append(target.boxModel);
 	}
 };
 