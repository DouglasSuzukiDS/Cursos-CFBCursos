/* (104)MenuDropDown */

function mostrarDropDown(){
	document.getElementsByClassName("menudropdown-conteudo")[0].classList.toggle("mostrarMenuDropdown");
}

window.onclick=function(event){
	if(!event.target.matches('.btndropdown')){//Elemento que foi clikado;
		var dropdowns=document.getElementsByClassName("menudropdown-conteudo");
		var i;
		for(i=0; i<dropdowns.length; i++){
			var abertodropdown=dropdowns[i];
			if(abertodropdown.classList.contains('mostrarMenuDropdown')){
				abertodropdown.classList.remove('mostrarMenuDropdown')
			}
		}
	} 
}