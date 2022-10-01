// function greet(theName,favC) {
//   return `Hello, my name is ${theName} and my favourite color is ${favC}`
// }

// let result = greet('John Grisham', 'Onion Green')
// console.log(result)

// Current day temperature forecast in kelvin units.
const kelvin = 293; 

// Celsius variable.
const Celsius = kelvin - 273;

//Fahnrenheit value
let Fahrenheit = Celsius * (9/5) + 32;

// Round the result of Celsius to Fahnrenheit conversion.
Fahrenheit = Math.floor(Fahrenheit)
console.log(Fahrenheit)