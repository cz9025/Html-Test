//获得页面滚动的距离
function scroll() {
	if(window.pageYOffset != null) {
		return {
			left: window.pageXOffset,
			top: window.pageYOffset
		}
	} else if(document.compatMode == "CSS1Compat") {
		return {
			left: document.documentElement.scrollLeft,
			top: document.documentElement.scrollTop
		}
	}
	return {
		left: document.body.scrollLeft,
		top: document.body.scrollTop
	}
}

//获取浏览器可视区域的宽度
function client() {
	if(window.innerWidth != null) { //ie9+
		return {
			width: window.innerWidth,
			height: window.innerHeight
		}
	} else if(document.compatMode == "CSS1Compat") { //标准浏览器
		return {
			width: document.documentElement.clientWidth,
			height: document.documentElement.clientHeight
		}
	}
	return {
		width: document.body.clientWidth,
		height: document.body.clientHeight
	}
}

//匀速动画

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