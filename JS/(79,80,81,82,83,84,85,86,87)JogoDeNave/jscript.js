var diryJ,dirxJ,jog,velJ,pjx,pjy;
var velT;
var tamTelaW, tamTelaH;
var jogo;
var frames;
var contBombas,painelContBombas,velB,tmpCriaBomba;
var bombasTotal;
var vidaPlaneta, barraPlaneta;
var ie,isom;
var telaMsg;

function teclaDw(){
	var tecla=event.keyCode;
	if(tecla == 38){ //Cima
		diryJ=-1;
	}else if(tecla == 40){ //Baixo
		diryJ=1;
	}
	if(tecla == 37){ //Esquerda
		dirxJ=-1;
	}else if(tecla == 39){ //Direita
		dirxJ=1;
	}
	if(tecla == 32){ //Espaço / Tiro
		//Tiro
		atira(pjx+17,pjy);
	}
}
function teclaUp(){
	var tecla=event.keyCode;
		if((tecla == 38)||(tecla == 40)){ //Cima
			diryJ=0;
		}
		if((tecla == 37)||(tecla == 39)){ //Esquerda
			dirxJ=0;
		}
}
function criaBomba(){
	if(jogo){
		var y=0;
		var x=Math.random()*tamTelaW;
		var bomba=document.createElement("div");
		var att1=document.createAttribute("class");
		var att2=document.createAttribute("style");
		att1.value="bomba";
		att2.value="top:"+y+"px;left:"+x+"px;";
		bomba.setAttributeNode(att1);
		bomba.setAttributeNode(att2);
		document.body.appendChild(bomba);
		contBombas--;
	}
}
function controlaBomba(){
	bombasTotal=document.getElementsByClassName("bomba");
	var tam=bombasTotal.length;
	for(var i=0;i<tam;i++){
		if(bombasTotal[i]){
			var pi=bombasTotal[i].offsetTop;
			pi+=velB;
			bombasTotal[i].style.top=pi+"px";
			if(pi>tamTelaH){
				vidaPlaneta-=10;
				criaExplosao(2,bombasTotal[i].offsetLeft,null);
				bombasTotal[i].remove();
			}
		}
	}
}

function atira(x,y){
	var t=document.createElement("div");
	var att1=document.createAttribute("class");
	var att2=document.createAttribute("style");
	att1.value="tiroJog";
	att2.value="top:"+y+"px;left:"+x+"px";
	t.setAttributeNode(att1);
	t.setAttributeNode(att2);
	document.body.appendChild(t);
}
function controleTiros(){
	var tiros=document.getElementsByClassName("tiroJog");
	var tam=tiros.length;
	for(var i=0;i<tam;i++){
		if(tiros[i]){
			var pt=tiros[i].offsetTop; //
			pt-=velT;
			tiros[i].style.top=pt+"px";
			colisaoTiroBomba(tiros[i]);
			if(pt<0){
				//document.body.removeChild(tiros[i]); // Remove os tiros
				tiros[i].remove(); // Remove os tiros
			}
		}
	}
}
function colisaoTiroBomba(tiro){
	var tam=bombasTotal.length;
	for(var i=0;i<tam;i++){
		if(bombasTotal[i]){
			if(
				(
					(tiro.offsetTop<=(bombasTotal[i].offsetTop+40))&& // Cima Tiro com Baixo Bomba
					((tiro.offsetTop+6)>=(bombasTotal[i].offsetTop)) // Baixo Tiro com Cima Bomba
				)
				&&
				(
					(tiro.offsetLeft<=(bombasTotal[i].offsetLeft+24))&& // Esquerda Tiro com Direita Bomba
					((tiro.offsetLeft+6)>=(bombasTotal[i].offsetLeft)) // Direita Tiro com Esquerda Bomba
				)
			){
				criaExplosao(1,bombasTotal[i].offsetLeft-25,bombasTotal[i].offsetTop);
				bombasTotal[i].remove();
				tiro.remove();
			}
		}
	}		
}
function criaExplosao(tipo,x,y){ //Tipo1=Ar Tipo2=Chao
	if(document.getElementById("explosao"+(ie-4))){
		document.getElementById("explosao"+(ie-4)).remove();
	}
	var explosao=document.createElement("div");
	var img=document.createElement("img");
	var som=document.createElement("audio");
	//Atributos para DIV
	var att1=document.createAttribute("class");
	var att2=document.createAttribute("style")
	var att3=document.createAttribute("id");
	//Atributo para Imagem
	var att4=document.createAttribute("src");
	//Atributos para Audio
	var att5=document.createAttribute("src");
	var att6=document.createAttribute("id");

	att3.value="explosao"+ie;
	if(tipo==1){
		att1.value="explosaoAr";
		att2.value="top:"+y+"px;left:"+x+"px";
		att4.value="explosao_ar.gif?"+new Date(); //Faz com que o gif se repita porque o Date retorna cada milisegundo
	}else{
		att1.value="explosaoChao";
		att2.value="top:"+(tamTelaH-57)+"px;left:"+(x-17)+"px;";
		att4.value="explosao_chao.gif?"+new Date();
	}
	att5.value="exp1.mp3?"+new Date();  //Som da Explosao
	att6.value="som"+isom;
	explosao.setAttributeNode(att1);
	explosao.setAttributeNode(att2);
	explosao.setAttributeNode(att3);
	img.setAttributeNode(att4);
	som.setAttributeNode(att5);
	som.setAttributeNode(att6);
	explosao.appendChild(img);
	explosao.appendChild(som);
	document.body.appendChild(explosao);
	document.getElementById("som"+isom).play();
	ie++;
	isom++;
}

