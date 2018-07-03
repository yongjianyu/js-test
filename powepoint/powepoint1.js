var slideIndex = 0;
showSlides();

/*function plusSlides(n){
	showSlides(slideIndex += n);
}
function currentSlide(n){
	showSlides(slideIndex = n);
}*/


function showSlides(){
	var i;
	var slides = document.getElementsByClassName("mySlides");
	//var dots = document.getElementsByClassName("dot");
	//if(n > slides.length){slideIndex = 1;}
	//if (n < 1) {slideIndex = slides.length;}
	for(i = 0;i< slides.length;i++){
		slides[i].style.display = "none";
	}
	slideIndex++
	if(slideIndex > slides.length){slideIndex = 1;}
	/*for(i = 0;i < dots.length;i++){
		dots[i].className = dots[i].className.replace("active","");
	}*/
	//console.log(slides);
	//console.log(dots);
	//console.log(slideIndex-1);
	//console.log("."+dots[0].className+":active");
	slides[slideIndex-1].style.display = "block";
	//dots[slideIndex-1].className += "active";
	setTimeout(showSlides,2 000);
}