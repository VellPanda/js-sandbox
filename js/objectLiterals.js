const person = {
  firstName: "John",
  lastName: "Smith",
  age: 30,
  email: "john@smith.com",
  hobbies: ["Music", "Bachata"],
  getBirthYear: function(){
    return 2020 - this.age
  },
  address: {
    city: "Miami",
    state: "FL"
  }
}

let val;


val = person.firstName;
val = person['lastName'];
val = person.hobbies[1];
val = person.getBirthYear();
val = person.address.state;
val = person.address['city'];


console.log(val);


const persons = [
  {name: "John", age: 30 },
  {name: "Boris", age: 39},
  {name: "Sara", age: 17}
];

for(let i = 0; i < persons.length; i++) {
  console.log(persons[i].name)
};