function controlaJogador(){
	pjy+=diryJ*velJ;
	pjx+=dirxJ*velJ;
	jog.style.top=pjy+"px";
	jog.style.left=pjx+"px";
}
function gerenciaGame(){
	barraPlaneta.style.width=vidaPlaneta+"px";
	if(contBombas<=0){ //Se o Jogador Ganhar
		jogo=false;
		clearInterval(tmpCriaBomba);
		telaMsg.style.backgroundImage="url('vitoria.jpg')";
		telaMsg.style.display="block";
	}
	if(vidaPlaneta<=0){ //Se o jogador Perder
		jogo=false;
		clearInterval(tmpCriaBomba);
		telaMsg.style.backgroundImage="url('derrota.jpg')";
		telaMsg.style.display="block";
	}
}

function gameLoop(){
	if(jogo){
		//Funções de Controle
		controlaJogador();
		controleTiros();
		controlaBomba();
	}
	gerenciaGame();
	frames=requestAnimationFrame(gameLoop);
}
function reinicia(){
	bombasTotal=document.getElementsByClassName("bomba");
	var tam=bombasTotal.length;
	for(var i=0;i<tam;i++){
		if(bombasTotal[i]){
			bombasTotal[i].remove();
		}
	}
	telaMsg.style.display="none";
	clearInterval(tmpCriaBomba); //Controle de Bombas
	cancelAnimationFrame(frames);
	vidaPlaneta=300;
	pjx=tamTelaW/2;
	pjy=tamTelaH/2;
	jog.style.top=pjy+"px";
	jog.style.left=pjx+"px";
	contBombas=150;
	jogo=true;
	tmpCriaBomba=setInterval(criaBomba,1700); //Cria Bomba
	gameLoop();
}			

function inicia(){
	jogo=false;
	
	//Ini Tela
	tamTelaH=window.innerHeight;
	tamTelaW=window.innerWidth;

	//Ini Jogador
	dirxJ=diryJ=0;
	pjx=tamTelaW/2; 
	pjy=tamTelaH/2;
	velJ=velT=5;
	jog=document.getElementById("naveJog");
	jog.style.top=pjy+"px";
	jog.style.left=pjx+"px";

	//Controles das Bombas
	contBombas=150;
	velB=3;

	//Controles do Planeta
	vidaPlaneta=300;
	barraPlaneta=document.getElementById("barraPlaneta");
	barraPlaneta.style.width=vidaPlaneta+"px";

	//Controle de Explosão
	ie=isom=0;

	//Telas
	telaMsg=document.getElementById("telaMsg");	
	telaMsg.style.backgroundImage="url('intro.jpg')";
	telaMsg.style.display="block";						
	document.getElementById("btnJogar").addEventListener("click",reinicia);
}

window.addEventListener("load",inicia);
document.addEventListener("keydown",teclaDw);
document.addEventListener("keyup",teclaUp);