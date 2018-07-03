function toload(t){
	var pic = document.getElementById('img');
	pic.style.display = 'none';
	var window = document.getElementById('window');
	window.style.display = "block";
	var src = t.src;
	var ban = document.getElementById('ban');
	for(var i = 0;i < ban.length;i++){
		var img = ban[i].Children;
		console.log(img[0]);
		if(src == img[0].src){
			ban[i].style.display = "block";
		}
	}
}

function change(){
	var list ,img;
	list = document.getElementById('list');
	img = list.Children();
}