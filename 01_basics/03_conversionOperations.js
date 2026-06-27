let age="25xyz"
let score ="44"
let scoreInNumber=Number(score)
console.log(typeof age)
let ageInNumber=Number(age)
console.log(typeof ageInNumber)
console.log( ageInNumber)  // NaN as age is not in number format  
console.log(typeof score)
console.log(typeof scoreInNumber) // number as score is valid in number format 




let a=-1000
let x=Boolean(a)
console.log(typeof a,typeof x)
console.log(a,x)   // if 0 then false else true

let b=""
let y=Boolean(b)
console.log(b,y) // for empty string its false after conversion
