// Day 1 Exercise

let myAge = 25;
let yourAge = 30;

console.log(`I am ${myAge} years old`)
console.log(`You are ${yourAge} years old`)



// Creating random number between 0 and 10

let no = Math.random()      // This gives random no b/w 0 to 0.999999
let numBtZeroAndTen = no * 11;   // This gives min :0 and max = 10.99;

let randomNumber = Math.floor(numBtZeroAndTen);
// Now above line will give the random number between 0 and 10



// Day 2 : Level 1 Excercise

let challenge = '30 Days of JavaScript'    // 1
console.log(challenge);                     // 2
console.log(challenge.length)               // 3
console.log(challenge.toUpperCase())          // 4
console.log(challenge.toLowerCase())          // 5

let firstWord = challenge.substr(0,2)           // 6
console.log(firstWord)
// or
console.log(challenge.substring(0,3))

console.log(challenge.substring(3,22))          // 7

console.log(challenge.includes("Script"))          // 8

console.log(challenge.split());             //9 

console.log(challenge.split(' '))           // 10

let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(companies.split(','))           // 11

console.log(challenge.replace("JavaScript", "Python"))  // 12

console.log(challenge.charAt(15))               // 13

console.log(challenge.charCodeAt('J'))



// Level 2 Day 2

console.log("The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.")  // 1

console.log('\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"')  // 2

console.log(typeof '10')
console.log(typeof 10)
console.log(typeof parseInt('10'))         // 3

let py = "python"
let ja = "jargon"

console.log(py.includes("on") && ja.includes("on"))    // 5


let randomNo = Math.floor(Math.random() * 101)    // 7
console.log(randomNo)


