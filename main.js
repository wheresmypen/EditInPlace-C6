$(document).ready(function(){
	

var selectToReturn = function(){
	$(".holder").on("click",appear)
};

var appear = function(){
	a = $(this).attr('class');
	index = a.slice(6,7);
	console.log(index);
};



// $("#hWhole").hide();

// $(" #hNameLabel, #hMotto, #hLived, .hBlog, #hContext" ).hide();

$(".input").hide();



selectToReturn();







});