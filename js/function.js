/*
  getclass(classname) 获取指定的类名的元素
  classname  指定要获取元素的classname
  思路
  1、判断浏览器
     document.getElementsByClassName
     range  指定的范围；具体的一个DOM对象
  2、获取所有元素
  3、元素的类名是否等于指定类名
  4、符合条件储存到数组
  5、返回数组
*/
 function getClass(classname,range){
 	  range=range||document;
 	  // range=range?range:document;
 	  // range=range===undefined?document:range;
 	if(document.getElementsByClassName){
 		//W3c 
 		return range.getElementsByClassName(classname);
 	}else{ 
 		//ie6-8
 		var all=range.getElementsByTagName("*");
 		var arr=[];
 		for(var i=0;i<all.length;i++){
 			//当前元素的className是否包含指定的classname
 			if(checkClass(all[i].className,classname)){
 			arr.push(all[i]);
 		   }
 		}
 		return arr;
 	}
 }
 /*checkClass(classStr,classname)
   classStr是否包含classname
   "one two"       "one"
 */
 function checkClass(classStr,classname){
 	var arr=classStr.split(" ");
 	for(var i=0;i<arr.length;i++){
 		if(arr[i]===classname){
 			return true;
 		}
 	}
 	return false;
 }



/*$(selecter)  获取元素
 $(".one") 获取指定类名的元素
 $(".one") 获取指定id名的元素
 $(".one") 获取指定标签名名的元素
 1、初始化参数range
 2、selecter 去空
 3、判断第一个字符
 4、获取元素
*/
function $(selecter,range){
   range=range||document;
   //不兼容trim
   selecter=selecter.trim();
   if(selecter.charAt(0)=="."){
   	return getClass(selecter.substring(1));
   }else if(selecter.charAt(0)=="#"){
   	return range.getElementById(selecter.substring(1));
   }else if(/^[a-zA-Z][a-zA-Z1-6]{0,8}$/.test(selecter)){
    return range.getElementsByTagName(selecter);
   }
}



/*getContent(obj,value)  获取或者设置obj的文本
  obj 指定对象      value   颜色设置的文本
  1、判断获取、设置     参数多个  value
  2、获取
    判断浏览器是否支持属性    return   obj.innerText
    return   obj.textContent
  3、设置
    判断浏览器是否支持属性   obj.innerText=value
     obj.textContent=value
*/
function getContent(obj,value){
  if(value){
     //设置
     if(obj.innerText){
       obj.innerText=value
     }else{obj.textContent=value
      }
  }else{
     //获取
     if(obj.innerText){
       return  obj.innerText
     }else{return  obj.textContent
      }
  }
}



/*getStyle(obj,attr)  获取指定元素的样式
  obj  指定对象    attr  样式属性
  1、判断浏览器是否支持属性
  2、返回属性值
*/
function getStyle(obj,attr){
  if(window.getComputedStyle){
    return getComputedStyle(obj,null)[attr];
  }else{
    return obj.currentStyle[attr];
  }
}