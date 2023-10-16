var Submetralhadoras=["Kriss Super-V DDB", "Kriss Super V Metal Líquido", "Bizon PP19-Ouro", "Dual Scorpion-Cerâmica Azul", "Steyr-PDP", "Dual Scorpion vZ.61", "Sterling-SilverType", "Calico M960", "MP7", "MP5K A4", "P90", "MP7A1", "K1A", "SR3M", "MP5", "SR-2M", "Veresk", "Micro Galil"];

Submetralhadoras.sort();

var qtdSubmetralhadoras=Submetralhadoras.length; //Tamanho do Array
var nSubmetralhadoras="Submetralhadoras Disponíveis no Arsenal: "+qtdSubmetralhadoras;

//document.write(qtdSubmetralhadoras+"<br>"+nSubmetralhadoras);
var mostraTR=document.getElementById('Titulo').innerHTML=nSubmetralhadoras;

