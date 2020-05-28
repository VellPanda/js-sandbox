// FOR LOOPS

// for(let i = 0; i < 10; i++){
//   console.log('Number is: ' + i)
// };

// for(let i = 0; i < 10; i++){
//   if(i === 3){
//     console.log(`${i} is my favorite number`)
//     continue;
//   }
//   if (i === 7) {
//     break;
//   }

// console.log('Number ' + i);
// }

// WHILE LOOP

// let i = 0;

// while(i < 10){
//   console.log('Number ' + i)
//   i++
// }

// DO WHILE

// let i = 100;

// do{
//   console.log('Number ' + i);
//   i++;
// }
// while(i < 10);

// LOOP THROUGH ARRAY 

const cars = ['Mazda', 'BMW', 'Audi', 'Skoda'];

// for(let i = 0; i < cars.length; i++) {
//   console.log(cars[i])
// }

// FOREACH

// cars.forEach(function(car){
//   console.log(car)
// });

// MAP

// const users = [
//   {id: 1, name: 'Joe'},
//   {id: 2, name: 'Boris'},
//   {id: 3, name: 'Sara'},
//   {id: 4, name: 'Molly'}
// ];

// const ids = users.map(function(user) {
//   return user.id
// });

// console.log(ids);

// FOR IN

const user = {
  firstName: 'Bobby',
  lastName: 'Miht',
  age: 30
};

for(let x in user){ // x is key off dict/array
  console.log(`${x} : ${user[x]}`);
}