function getRandomInt (min, max) {                                  // 8
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let noBtwnFiftyAndHundred = Math.floor(Math.random() * 51) + 50;
console.log(noBtwnFiftyAndHundred);


let java = "JavaScript"                             // 9
let ran = Math.floor(Math.random() * 10);
console.log(java[ran]);



// LEVEL 3 :- DAY 2

let lo = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
let pattern = /love/gi;
console.log(lo.match(pattern).length);                  // 1


// Window Method

// alert("Welcome of 30 Days of JS")

// let number = prompt("Enter Number","Number goes here");
// console.log(number);


// const agree = confirm("Are you sure you like to delete?")
// console.log(agree)



const now = new Date()
console.log(now)

console.log(now.getFullYear())
console.log(now.getMonth())
console.log(now.getDate())
console.log(now.getDay())
console.log(now.getHours())
console.log(now.getMinutes())
console.log(now.getSeconds())
console.log(now.getTime())

// Day 3 : Level 1 Excercise

let firstName = "Aditya"
let lastName = "Chouhan"
let country = "India"
let city = "Shivpur"
let age = 21;
let isMarried = "No"

console.log(typeof firstName,typeof lastName, typeof country, typeof city,typeof age)

console.log(4 != '4')
console.log(4 !== '4')
console.log(4 === '4')


// Day 3 : LEVEL 2

// let base = prompt("Enter the base of triangle")             // 1     
// let height= prompt("Enter the height of triangle")
// let area = 0.5*base*height;
// console.log(`The area of triangle is ${area}`)



// Day 4 : Level 1

// 1
/*
let userAge = prompt("Enter your age");
if(userAge >= 18){
    console.log("You are old enough to drive")
}
else{
    console.log(`You are lef with ${18 - userAge} years to drive`)
}
*/


// 2
/*
let meAge = 21;
let urAge = prompt("Enter your age")
if(urAge > meAge){
    console.log(`You are ${urAge - meAge} years older than me.`)
}
else{
    console.log("We both are of same age")
}
*/

// 3

let a = 4;
let b = 3;

a > b ? console.log(`${a} is greater than ${b}`)
    : console.log(`${b} is greater than ${a}`)

// 4
/*
let num = prompt("Enter a number");
if(num % 2 === 0){
    console.log("Number is Even")
}
else{
    console.log("Number is Odd")
}
*/



//      DAY 5 // LEVEL 1

const arr = Array();            // 1
const array = [];

const Arr = Array(6).fill(4);           // 2

console.log(Arr.length)          // 3

console.log(Arr[0],Arr[Arr.length/2],Arr[Arr.length -1])        // 4

const mixedDataTypes = [                // 5
    1,
    'Aditya',
    'Chouhan',
    true,
    "Shivpur",
    "CEO"
]
console.log(mixedDataTypes.length)



// LEVEL 2
console.log(countries[3])   // 1

//2
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let words = text.split(' ');            // split is used for converting string into an array

console.log(words);
console.log(words.length)

//3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

if(!shoppingCart.includes('Meat')){
    shoppingCart.unshift('Meat');
}

if(!shoppingCart.includes('Sugar')){
    shoppingCart.push('Sugar')
}

if(shoppingCart.includes('Honey')){
    let index = shoppingCart.indexOf('Honey');
    shoppingCart.splice(index,1)
}

let index = shoppingCart.indexOf('Tea')
shoppingCart[index] = "Green Tea"

console.log(shoppingCart)

// 4
if(countries.includes('Ethiopia')){
    console.log("Ethiopia")
}
else{
    countries.push("Ethiopia")
}

console.log(countries)
console.log(countries.length)


// 6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd);

console.log(fullStack)


// Level 3

// 1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
let n = ages.length;
let so = ages.sort();
console.log(so);

let mini = ages[0];
let maxi = ages[ages.length-1]

console.log(`Minimum ${mini} , Maximum ${maxi}`)

if(ages.length % 2 == 0){
    let median = (ages[n/2]+ages[(n/2)+1])/2;
    console.log(median);
}
else{
    let median = ages[n/2];
    console.log(median);
}


// Find the middle country in the country array

let middle = Math.floor(countries.length/2);
console.log(countries[middle])




// Day 7 : FUNCTIONS

// Exercise : LEVEL 1

// 1
/*
function fullName(){
    console.log("Aditya Chouhan")
}
fullName()
*/

//2
/*
function fullName(firstName, lastName){
    return (`${firstName} ${lastName}`)
}
console.log(fullName("Aditya","Chouhan"))
*/


// 3
/*
function addNumber(a,b){
    return a+b;
}
console.log(addNumber(10,20))
*/

/*
const addNumber = (a,b) =>{         // This is the arrow function 
    return `The sum is ${a+b}`
}
console.log(addNumber(10,20))
*/


// 13
/*
function bmi(weight, height){
    let m_to_cm = height/100;
    let bmI = weight / (m_to_cm * m_to_cm);

    if(bmI < 18.5){
        console.log("You are underweight");
    }
    else if(bmI >= 18.5 && bmI <= 24.9){
        console.log("You are having Normal Weight")
    }
    else if(bmI >= 25 && bmI <= 29.9){
        console.log("You are Overweight")
    }
    else{
        console.log("You are Obese")
    }
    // console.log(bmI);
}

bmi(55,170);
*/




// DAY 8
// Exercise level 1

// 1
const dog = {
    name : "Bhura",
    legs : 4,
    color : "White",
    age : 4,

    bark:function(){
        return "woof woof"
    }
};       // empty object

// 2
// console.log(dog)

dog.breed = "Roadish";

dog.getDogInfo = function(){
    return `Name : ${this.name}, Color : ${this.color}`
}

console.log(dog.getDogInfo())



// EXERCISE LEVEL 2

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

  console.log(users.Alex.skills.length)

  let winner;
  let max = 0;

  for(const user in users){
      if(users[user].skills.length > max){
          max = users[user].skills.length > max;
          winner = user;
      }
  }

  console.log(winner);

  let count = 0;
  for(const property in users){
    if(users[property].points >= 50){
        count++;
    }
  }

  console.log(count);


  // 3
  
