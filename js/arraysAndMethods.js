// Create some Arrays

const numbers = [1,55,23,44,78,99];
const numbers2 = new Array(8, 85, 34, 45, 33);
const fruit = ['Banana', 'Avacado'];
const mixed = [22, 'Mixed', true, undefined, null, {a:1, b:3}, new Date()];


let val;

// Check lenght of array

val = numbers.length;

// Check single value
val = numbers[3];

// Insert in array
numbers[2] = 63;

// Check if is array
val = Array.isArray(numbers);

// Find index of value

val = numbers.indexOf(78);

// MUTATING ARRAYS

// // Add to the end 
// numbers.push(100);
// // Add to the front
// numbers.unshift(23);
// //Take off from end
// numbers.pop();
// //Take off from front
// numbers.shift();
// // Slice value in array
// numbers.splice(1,2);
// // Reverse array
// numbers.reverse();
// // Concatenate arrays
// val = numbers.concat(numbers2);

// Sorting arrays
val = fruit.sort();
// val = numbers.sort();

// // Use the compare function

// val = numbers.sort(function(x,y) {
//   return x - y
// });

// // Reverse sort
// val = numbers.sort(function(x, y) {
//   return y - x
// });

// Find

function over50(num) {
  return num > 50
};

val = numbers.find(over50);






console.log(numbers);
console.log(val);