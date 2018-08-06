/*
* @authors liweiliang QQ:406320591(406320591@QQ.com).
* @date 2017-11-17,
* @version 1.0.0
* @liweiliang Inc. All Rights Reserved
*/

/*
*  获取URL参数列表
*/
RY.getParams = function(){
	var search=window.location.search,paramsObj={},args,param;
	if(search && search.length){
		search=search.replace("?","");
		args=search.split("&");
		for (var i = 0; i < args.length; i++) {
			param=args[i].split("=");
			paramsObj[param[0]] = param.length > 1 ? param[1] : "";
		}
		return paramsObj; 
	}
	return "";
};
/*
*   获取Url指定参数值
*/
RY.getParam = function(key){
	var paramsObj = RY.getParams();
	return paramsObj ? paramsObj[key] || "" : "";
};
/*
*   数据序列化
*/
RY.serialize=function(form){
	var _arr={};
	$(form.elements).each(function(index,obj){
		if(!obj.disabled){
			if(obj.type=="text"||obj.type=="textarea"||obj.type=="hidden"||obj.type=="password"||obj.type=="color"||obj.type=="number"||obj.type=="date"||obj.type=="datetime"||obj.type=="datetime-local"||obj.type=="month"||obj.type=="week"||obj.type=="time"||obj.type=="email"||obj.type=="tel"||obj.type=="url"||obj.type=="search"||obj.type=="range"||obj.type=="select-one"){
				_arr[obj.name]=obj.value;
			}else if(obj.type=="radio" && obj.checked){
				_arr[obj.name]=obj.value;
			}else if(obj.type=="checkbox" && obj.checked){
				if(form.elements[obj.name].length){
					if(_arr[obj.name] && _arr[obj.name].push){
						_arr[obj.name].push(obj.value);
					}else{
						_arr[obj.name]=[];
						_arr[obj.name].push(obj.value);
					}
				}else{
					_arr[obj.name]=obj.value;
				}
			}
		}
	});
	return _arr;
};
/*
*   数据反序列化
*/
RY.deserialize =function(form,data){
	form.reset();
	$.each(data,function(key,value){
        var element=form.elements[key];
        if(element){
            switch (element.type || element[0].type){
                case "checkbox":
                if(element.length){
                    $.each(element,function(_index,_el){
                        for(var i=0;i<value.length;i++){
                            if(_el.value==value[i]){
                                _el.checked=true;
                                break;
                            }
                        }
                    });
                }else{
                    if(element.value==value){
                        element.checked=true;
                    }
                }
                break;
                case "radio":
                $.each(element,function(index,obj){
                    if(obj.value==value){
                        obj.checked=true;
                    }
                });
                break;
                case "select-one":
                for(var i=0;i<element.length;i++){
                    if(element[i].value==value){
                        element[i].selected=true;
                        break;
                    }
                }
                break;
                default:
                element.value=value;
                break;
            }
        }
    });
};
/*
*   表单规则验证
*/
RY.Validate = function (_this) {
    if (!!$(_this).data("vaild")) {
        var pattern = new RegExp($(_this).data("vaild"));
        if (pattern.test($(_this).val())) {
            console.log("succ")
        } else {
            var errmsg = $(_this).data("errmsg");
            RY.toast({text:errmsg});
            console.log(errmsg);
            return false;
        }
    } else {
        console.log("无验证规则")
    }
    return true;
};
/*
*   表单验证
*/

RY.Vaild = function (formElem) {
    var checkResult = true;
    formElem.each(function (index, _this) {
        $.each(_this, function (i) {
            checkResult = RY.Validate(_this[i]) && checkResult;
            if(!checkResult){
                return false;
            }
        })
        // $.each(_this, function (k) {
        //  $(_this[k]).blur(function () {
        //      $.Vaild(this);
        //  });
        // })
    });
    return checkResult;
};