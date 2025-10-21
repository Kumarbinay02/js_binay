let score  = "100";

console.log(typeof score); //string
console.log(typeof(score))

let valueInNumber = Number(score); // conversion from string to number

console.log(typeof valueInNumber); //number
console.log(valueInNumber); //100

// "33" => 33
// "33abc" => NaN
// true => 1 , false => 0
// "" => 0

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn); // conversion from number to boolean
console.log(booleanIsLoggedIn); // true
console.log(typeof booleanIsLoggedIn); // boolean

// "0", "" , null , undefined , NaN => false
// "Binay" => true

let someNumber = 33;
let stringNumber = String(someNumber); // conversion from number to string
console.log(typeof someNumber); //number
console.log(typeof stringNumber); //string
console.log(stringNumber); // "33"