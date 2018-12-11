$(function(){
	$.ajax({
		type:"get",
		url:"",
		async:true,
		success: function(data) {
			$(".blogs").html(data);
	}
	});
})