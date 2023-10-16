/* (108)Galeria de Imagens */

function mostrarImagem(img){
	const imagemGrande = document.getElementById("imagemGrande"); //Captura o elemento
	imagemGrande.src = img.src; //Atribui o src da imagem clicada ao elemento
	imagemGrande.parentElement.style.display="block";//Atribui o elemento ao conteiner e o mostra
}