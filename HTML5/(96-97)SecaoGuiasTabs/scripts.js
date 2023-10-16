/* (96-97)Seção de Guias e Tabs */

function abrirTab(evt,nomeTab){
	const conteudoTab=document.getElementsByClassName("conteudoTab");
	for(var i=0; i<conteudoTab.length; i++){
		conteudoTab[i].style.display="none";
	}
	const btnTabs=document.querySelectorAll('[data-btnTabs]');
	for(var i=0; i<btnTabs.length; i++){
		btnTabs[i].classList.remove('ativo');
	}
	document.getElementById(nomeTab).style.display="block";
	evt.currentTarget.classList.add("ativo");
}

document.getElementById("primeiro").click();

