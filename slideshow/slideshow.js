var img = document.getElementsByTagName('img');
function plusSlides(n){
	// if(n>0){
	// 	var ac = document.getElementsByClassName('active');
	// 	var next = ac.nextSbiling;
	// 	img.remove('active');
	// 	next.class.replace('','active');
	// }

	// if(n>0){
	// 	var ac = document.getElementsByClassName('active');
	// 	var next = ac.previousSbiling;
	// 	img.remove('active');
	// 	next.class.replace('','active');
	// }
	// 
	// for(var i=0;i<img.length;i++){
	// 	 if(img[i].className == 'active'){
	// 	 	console.log(img[i]);
	// 	 	img[i].className = img[i].className.replace('active','img');
	// 	 	if(i<img.length-1){
	// 	 		img[i+1].className = img[i+1].className.replace('img','active');
	// 	 	}else{
	// 	 		img[0].className = img[0].className.replace('img','active');
	// 	 	}
	// 	 	console.log(img[i]);
	// 	 	console.log(img[i+1]);
	// 	 }
	// }
	

	for(var i =0 ;i<img.length;i++){
		console.log(img[i].style.display);
		if(img[i].style.display == 'block'){
			img[i].style.display = 'none';
		}

		if(i<img.length-1){
		 		img[i+1].style.display='block';
		 	}else{
		 		img[0].style.display='block';
		 }
	}
}

function showslide(){
}