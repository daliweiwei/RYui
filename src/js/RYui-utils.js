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
}
/*
*   获取Url指定参数值
*/
RY.getParam = function(key){
	var paramsObj = RY.getParams();
	return paramsObj ? paramsObj[key] || "" : "";
}
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