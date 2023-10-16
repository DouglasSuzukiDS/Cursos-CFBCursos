var Metralhadoras=["M240B-Trovão", "M60 Metal Líquido", "Gatling Gun Metal Líquido", "Lewis Gun", "SS77-QuadCamo", "MG3 Camo", "KSP58D", "FN M249 Minimi", "Vektor SS-77", "L86 LSW", "M60", "RPK", "MG36", "Ultimax 100", "Neqev NG7", "RPK-Aguia Rubra", "CSRG M1915"];

Metralhadoras.sort(); //Ordena o Array

var qtdMetralhadoras=Metralhadoras.length; //Tamanho do Array
var nMetralhadoras ="Metralhadoras Disponíveis no Arsenal: "+qtdMetralhadoras;

//document.write(qtdMetralhadoras"<br>"+nMetralhadoras;
var mostraTR=document.getElementById('Titulo').innerHTML=nMetralhadoras;