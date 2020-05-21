// var, let, const

var name = 'Max Vilium';
console.log(name);
var name = 'Cory Vel'; // Reasign the variable
console.log(name);

// Init var 
var greeting;
console.log(greeting); // Returns undefined
greeting = 'Hey!'; // Give to variable the value
console.log(greeting); // This exemple is more using when we declare some conditions, like if (some conditions is true) set the value off variable = 'exemple' else set another value to the var.

// Variables can be named by letters, numbers, _, and $ .. CAN NOT start with number

// Multi word vars
var firstName = 'Black'; // Camel Case 
var first_name = 'Cory'; // Underscore
var FirstName = 'Deli'; // Pascal Case (usually using in Clases,Constructors)
var firstname; // NOT recomended

// let is the same as var

// CONST
const name = 'July';
console.log(name);
const name = 'Mile'; // SyntaxError , we CAN NOT REASSIGN CONST
const salut; // SyntaxError: Missing initializer in const declaration. HAVE TO ASSIGN A VALUE

const person = {
  name: 'Yuri',
  age: '42'
}

// But we can reassign the value of CONST
person.name = 'Mary';
person.age = '18';

console.log(person);

const numbers = [1,2,3,4,5];
numbers.push(6); // append 6 to the list

// const numbers = [1,2,3,4,5,6]; // SyntaxError: Identifier 'numbers' has already been declared

console.log(numbers);