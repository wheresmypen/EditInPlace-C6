$(function(){
	
var grabField="";
var stayField="";

var selectToSelect = function(){
	$(".holder").on("click",appear);
};

var appear = function(e){
	e.preventDefault;
	grabField = $(this).attr('class');
	index = grabField.slice(6,7);
	var toob = $("#label"+index).text();
	$("#label"+index).hide();
	$("#hLabel"+index).show();
	$("#vLabel"+index).show();
	stayField=index;
    console.log("selected to appear")
};

var selectToRevise = function(e){
	$(".input").on("blur",renderNew);
	return false;
}


var renderNew = function(e){
	e.preventDefault;
	var newOriginal1 = $("#hLabel"+stayField).val();
	console.log(newOriginal1);
	$("#hLabel"+stayField).hide();
	$("#label"+stayField).text($("#hLabel"+stayField).val());
	$("#label"+stayField).show();
}



$(".input").hide();



selectToSelect();
selectToRevise();






});