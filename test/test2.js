var firstnum;
var secondnum;
var click;
console.log(firstnum);
console.log(secondnum);
console.log(click);

function num(n){
	if(firstnum){
		secondnum = n;
	}else{
		firstnum = n;
	}
	var x = n;
	var text = document.getElementById("text");
	text.value = x;
}

function add(){
	var result ;
	if(click == "add"){
		result = firstnum+secondnum;
		return result;
	}
	click = "add";
}

function subtract(){
	var result ;
	if(click == "substract"){
		result = firstnum-secondnum;
		return result;
	}
	click = "subtract"
}

function divide(){
	var result ;
	if(click == "divide"){
		result = firstnum/secondnum;
		return result;
	}
	click = "divide";
}

function multiply(){
	var result ;
	if(click == "multiply"){
		result = firstnum*secondnum;
		return result;
	}
	click ="multiply";
}

function equal(){
	var re;
	if(click == "add"){
		re = add();
	}


	if(click == "substract"){
		re = substract();
	}

	if(click == "divide"){
		re = divide();
	}

	if(click == "multiply"){
		re = multiply();
	}
	
	var text = document.getElementById("text");
	click = null;
	firstnum = null;
	secondnum = null;
	text.value = re;
}

