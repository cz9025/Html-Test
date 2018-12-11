window.onload=function(){
	var w_slider=document.getElementById("w_slider");
	var slider_main=document.getElementById("slider_main");//图片的父盒子
	var slider_img=slider_main.children;
	var slider_ctrl=document.getElementById("slider_ctrl");//下标盒子
	var slider_con=slider_ctrl.children;//那八个span按钮
	
	//用js创建下标 span 
	for(var i=0;i<slider_img.length;i++){
		
		var span=document.createElement("span");
		span.innerHTML=i+1;
		span.className="slider-ctrl-con";
		slider_ctrl.insertBefore(span,slider_con[i+1]);
	}
//	slider_ctrl.children[1].className="slider-ctrl-con current";
	slider_ctrl.children[1].setAttribute("class","slider-ctrl-con current");
	
	//把除第一张图片外  都放到右边
	for(var i=1;i<slider_img.length;i++){
		slider_img[i].style.left=w_slider.clientWidth+"px";
	}
	
	//点击span按钮
	var now=0;
	for(var k in slider_con){
		slider_con[k].onclick=function(){
			if(this.className=="slider-ctrl-prev"){
				//console.log("左侧按钮");
				animate(slider_img[now],{left:w_slider.clientWidth});

				now--;
				if(now<0){
					now=slider_img.length-1;
				}
				slider_img[now].style.left=-w_slider.clientWidth+"px";//立即返回到左侧
				
				animate(slider_img[now],{left:0});
				circle();
				
			}else if(this.className=="slider-ctrl-next"){
				//console.log("you侧按钮");
				play();

			}else{
				//console.log("xiamian按钮");
				var that=this.innerHTML-1;
				console.log(now+"  "+ that);
				if(that>now){//相当于点击下一章
					
					animate(slider_img[now],{left:-w_slider.clientWidth});
					slider_img[that].style.left=w_slider.clientWidth+"px";
					animate(slider_img[that],{left:0});
					
				}else if(that<now){//相当于点击上一张
					animate(slider_img[now],{left:w_slider.clientWidth});
					slider_img[that].style.left=-w_slider.clientWidth+"px";
					animate(slider_img[that],{left:0});
				}
				//必须要把当前点击的给now
				now=that;
					
				circle();
			}
		}
		
		
	}
	//下面那个图标跟随图片而动
	function circle(){
		for(var i=1;i<slider_con.length-1;i++){
			slider_con[i].className="slider-ctrl-con";
		}
		slider_con[now+1].className="slider-ctrl-con current";
		
	}
	
	var timer=null;
	
	timer=setInterval(play,2000);
	//定时器自动滚动,相当于再点击右侧的按钮,效果一样
	function play(){
		animate(slider_img[now],{left:-w_slider.clientWidth});
				
		now++;
		if(now>slider_img.length-1){
			now=0;
		}
		slider_img[now].style.left=w_slider.clientWidth+"px";//立即返回到右侧
					
		animate(slider_img[now],{left:0});
		circle();
	}
	
	//鼠标停留再图片上时,暂停播放
	slider_main.onmouseover=function(){
		clearInterval(timer);
	}

	slider_main.onmouseout=function(){
		clearInterval(timer);
		timer=setInterval(play,2000);
	}
}
