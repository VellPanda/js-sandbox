const name = "Loky";
const age = "31";
const job = "Web Designer";
const city = "Tokyo";
let html;

// Without template literals (ES5)

html = '<ul><li>Name: ' + name + '</li><li> Age: ' + age + '</li><li> Job: ' + job +'</li><li>City: ' + city +'</li></ul>'

html = '<ul>' + 
        '<li>Name: ' + name +  '</li>' +
        '<li>Age: ' + age +  '</li>' +
        '<li>Job: ' + job +  '</li>' +
        '<li>City: ' + city +  '</li>' +
        '</ul>';


// With template literals (ES6)

function hello() {
  return 'Heya !!'
};

html = `<ul>
          <li>Name: ${name}</li>
          <li>Age: ${age}</li>
          <li>Job: ${job}</li>
          <li>City: ${city}</li>
          <li>${hello()}</li>
          <li>${2 + 2}</li>
          <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
        </ul>`

document.body.innerHTML = html;