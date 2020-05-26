const firstName = "Boris";
const lastName = "Johnson";
const age = 26;
const str = "Hello there my name is John"
const tags = "Web developer,web design,programming"
let val;

val = firstName + lastName;

// Concatenation

val = firstName + ' ' + lastName;
val = 'Hello there my name is ' + firstName + " and I'm " + age + ' years old'; 


// Append
val = "Vasile "
val += "Zagaican"

// Lenght
val = firstName.length;

// .concat

val = firstName.concat(" ", lastName);

// Change Case
val = firstName.toUpperCase();
val = lastName.toLowerCase();


// indexOf();
val = firstName.indexOf("i");
val = lastName.lastIndexOf("o");

// charAt();
val = firstName.charAt(2);

// Geting last char of string

val = firstName.charAt(firstName.length - 1);

// subtring();

val = firstName.substring(0, 3);

// slice

val = firstName.slice(0, 3);
val = firstName.slice(-3);

// split

val = str.split(" ");
val = tags.split(",");

// replace

val = str.replace("John", "Vasile");

// include 

val = str.includes("John");

console.log(val);