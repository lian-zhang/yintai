window.onload=function(){
  //微信选项卡
  function xuanxianka(xianshi,yincang){
   var item=$(xianshi);
   var list=$(yincang);
   for(i=0;i<item.length;i++){
    item[i].index=i;
    item[i].onmouseover=function(){
      list[this.index].style.display="block";
    }
    item[i].onmouseout=function(){
      list[this.index].style.display="none";
    }
   }
 }
   xuanxianka(".h-l-two",".w-he");
   xuanxianka(".h-l-three",".s-he");
   xuanxianka(".h-r-five",".wd-he");
   xuanxianka(".quanbux",".heone");
    
     // xuanxianka(".ssmpcenter",".right2");
   //手机银泰选项卡 
 //   var hlthree=$(".h-l-three");
 //   var she=$(".s-he");
 //   for(i=0;i< hlthree.length;i++){
 //     hlthree[i].index=i;
 //     hlthree[i].onmouseover=function(){
 //      she[this.index].style.display="block";
 //    }
 //     hlthree[i].onmouseout=function(){
 //      she[this.index].style.display="none";
 //    }
 //   }
 // }
 //  // 我的银泰选项卡
 //   var hrfive=$(".h-r-five");
 //   var wdhe=$(".wd-he");
 //   for(i=0;i< hrfive.length;i++){
 //     hrfive[i].index=i;
 //     hrfive[i].onmouseover=function(){
 //      wdhe[this.index].style.display="block";
 //    }
 //     hrfive[i].onmouseout=function(){
 //      wdhe[this.index].style.display="none";
 //    }
 //   }
 //  // 名品
 //   var quanbux=$(".quanbux");
 //   var heone=$(".heone");
 //   for(i=0;i< quanbux.length;i++){
 //     quanbux[i].index=i;
 //     quanbux[i].onmouseover=function(){
 //      heone[this.index].style.display="block";
 //    }
 //     quanbux[i].onmouseout=function(){
 //      heone[this.index].style.display="none";
 //    }
 //   }

  
// 超值特卖
  var chzdiv=$(".chzdiv");
   var duanqundiv=$(".duanqundiv");
   var dasan=$(".dasan");
   for(i=0;i< chzdiv.length;i++){
     chzdiv[i].index=i;
     chzdiv[i].onmouseover=function(){
      duanqundiv[this.index].style.display="block";
      duanqundiv[this.index].style.zIndex=10;
      dasan[this.index].style.display="block";
    }
     chzdiv[i].onmouseout=function(){

      duanqundiv[this.index].style.zIndex=5;
      dasan[this.index].style.display="none";
    }
   }
   /*--边框效果--*/
        
      var w0w=$(".w0w");
    for(var i=0;i<w0w.length;i++){
         ytborder(w0w[i])
        }
    function ytborder(w0w){
    var width=parseInt(getStyle(w0w,"width"))+2;
    var height=parseInt(getStyle(w0w,"height"))+2;

         var wrr=[];
    for(var i=0;i<4;i++){
      var w1w=$("<div>");
        w1w.style.cssText="position:absolute;background:#000;"
           w0w.appendChild(w1w);
       wrr.push(w1w)
       }
           wrr[0].style.cssText+="width:0px;height:1px;left:-1px;top:-1px;"
       wrr[1].style.cssText+="width:1px;height:0px;left:-1px;top:-1px;"
       wrr[2].style.cssText+="width:0px;height:1px;right:-1px;bottom:-1px;"
       wrr[3].style.cssText+="width:1px;height:0px;right:-1px;bottom:-1px;"
       w0w.onmouseover=function(){
        animate(wrr[0],{width:width},600);
        animate(wrr[1],{height:height},600);
              animate(wrr[2],{width:width},600);
        animate(wrr[3],{height:height},600);
        }

                w0w.onmouseout=function(){
        animate(wrr[0],{width:0},600);
        animate(wrr[1],{height:0},600);
              animate(wrr[2],{width:0},600);
        animate(wrr[3],{height:0},600);}

    
    
    }

   
//man
   var shangleft=$(".shangleft");
   var liangxie=$(".liangxie");
   var san=$(".sanjiao")

   for(i=0;i< shangleft.length;i++){
     shangleft[i].index=i;
     shangleft[i].onmouseover=function(){
      liangxie[this.index].style.display="block";
      liangxie[this.index].style.zIndex=10;
      san[this.index].style.display="block";
      
    }
     shangleft[i].onmouseout=function(){

      liangxie[this.index].style.zIndex=5;
      san[this.index].style.display="none";
    }
   }
// function xiaolunbo(a,b,c,e,f){
//                            var xui=$(a)[0];
//                              var xi=$(b)[0];
//                  var xus=$(c)[0];
//                  var yelefts=$(e)[0];
//                  var yerights=$(f)[0];
//                  function  move(){
//                   animate(xi,{left:-180},600,function(){
//                                   var first=getfistChild(xi);
//                     xi.appendChild(first);
//                                      xi.style.left="0";
//                     flag=true;
//                       })
                              
//                     }
                  
//                                  var flag=true;
//                              yelefts.onclick=function(){
//                   if(flag){
//                    flag=false;
//                    moveL();}
                   
//                                      }
//                              yerights.onclick=function(){
//                                    if(flag){
//                      flag=false;
//                      move();}
                     
//                                        } 
//                                  function moveL(){
//                    var first=getfistChild(xi);
//                    var last=getlastChild(xi);
//                    xi.insertBefore(last,first);
//                     xi.style.left=-180+"px";
//                    animate(xi,{left:0},600,function(){flag=true});
                   
//                    }}  
//                                xiaolunbo(".bottomzhong",".bzimgbox",".bottomzhong",".leve",".reve")   
//                                  }
     
   
var banner=$("#zdx");
var imgs=$(".tu");
var lis=$(".lis");
var left=$(".left")[0];
var right=$(".right")[0];
var now=0;
var next=0;
var t=setInterval(moveimg,2000)
var w=parseInt(getStyle(banner,"width"));
function moveimg(){
  next=now+1;
  if(next>=imgs.length){
        next=0;
      }
  imgs[next].style.left=w+"px";
  animate(imgs[now],{left:-w},600);
  animate(imgs[next],{left:0},600,function(){flag=true;});
   for(var i=0;i<lis.length;i++){
          lis[now].style.background="#fff";
      }
          lis[next].style.background="red";
    now=next;
}

   banner.onmouseover=function(){
    clearInterval(t);
   }
   banner.onmouseout=function(){
    t=setInterval(moveimg,2000)
   }

   // 左右按钮
   var flag=true;
   right.onclick=function(){
    if(flag==false){
      return }
      moveimg();
      flag=false;
    
   }
   left.onclick=function(){
     if(flag==false){
      return }
      moveimgL();
      flag=false;
    
   }

   function moveimgL(){
      next=now-1;
      if(next<0){
        next=imgs.length-1;
      }
      imgs[next].style.left=-w+"px";
      animate(imgs[now],{left:w},600);
      animate(imgs[next],{left:0},600,function(){flag=true});
      for(var i=0;i<lis.length;i++){
          lis[now].style.background="#fff";
      }
          lis[next].style.background="red";

            now=next;
   }

  // 移图 要点击的比当前的下标大，往左走，在右边等
  //      要点击的比当前的下标大，往左走，在右边等
  for(var i=0;i<imgs.length;i++){
      lis[i].index=i;
      lis[i].onclick=function(){
        if(flag==false){
         return }
         flag=false;
        if(this.index>now){
           imgs[this.index].style.left=w+"px";
           animate(imgs[now],{left:-w},600);
           animate(imgs[this.index],{left:0},600,function(){flag=true});
           for(var i=0;i<lis.length;i++){
           lis[now].style.background="#fff";
           }
          lis[this.index].style.background="red";
        }else if(this.index<now){
           imgs[this.index].style.left=-w+"px";
           animate(imgs[now],{left:w},600);
           animate(imgs[this.index],{left:0},600,function(){flag=true});
            for(var i=0;i<lis.length;i++){
            lis[now].style.background="#fff";
            }
            lis[this.index].style.background="red";
        }
        now=this.index;
        next=this.index;

      }
  }

//自动无缝轮播（在css中设初始状态）
 function autolunbo(obj,imgs,lis,left,right){
  var bans=$(obj)[0];
  var banner=$(imgs);
  var lis=$(lis);
  var left=$(left)[0];
  var right=$(right)[0];
  var w=parseInt(getStyle(bans,"width"));
  var n=0;
  var next=0;
  var t=setInterval(moveimg,2000)
  var flag=true;
  function moveimg(){
     if(!flag){
       return;
     }
     flag=false;
      next=n+1;
      if(next==banner.length){
        next=0;
      }
      banner[next].style.left=w+"px";
      animate(banner[n],{left:-w},600);
      animate(banner[next],{left:0},600,function(){flag=true});
      for(var i=0;i<lis.length;i++){
          lis[n].style.background="#6e6e6e";
      }
          lis[next].style.background="#e6185f";

            n=next;
   }

   
   
   bans.onmouseover=function(){
    clearInterval(t);
    left.style.display="block"
    right.style.display="block"

   }
   bans.onmouseout=function(){
    t=setInterval(moveimg,2000);
    left.style.display="none"
    right.style.display="none"
   }

   // 左右按钮
   
   right.onclick=function(){ 
     
     moveimg();
   }
   left.onclick=function(){
    
      moveimgL();
   }
    function moveimgL(){
      if(!flag){
       return;
     }
     flag=false;
      next=n-1;
      if(next<0){
        next=banner.length-1;
      }
      banner[next].style.left=-w+"px";
      animate(banner[n],{left:w},600);
      animate(banner[next],{left:0},600,function(){flag=true});
      for(var i=0;i<lis.length;i++){
          lis[n].style.background="#6e6e6e";
      }
          lis[next].style.background="#e6185f";

            n=next;
   }
  // 移图 

  for(var i=0;i<banner.length;i++){
      lis[i].index=i;
      lis[i].onclick=function(){
        if(!flag){
         return;
        }
        flag=false;
        if(this.index>n){
           banner[this.index].style.left=w+"px";
           animate(banner[n],{left:-w},600);
           animate(banner[this.index],{left:0},600,function(){flag=true});
           for(var i=0;i<lis.length;i++){
           lis[n].style.background="#6e6e6e";
           }
          lis[this.index].style.background="#e6185f";
        }else if(this.index<n){
           banner[this.index].style.left=-w+"px";
           animate(banner[n],{left:w},600);
           animate(banner[this.index],{left:0},600,function(){flag=true});
            for(var i=0;i<lis.length;i++){
            lis[n].style.background="#6e6e6e";
            }
            lis[this.index].style.background="#e6185f";
        }
        n=this.index;
        next=this.index;

      }
  }
}
autolunbo(".ssmpcenter0",".shimao0",".lis0",".left0",".right0");
autolunbo(".ssmpcenter3",".shimao3",".lis3",".left3",".right3");
autolunbo(".ssmpcenter4",".shimao4",".lis4",".left4",".right4");
autolunbo(".ssmpcenter5",".shimao5",".lis5",".left5",".right5");
autolunbo(".ssmpcenter6",".shimao6",".lis6",".left6",".right6");
autolunbo(".ssmpcenter7",".shimao7",".lis7",".left7",".right7");




  //封装商标选项卡
    function tabTrade(obj){
        var imgs=$(".tradeBLBmbox",obj);
        var left=$(".tradeBLBs1",obj)[0];
        var right=$(".tradeBLBs2",obj)[0];
        var now=0;
        var next=0;
        var flag=true;
        //初始化
        var tabwm=parseInt(getStyle(imgs[0],"width"));
        for(var i=0;i<imgs.length;i++){
            if(i==0){
                continue;
            }
            imgs[i].style.left=tabwm+"px";
        }
        left.onclick=function(){
            if(flag){
                next=now-1;
                flag=false;
                if(next<0){
                    next=imgs.length-1;
                }
                for(var i=0;i<imgs.length;i++){
                    if(i==now){
                        continue;
                    }
                    imgs[i].style.left=-tabwm+"px";
                }
                animate(imgs[next],{left:0});
                animate(imgs[now],{left:tabwm},function(){
                    flag=true;
                });
                now=next;
            }
        }
        right.onclick=function(){
            if(flag){
                next=now+1;
                flag=false;
                if(next==imgs.length){
                    next=0;
                }
                for(var i=0;i<imgs.length;i++){
                    if(i==now){
                        continue;
                    }
                    imgs[i].style.left=tabwm+"px";
                }
                animate(imgs[next],{left:0});
                animate(imgs[now],{left:-tabwm},function(){
                    flag=true;
                });
                now=next;
            }
        }
    }
    //获取tradeBLB
    var tradeBLB=$(".tradeBLB");
    //调用
    for(var j=0;j<tradeBLB.length;j++){
        tabTrade(tradeBLB[j]);
    }
// 楼层跳转
  var broswerH = document.documentElement.clientHeight; 
  var floors = $(".floor"); 
  var flis = $("li",$("#guding"));
  var cebian = $("#guding");

  // 侧边当前显示
  var cbnow ;
  window.onscroll=function(){
    var obj = document.body.scrollTop?document.body:document.documentElement;
    // 内部元素超出窗口的距离
    var top=obj.scrollTop;
    var arr=[];
    for(var i=0;i<floors.length;i++){
      // 获取楼层据浏览器上不的距离
      arr.push(floors[i].offsetTop);    
    }
    for(var i=0;i<flis.length;i++){
      flis[i].index=i;
      flis[i].onclick=function(){
        if(this.index==flis.length-1){
          animate(obj,{scrollTop:0},200);
        }
        animate(obj,{scrollTop:arr[this.index]-50},200);
      }
      flis[i].onmouseover=function(){
        this.className="active";
      }
      flis[i].onmouseout=function(){
        if(cbnow==this.index){
          return;
        }
        this.className="";        
      }
    }
    for(var i=0;i<floors.length;i++){
      if(top>arr[i]-100){
        for(var j=0;j<flis.length;j++){
          flis[j].className="";
        }
        flis[i].className="active";
      }
      cbnow=i;
    }


    for (var i = 0; i < floors.length; i++) {
    floors[i].h=floors[i].offsetTop;
  };
     if (top>=floors[0].h-400) {
      cebian.style.display="block";
    var nHeight=cebian.offsetHeight;
    cebian.style.top=(broswerH-nHeight)/2+"px";
  };
        if (top<=floors[0].h-400) {
      cebian.style.display="none";
    }
    
  }


}