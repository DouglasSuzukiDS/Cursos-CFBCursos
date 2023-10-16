var video = document.getElementById("meuVideo");
var btn = document.getElementById("btnPausa");

function pausarVideo(){
	if(video.paused){
		video.play();
		btn.innerHTML="Pausa";
	}else{
		video.pause();
		btn.innerHTML="Play";
	}
}