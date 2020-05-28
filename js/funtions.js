// FUNCTIONS DECLARATIONS

function greeting(firstName = 'Bran', lastName = 'Born') {
  // console.log('Hello')
  // if(typeof firstName === 'undefined'){firstName = 'John'};
  // if(typeof lastName === 'undefined'){lastName = 'Doe'};
  return 'Hello ' + firstName + ' ' + lastName;
}

console.log(greeting());

// FUNCTIONS EXPRESSIONS

const square = function(x = 8) {
  return x * x
}

console.log(square(3));

// IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

(function() {
  console.log('IIFE Ran');
})();

(function(name) {
  console.log(`Hello ${name}`)
})('Roselyn');

// PROPERTY METHODS

const todo = {
  add: function(){
    console.log('Add Todo')
  },
  edit: function(id){
    console.log(`Edit Todo ${id}`)
  }
};

todo.delete = function(){
  console.log('Delete Todo')
}

todo.add();
todo.edit(3);
todo.delete();
