window.onload = init;
var GLOBAL = {
	max : 10,
	numbers : []
};

function init(){
	loadNumberImages();
	setDropZone();
	document.getElementById("resetbutton").onclick = reset;
	document.getElementById("sumbutton").onclick = add;
	document.getElementById("productbutton").onclick = multiply;
}

function multiply(){
	var product = 1;
	for(var i=0;i<GLOBAL.numbers.length;i++){
		product *= GLOBAL.numbers[i];
	}
	document.getElementById("results").innerHTML += "PRODUCT: " + product + "<br/>";
}
function add(){
	var sum = 0;
	for(var i=0;i<GLOBAL.numbers.length;i++){
		sum += GLOBAL.numbers[i];
	}
	document.getElementById("results").innerHTML += "SUM: " + sum + "<br/>";
}
function reset(){
	document.getElementById("box").innerHTML = "";
	document.getElementById("results").innerHTML = "";
	GLOBAL.numbers = [];
}
function dropNumbers(e){
	var numberImgId = e.dataTransfer.getData("imgid");
	document.getElementById("box").innerHTML += "<image src='images/" + numberImgId + ".png'>";
}
function dragStartNumbers(e){
	var num = e.srcElement.id.substring(3);
	GLOBAL.numbers.push(parseInt(num));
	e.dataTransfer.setData("imgid",num);
}
function setDropZone(){
	var box = document.getElementById("box");
	box.ondragover = function(e){ e.preventDefault(); };
	box.ondrop = dropNumbers;
}
function loadNumberImages(){
	var numbers = document.getElementById("numbers");
	var numbersHTML = "<ul>";
	for(var i=0;i<GLOBAL.max;i++){
		numbersHTML += "<li>";
		numbersHTML += "<image draggable='true' id='img0" + i + "' src='images/0" + i + ".png'>";
		numbersHTML += "</li>";
	}
	numbersHTML += "</ul>";
	numbers.innerHTML = numbersHTML;
	for(var i=0;i<GLOBAL.max;i++){
		document.getElementById("img0" + i).ondragstart = dragStartNumbers;
	}
}
