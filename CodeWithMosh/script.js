// Objects
/*
let person = {
    name : "Aditya",
    age : 21
};

// Dot Notation
person.name = "Adi"

// Bracket Notation
person['age'] = 22;

console.log(person);
console.log(person.name)
console.log(person.age)


// Arrays :- 

// typeof array is an object
let selectedColors = ['red','blue'];
selectedColors[2] = 'green'
selectedColors[3] = 1
console.log(selectedColors);
*/


// Function 
/*
function greet(name){
    console.log("Hello "+ name);
}

greet('Aditya');
*/



// Operators :- 

// 1) Arithmetic Operators

let x = 30;
let y = 20;

// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);
// console.log(x ** y);

// Increment (++)
console.log(++x);  // preincrement
console.log(x++);  // postincrement

// Decrement(--)
console.log(--x);  // preDecrement
console.log(x--);  // postDecrement


// 2) Assignment Operator
let a = 10;

a += 1;


// 3) Comparison Operators

let b = 2;

console.log(b > 0);

// Strict Eqality (Type + Value should be same)
console.log(1 === 1); // true
console.log('1' === 1) // false

// Lose Eqaulity ()
console.log(1 == 1);


// Ternary Operator
// If a customer has more than 100 points, they are a 'gold' customer, 
// otherwise, they are a 'silver' customer

let points = 110;
let type = points > 100 ? 'gold': 'silver';

console.log(type);


// Operator Precedence

let s = 2 + 3 * 4;

console.log(s);

// exercise 

let n1 = 'red';
let n2 = 'blue';

let temp;
temp = n2;
n2 = n1;
n1 = temp;

console.log(n1);
console.log(n2);


