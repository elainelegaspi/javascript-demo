console.log(1);
console.log(2);

let myAge = 25;
let year = 2019;

// log things to console
console.log(myAge, year);

age = 30;
console.log(age);

const points = 100; // use const if you don't want it to be overriden
console.log(points);

var score = 75;
console.log(score);

// strings
console.log('hello, world');

// let email = 'email@academic.rrc.ca';
console.log(email);

// string concatenation
let firstName = 'Brandon';
let lastName = 'Sanderson';

let fullName = firstName + ' ' + lastName;
console.log(fullName);

// getting characters
console.log(fullName[2]);

// string length
console.log(fullName.length);

// string methods
console.log(fullName.toUpperCase());
// let result = fullName.toLowerCase();
// console.log(result, fullName);

// let index = email.indexOf('@');
// console.log(index);

// common string methods
// let result2 = email.lastIndexOf('a');
// let result3 = email.slice(0,5);
// console.log(result2);
// console.log(result3);
// let result = email.substr(4,10);
// let result = email.replace('m', 'w');
// console.log(result);

// Template Strings
const title = 'Best reads of 2019';
const author = 'Mario';
const likes = 30;

// concatenation way
// let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
// console.log(result);
// template string way
// let result = `The blog called ${title} by ${author} has ${likes} likes`;
// console.log(result);

// // creating html templates
// let html = `
//     <h2>${title}</h2>
//     <p>By ${author}</p>
//     <span>This blog has ${likes} likes</span>
// `;

// console.log(html);