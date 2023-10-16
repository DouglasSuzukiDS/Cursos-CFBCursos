var Facas=["Espada Divina", "Facas Plasmas", "Lâmina do Dragão", "Machado Ares x2", "Kris-Ultimate Gold", "Espada Persona", "Luva Matilha", "Kukri Labaredas", "Martelo do Trovão x2", "Luvas Cano-Longo", "Machado Fênix", "Martelo", "Soco Magma", "Leque Cerâmica Azul", "Dual Karambit", "Marreta Biônica x3", "Soco Ingles x2", "Machado Tomahawk", "Tijolo", "Machete x2", "Faca  Elite", "Faca Predador", "Punhos do Titã x11","Adaga Laser", "Mini Pallas", "Luvas Colosso x5", "Punho de Pallas"];

Facas.sort(); //Ordena o Array

var qtdFacas=Facas.length; //Tamanho do Array
var nFacas ="Facas Disponíveis no Arsenal: "+qtdFacas;

//document.write(qtdFacas"<br>"+nFacas;
var mostraTR=document.getElementById('Titulo').innerHTML=nFacas;