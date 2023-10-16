/* (102)MenuRolanteFixoTopo
	offsetTop = Retorna a medida em pixels da distancia do elemento em relação ao topo;
	pageYOffset = Retorna o número de pixel que o scroll Y esta rolando;
*/

const nav = document.getElementsByTagName("nav")[0];
const topoNav = nav.offsetTop; //Distancia do elemento para o topo do pai;

window.onscroll = function() {
    fixarMenuNoTopo();
    //A cada rolagem a pagina chama a função e faz a verificação
}

function fixarMenuNoTopo() {
    if (window.pageYOffset >= topoNav) {
        nav.classList.add("FixoNoTopo");
    } else {
        nav.classList.remove("FixoNoTopo");
    }
}