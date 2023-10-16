// (16) For In e For Of
let num = [ 10, 20, 30, 40, 50 ]

/*for(let i = 0; i < num.length; i++) {
   console.log(num[i])
}*/

// FOR IN = Pega os dados de um elemento e nsere em outro
for(n in num) {
   console.log(num[n])
}

//FOR OF = Intera os elementos diretos da coleção
for(n of num) {
   console.log(n)
}

let objs = document.getElementsByTagName('div')

for(o of objs) {
   console.log(o.innerHTML = 'Curso')
}

for(o in objs) {
   console.log(o)
   console.log(objs[o].innerHTML)
}