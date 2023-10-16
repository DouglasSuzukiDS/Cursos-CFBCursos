// (07) Operadores Logicos

// && => and e
// || or ou
// ! => not não

let n1, n2, n3, n4
n1 = 10
n2 = 5
n3 = 15
n4 = 2

console.log((n1 > n2) && (n1 > n3)) // T F F
console.log((n1 > n2) || (n1 > n3)) // T F T
console.log(!((n1 > n2) || (n1 > n3))) // !(T F) T

if(!(n1 > n2) || (n3 > n4)) { // T T
   console.log('Verdadeiro')
} else {
   console.log('False')
}

