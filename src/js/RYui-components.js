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
        modal:true,
        target:$("body")
    },options);
    dialog.options = options; 
    RY.dialog.init(dialog,param);
    return dialog;
};
RY.dialog.init = function(dialog,param){
    dialog.triggerElement =document.activeElement;
    dialog.triggerElement.blur();
    var options = dialog.options;
    if(options.modal){
        dialog.mask = $('<div class="ryui-dialog-mask"></div>').appendTo(dialog);
    }
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
        if(dialog.options.onPreClose && typeof dialog.options.onPreClose == "function"){
            dialog.options.onPreClose(dialog,function(isCan){
                if(isCan){
                    RY.dialog.methods.close(dialog);
                }
            });
        }else{
            RY.dialog.methods.close(dialog);
        }
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
        callback:'',
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
            if(typeof options.callback == "function"){
                options.callback.call(this);
            }
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
    if(!RY.loading.wrap){
        RY.loading.init(options);
        options.target.append(RY.loading.wrap);
    }
};
RY.loading.init = function(options){
    RY.loading.wrap = $('<div class="ryui-loading flex-box flex-align-items-center flex-justify-center"></div>');
    $('<div class="ryui-loading-mask"></div>').appendTo(RY.loading.wrap);
    var loading_position = $('<div class="ryui-loading-position"></div>').appendTo(RY.loading.wrap);
    var loading_li = '';
    for(var i=1;i<=12;i++){
        loading_li += '<li class="ryui-loading-frames-'+ i +'"></li>';
    }
    var loading_frames = $('<ul class="ryui-loading-frames ryui-loading-rotate">'+ loading_li +'</ul>').appendTo(loading_position);
    loading_frames.css({
        "width":options.width,
        "height":options.height,
        "color":options.color
    });
}
RY.loading.methods = {
    close:function(){
        if(!!RY.loading.wrap){
            RY.loading.wrap.remove();
            RY.loading.wrap = null;
        }
    }
};

RY.confirm = function (options) {
    options = $.extend({
        width:"",
        height:"",
        minWidth:"200px",
        minHeight:"",
        maxWidth:"80%",
        maxHeight:"",
        modle:true,
        buttons:{"确定":function(){}},
        title:"",
        text:"提示",
        align:"",
        opacity:0,
        target:$("body")
    }, options);
    var confirm = $('<div class="ryui-confirm"></div>');
    function hidden(){
        if(!!confirm){
            confirm.hide("300",close);
        }
    }
    function close(){
        confirm.triggerElement.focus();
        confirm.remove();
    }
    function init(){
        confirm.triggerElement = document.activeElement;
        confirm.triggerElement.blur();
        confirm.options = options;
        if(options.modle){
            confirm.mask = $('<div class="ryui-confirm-mask"></div>').appendTo(confirm);
        }
        confirm.body = $('<div class="ryui-confirm-body"></div>').appendTo(confirm);
        confirm.bg = $('<div class="ryui-confirm-bg"></div>').appendTo(confirm.body);
        confirm.content =  $('<div class="ryui-confirm-content"></div>').appendTo(confirm.body);
        if(options.title){
            confirm.title = $('<div class="ryui-confirm-title">'+ options.title +'</div>').appendTo(confirm.content);
        }
        if(options.text){
            confirm.text = $('<p class="ryui-confirm-text">'+ options.text +'</p>').appendTo(confirm.content);
        }
        confirm.buttonWrap = $('<div class="ryui-confirm-buttonWrap"></div>').appendTo(confirm.body);
        if(options.buttons){
            confirm.btns = [];
            var i = 0;
            for(var key in options.buttons){
                confirm.btns[i] = $('<a class="ryui-confirm-button">'+ key +'</a>').appendTo(confirm.buttonWrap);
                $(confirm.btns[i]).on("click",function(e){
                    hidden();
                    confirm.options.buttons[e.target.innerHTML].call(this);
                });
                i++;
            }
        }
        if(options.target){
            options.target.append(confirm);
        }
        var innHeight = confirm.body.innerHeight();
        if(options.maxWidth){
            confirm.body.css("maxWidth",options.maxWidth);
        }
        if(options.minWidth){
            confirm.body.css("minWidth",options.minWidth);  
        }
        if(options.width){
            confirm.body.css("width",options.width);    
        }
        confirm.body.css("top",(innHeight/2*-1)+"px");
    }
    init();
    return confirm;
}
