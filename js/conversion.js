let val; 

// Number to string
val = String(555);
val = String(4+4);
//Bool to string 
val = String(true);
//Array to string
val = String([1,2,3,4]);

// toString()

val = (5).toString();
val = (true).toString();

// String to number 
val = Number('5');
val = Number(true); // Returns 1
val = Number(false); // Returns 0
val = Number(null); // Returns 0
val = Number('hello'); // Returns NaN wich means NOT A NUMBER
val = Number([1,23]); // NaN

val = parseInt('100.30'); // Returns only 100
val = parseFloat('100.30'); // Returns 100.3 

const val1 = String(5);
const val2 = 7;
const sum = Number(val1 + val2); // Returns 57 

console.log(sum);
console.log(typeof sum);