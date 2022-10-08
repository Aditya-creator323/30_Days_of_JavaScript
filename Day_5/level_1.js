const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

// 1
const arr = [];
const arr1 = Array();
// console.log(arr);

// 2
const arr2 = [1,2,3,4,5,6];
// console.log(arr2);

// 3
// console.log(arr2.length);

// 4
let first = 0,last = arr2.length-1;
let mid = parseInt((last-first)/2);

console.log("first Item: ",arr2[first]);
console.log("Middle Item: ",arr2[mid]);
console.log("last Item: ",arr2[last]);

// 5
const mixedDataTypes = ['int','string','boolean','float','double','array'];
console.log(mixedDataTypes.length);

// 6
const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon'];

// 7
console.log(itCompanies);

// 8
console.log(itCompanies.length);

// 9
let firstC = 0, lastC = itCompanies.length-1;
let midC = parseInt((lastC - firstC)/2);

console.log("First Company:- ",itCompanies[firstC]);
console.log("Middle Company:- ",itCompanies[midC]);
console.log("Last Company:- ",itCompanies[lastC]);

// 10
const new_arr = itCompanies.join(' ');
console.log(new_arr);

// 11
console.log(new_arr.toUpperCase());

// 12
const n_arr = itCompanies.join(', ');
console.log(n_arr);

// 13
const index = itCompanies.indexOf('Microsoft');

if(index === -1){
  console.log("Company is not found.");
}
else{
  console.log(itCompanies[index] + " found at index " + index);
}


// 14


// 15
// console.log(itCompanies.sort());

// 16
// console.log(itCompanies.reverse());

// 17
console.log(itCompanies.slice(0,3));

// 18
console.log(itCompanies.slice(lastC-3+1,itCompanies.length))


// 20 
console.log(itCompanies.shift());
console.log(itCompanies);

// 21
itCompanies.splice(midC, 1);
console.log(itCompanies);

// 22
console.log(itCompanies.pop());
console.log(itCompanies)

// 23
itCompanies.splice();
console.log(itCompanies)

