function animatePoint(){
	const img=document.getElementById("pointfactoryimage");
	const img1="factorypoint1.png";
	const img2="factorypoint2.png";
	img.src=img2;
	setTimeout(function() {
		img.src=img1;
	},100);
};