$(document).ready(function() {

	//点击导航隐藏左侧
	$("#fold").click(function() {

		$("#w").css({
			"display": "none"
		});
		$("#tag").css({
			"display": "block"
		});

	});

	//当导航为隐藏状态时，显示菜单
	$("#tag").click(function() {
		$("#w").css({
			"display": "block"
		});
		$("#tag").css({
			"display": "none"
		});
	})

	//遍历所有菜单
	$(".bar").each(function(i, e) {
		//点击任意一条菜单
		$(".bar").eq(i).on("click", function() {

			var menu = document.getElementById("menu" + i);
			$(menu).toggle().siblings("div").css({
				"display": "none"
			});

			//右侧箭头的
			//当下方的div为隐藏时,右侧箭头为向上  
			var dis = $(menu).css("display");
			if(dis == "none") {
				console.log(1)
				$(".bar .arror img").attr("src", "img/cityun_menu_arror_show.png");
				$(this).find(".arror img").attr("src", "img/cityun_menu_arror_show.png");
			} else {
				console.log(2)
				$(".bar .arror img").attr("src", "img/cityun_menu_arror_show.png");
				$(this).find(".arror img").attr("src", "img/cityun_menu_arror_hide.png");
			}
		});

		//	当鼠标停留时,hover效果
		var s = $(this).find(".imgs>img").attr("src");
		var st = s.split(".");
		$(".bar").eq(i).hover(function() {

				$(this).find(".imgs>img").attr("src", st[0] + "_ho." + st[1]);
			},
			function() {
				$(this).find(".imgs>img").attr("src", s);
			})
	});

});