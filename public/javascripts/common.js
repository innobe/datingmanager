$(document).ready(function () {
	$(".item").bind("click", function(){
    	alert($(this).attr('id'));
    });
});