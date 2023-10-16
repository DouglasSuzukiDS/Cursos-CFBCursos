// (91) Aprendendo sobre Objetos Literais - Parte 02
const objetos = document.getElementById('objetos')

const computador = { 
   // cpu: 'i9',
   // ram: '64gb',
   // hd: '2tb',
   cpu: '',
   ram: '',
   hd: '',
   info: function() {
      console.log(`CPU: ${this.cpu}`)
      console.log(`RAM: ${this.ram}`)
      console.log(`HD: ${this.hd}`)
   }
}

computador['monitor'] = '22pol'
computador.placaVideo = 'RTX'
delete(computador.hd)
const c1 = Object.assign({}, computador) // Faz uma especie de clone de um obj
c1.info()

const c2 = Object.create(computador)
c2.cpu = 'i9'
c2.ram = '32gb'
c2.hd = '2tr'
c2.info()

const o1 = {obj1: '1'}
const o2 = {obj2: '2'}
const o3 = {obj3: '3'}
const o4 = Object.assign(o1, o2, o3) // Também é possivel mesclar em um novo obj

console.log(o4)

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