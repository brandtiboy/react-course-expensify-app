//
// Object destructuring
//

// const person = {
//     name: "John",
//     age: 30,
//     location: {
//         city: "San Francisco",
//         temp: 92
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}.`)

// const { city, temp: temparature } = person.location;

// if (city && temparature) {
//     console.log(`It's ${temparature} is ${city}`)
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);


//
//  Array destructuring
//

// const address = ['1299 S Juniper Street', 'Philadephia', 'Pennsylvania', '19147'];
// const [, city, state = 'New York'] = address;
// console.log(`You are in ${city} ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [coffeeType, , medium] = item;

console.log(`A medium ${coffeeType} costs ${medium}`)