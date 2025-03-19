// older way of creating/declaring variables
var myVariable = 0;
console.log(myVariable)

// let and const were introduced in ES6 in 2015
let myFavoriteFood = "Mukimo Pizza"; // variable can be re-asigned a different value. If no assigned value, created variable using let/var results to undefined
const myBirthYear = 1991; // cannot be re-assigned a different value. If no assigned value, created variable using const results to an error
console.log(myBirthYear, myBirthYear);

// string interpolation, introduced in ES6, insert variables into strings using template literals (backticks)
console.log(`My birth year is ${myBirthYear} and I like ${myFavoriteFood}`)

// ES6 = ES2015 = 6th edition of ECMAScript, is the most impactful update to the language. It introduced let/const keywords, classes, arrow functions, etc. Led to its adoption in modern frameworks like React


// if statements
let sale = 100;
if (sale > 150) {
	console.log("Hello world, if statement.")
} else {
	console.log(`not enough sales today, ${sale}`)
};

// logical operators: && - and	|| - or		! - not
// for ||, if the first value is truthy, the second value is not checked

console.log("falsy and truthy values, check comments");
// falsy values: false, 0, "", null, undefined, NaN

console.log('short circuit evaluation, let newVariable = falsyVariable || newValue;');
// if falsyVariable has a falsy value, newVariable is assigned newValue and vice versa
console.log(Boolean(sale))

let someVariable = '';
let thisNewVariable = someVariable || 'biscuits';

console.log(`old var value ${someVariable}, assigned var value ${thisNewVariable}`)

// ternary operator helps simplify if/else statements
// someVariable ? true : false
someVariable = true;
console.log(someVariable ? 'hey world' : 'false statement');
console.log(someVariable === false ? 'hey there' : 'read false statement...');

// switch statement??
/* 
switch () {
	case "":
		console.log();
		break;
	...
	default:
		console.log();
		break;
}
*/

let groceries = 'tomatoes';

switch (groceries) {
	case 'hoho':
		console.log('hoho, done');
		break;
	case 'potatoes':
		console.log('potatoes, done');
		break;
	case 'tomatoes':
		console.log('tomatoes, umefika hapa');
		break;	
	default:
		console.log('groceries not available');
		break;
}

let n = 81;

n >= 0 ? console.log('true', n) : console.log('false, default tern', n);
