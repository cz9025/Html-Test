window.onload=function(){
	
//banner部分JS=================================================================
var timer=null;
var topbanner=document.getElementById("topbanner");
var ul=topbanner.children[0];
//背景图片li
var lis=topbanner.children[0].children;

var ol=topbanner.appendChild(document.createElement("ol"));

for(var i=0;i<lis.length;i++){
	//新增li并赋值
	ol.appendChild(document.createElement("li")).innerHTML=i+1;
	lis[i].style.background="url(img/banner"+(i+1)+".jpg)  no-repeat center center";
}
//默认不能选中第一个
var oli=ol.children;
oli[0].className="current";

for(var i=0;i<oli.length;i++){
	oli[i].index=i;
	oli[i].onmouseover=function(){
		for(var j=0;j<oli.length;j++){
			oli[j].className="";
//			lis[j].style.background="";
		}
		this.className="current";
		//这个快速切换
//		ul.style.left=-this.index*lis[this.index].offsetWidth+"px";
		runBox(ul,-this.index*lis[this.index].offsetWidth,10);
		//这种方式还有问题
//		lis[this.index].style.background="url(img/banner"+(this.index+1)+".jpg)  no-repeat center center";
//		console.log(lis[this.index].offsetWidth);
num=this.index;
	}
}

//自动轮播
var num=0;
timer=setInterval(play,2000);
function play(){
	for(var i=0;i<lis.length;i++){
		oli[i].className="";
	}
	
	oli[num].className="current";
	runBox(ul,-num*lis[0].offsetWidth,10);
	num++;
	if(num>lis.length-1){
		num=0;
	}
}

ul.onmouseover=function(){
	clearInterval(timer);
}
ul.onmouseout=function(){
	clearInterval(timer);
	timer=setInterval(play,2000);
}

//参数1:运动的盒子;	参数2:目标距离;	参数3:运动速度
function runBox(obj, target, speed) {
	clearInterval(obj.timer);
	var spd = obj.offsetLeft < target ? speed : -speed;
	obj.timer = setInterval(function() {
		
		var result = Math.abs(target - obj.offsetLeft);
		
		obj.style.left = obj.offsetLeft + spd + "px";
		//如果目标距离和左边距的差值大于运动距离,则继续运动,否则停止
		if(result <= speed) {
			
			clearInterval(obj.timer);
			obj.style.left = target + "px";
		}
		console.log(obj.offsetLeft);
	}, 10)

}

//luntu部分JS===================================================================

var content=document.getElementById("content");

//先让他为2计算
var ol_lt=content.appendChild(document.createElement("ol"));

for(var i=0;i<2;i++){
	ol_lt.appendChild(document.createElement("li"));
}

var ol_lt_li=ol_lt.children;
ol_lt.children[0].className="crt";

var ul_lt=content.children[0].children[0];
for(var i=0;i<2;i++){
	ol_lt_li[i].index=i;
	ol_lt_li[i].onmouseover=function(){
		for(var j=0;j<2;j++){
			ol_lt_li[j].className="";
		}
		this.className="crt";
		runBox(ul_lt,-this.index*1000,30);
	}
}

//加个自动轮播
}


