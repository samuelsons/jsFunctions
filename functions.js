// function greet(theName,favC) {
//   return `Hello, my name is ${theName} and my favourite color is ${favC}`
// }

// let result = greet('John Grisham', 'Onion Green')
// console.log(result)


/* Temperature Conversion from Celsius to Fahrenheit */
/*---------------------------------------------------*/
// Current day temperature forecast in kelvin units.
// const kelvin = 293; 

// // Celsius variable.
// const Celsius = kelvin - 273;

// //Fahnrenheit value
// let Fahrenheit = Celsius * (9/5) + 32;

// // Round the result of Celsius to Fahnrenheit conversion.
// Fahrenheit = Math.floor(Fahrenheit)
// console.log(Fahrenheit)

/* ---End of Temperature Program--- */


// Human to Dog Age Conversion program.
// let myAge = 37;

// //Computer the first 2years of a dog and store in variable.
// let earlyYears  = 2;
// let dogYears = ((myAge - 2) * 4) + 21;
// console.log(`My age in dog years is: ${dogYears}years`);


//Loops & Conditional 
/*+++++++++++++++++*/

//For Loop - Log a value in console 5x

//Initialize an index.
// Condition for iteration.
// Continue iteration for as long as condition returns true.

// for (let i = 0; i < array.length6; i++) {
//     console.log('Loop' + i)
//     if (i === 3) break
// }


// For Loop usage in an array data.
// //Print the name of the index upon iteration across array objects.
// const names = ['John', 'Bob', 'Mary', 'Jane']

// for (let i = 0; i < names.length; i++) {
//     console.log(names[i])
//     if (i === 2) break
// }


//For Of Loop

// for (name of names) {
//     console.log(name)
// }


// Back to Functions
// function greet(theName, favColor) {
//     console.log("Hello, my name is "+ theName +" and my favorite color is "+ favColor + ".")
// }

// greet("John", "Blue")

//Function: Tripple a number passed into a function.
function trippleMe(x) {
    return 3 * x
}

console.log(trippleMe(9))