const id = 100;

// Equal to value
if(id == 100) {
  console.log('Correct')
};

// Not Equal
if (id != 101) {
  console.log('Incorrect')
}

// Equal to value and type
if (id === 100) {
  console.log('Correct')
} else {
  console.log('Incorrect')
};

// Not equal to value and type
if (id !== 100) {
  console.log('Correct')
} else {
  console.log('Incorrect')
};




// Test if undefined

if(typeof val === 'undefined') {
  console.log('val is NOT Defined')
} else {
  console.log('val is Defined')
};

// If greater or less

if (id >= 100 ) {
  console.log('Correct')
} else {
  console.log('Incorrect')
};


// Else if
const color = 'yellow'

if (color === 'red') {
  console.log(`Color is ${color}`)
} else if (color === 'blue') {
  console.log(`Color is ${color}`)
} else {
  console.log(`Color is ${color}`)
};

// LOGICAL OPERATORS

const name = 'Bobby';
const age = 5;

// AND &&

if (age > 0 && age < 12) {
  console.log(`${name} is a child`)
} else if (age > 12 && age < 18) {
  console.log(`${name} is a teenager`)
} else {
  console.log(`${name} is adult`)
}


// OR || 

if (age < 16 || age > 65) {
  console.log(`${name} can not run in race`)
} else {
  console.log(`${name} is registred in race`)
};


// TERNARY OPERATOR
console.log(id === 100 ? 'Correct' : 'Incorrect');

// WITHOUT BRACES

if (id === 100)
  console.log('Correct');
else
  console.log('Incorect');