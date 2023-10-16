/*(124)EfeitoDigitacao*/
var i = 0;
var txt = "CFB Cursos - Curso de HTML Completo e Profissional - wwww.youtube.com/cfbcursos.com";
var vel = 50;

function digitacao(){
	if(i < txt.length){
		document.getElementById("texto").innerHTML += txt.charAt(i);
		i++;
		vel = Math.floor(Math.random()*150);
		setTimeout(digitacao,vel);
	}
}