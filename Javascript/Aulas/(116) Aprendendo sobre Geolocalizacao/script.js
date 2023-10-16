// (116) Aprendendo sobre Geolocalização 
const long = document.getElementById('long')
const lati = document.getElementById('lati')

if(navigator.geolocation) {
   navigator.geolocation.getCurrentPosition(mostrarLocalizacao, erroLocalizacao)
} else {
   console.log('Geolocalização não suportado')
}

function mostrarLocalizacao(pos) {
   // console.log(pos)
   long.innerHTML = `Longitude: ${pos.coords.longitude}`
   lati.innerHTML = `Latitude: ${pos.coords.latitude}`
}

function erroLocalizacao() {
   console.log('Erro ao ober a localização')
}