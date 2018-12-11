window.onload=function(){
	var banner = document.getElementById("banner");
	var ul= banner.children[0];
	var ol = banner.appendChild(document.createElement("ol"));
	
	var lis=banner.children[0].children;
//	创建ol  的li
	for(var i=0; i<lis.length;i++){
		ol.appendChild(document.createElement("li")).innerHTML=i+1;
	}
//	把下标居中对齐
	var ollen=ol.offsetWidth;
	ol.style.marginLeft=-ollen/2+"px";
	
	//左右两边图标的
	var box=document.getElementById("box");
	banner.onmouseover=function(){
		box.style.display="block";
	}
	banner.onmouseout=function(){
		box.style.display="none";
	}
	//点击左右两边的按钮
	var lef=document.getElementById("lef");
	var ri=document.getElementById("ri");
	
	var ta=0,le=0;
	//一个轮播图的宽
	var lbtk=lis[0].offsetWidth;
	lef.onclick=function(){
		ta+=lbtk;
		if(ta >= 0)
		{
			ta = 0;
		}
		runBox(ul,ta,30);
	}
	ri.onclick=function(){
		ta-=lbtk;
		if(ta <= -lbtk*(lis.length-1))
		{
			ta = -lbtk*(lis.length-1);
		}
		runBox(ul,ta,30);
	}
	
	//	鼠标放到下标上,轮播图跟着切换
	var oli=ol.children;
	oli[0].className="current";
	for(var i=0; i<lis.length;i++){
		oli[i].index=i;
		oli[i].onmouseover=function(){
			
			for(var j=0;j<lis.length;j++){
				oli[j].className="";
			}
			this.className="current";
			//轮播图也要动
//			ul.style.left=-this.index*banner.offsetWidth+"px";
			runBox(ul,-this.index*banner.offsetWidth,30);
		}
	}
	var lifeservi=document.getElementById("lifeservi");
	var serli=lifeservi.children;
	var si=null;
	//那12个图标处理，鼠标移动到上面时，变色，移开恢复
	for(var i=0;i<serli.length;i++){
		si=serli[i].children[0].children[0];
		si.style.background="url(img/icon_lifeserv.png) no-repeat left -"+i*25+"px";
		
		serli[i].index=i;
		serli[i].onmouseover=function(){
			for(var j=0;j<serli.length;j++){
				si=serli[j].children[0].children[0];
				si.style.background="url(img/icon_lifeserv.png) no-repeat left -"+j*25+"px";
			}
			si=serli[this.index].children[0].children[0];
			si.style.background="url(img/icon_lifeserv.png) no-repeat right -"+this.index*25+"px";
		}
//		鼠标移开时恢复原状
		serli[i].onmouseout=function(){
			si=serli[this.index].children[0].children[0];
			si.style.background="url(img/icon_lifeserv.png) no-repeat left -"+this.index*25+"px";
		}
	}
}
function closes(){
	document.getElementById("topbanner").style.display="none";
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