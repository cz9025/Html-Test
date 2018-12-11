//获得页面滚动的距离
function scroll(){
	if(window.pageYOffset !=null){
		return{
			left:window.pageXOffset,
			top:window.pageYOffset
		}
	}else if(document.compatMode=="CSS1Compat"){
		return{
			left:document.documentElement.scrollLeft,
			top:document.documentElement.scrollTop
		}
	}
	return{
		left:document.body.scrollLeft,
		top:document.body.scrollTop
	}
}

//获取屏幕的宽度
function client(){
	if(window.innerWidth != null){ //ie9+
		return{
			width:window.innerWidth,
			height:window.innerHeight
		}
	}else if(document.compatMode=="CSS1Compat"){  //标准浏览器
		return{
			width:document.documentElement.clientWidth,
			height:document.documentElement.clientHeight
		}
	}
	return{
		width:document.body.clientWidth,
		height:document.body.clientHeight
	}
}
