function soma(n1,n2){
	var res;
	res=n1+n2;
	document.write(res);
}

function dt_txt(){
	var data=new Date();
	var meses=new Array("Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro");
	var dsem=new Array ("Domingo","Segunda-Feira","Terça-Feira","Quarta-Feira","Quinta-Feira","Sexta-Feira","Sábado");

	document.write(dsem[data.getDay()] + ", " + data.getDate() + " de " + meses[data.getMonth()] + " de " + data.getFullYear());

}