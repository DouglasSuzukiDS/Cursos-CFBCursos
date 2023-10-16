// (90) Aprendendo sobre Objetos Literais
const objetos = document.getElementById('objetos')

const computador = { 
   cpu: 'i9',
   ram: '64gb',
   hd: '2tb',
   info: function() {
      console.log(`CPU: ${this.cpu}`)
      console.log(`RAM: ${this.ram}`)
      console.log(`HD: ${this.hd}`)
   }
}

computador['monitor'] = '22pol'
computador.placaVideo = 'RTX'

const computadores = [
   { 
      cpu: 'i9',
      ram: '64gb',
      hd: '2tb'
   },

   { 
      cpu: 'i7',
      ram: '32gb',
      hd: '2tb'
   },

   { 
      cpu: 'i5',
      ram: '16gb',
      hd: '1tb'
   }
]

// computador.info()
// console.log(computador)
console.log(computador.cpu)
console.log(computador['monitor'])
// objetos.innerHTML = JSON.stringify(computadores)

computadores.forEach(c => {
   // console.log(c)
   const div = document.createElement('div')
   div.innerHTML = c.cpu + '<br/ >' + c.ram + '<br/ >' + c.hd
   div.setAttribute('class', 'computador')
   objetos.appendChild(div)
})