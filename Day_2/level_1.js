// 1
let challenge = '30 Days of JavaScript';
// 2
console.log(challenge);
// 3
console.log(challenge.length);
// 4
let upper_case = challenge.toUpperCase();
console.log(upper_case)
// 5
let lower_case = challenge.toLowerCase();
console.log(lower_case)
// 6
console.log(challenge.substr(0,2))
console.log(challenge.substring(0,3))
// 7
let slice = challenge.substring(3,challenge.length-1);
console.log(slice);
// 8 
console.log(challenge.includes('Script'));
// 9
let arr = challenge.split(' ');
console.log(arr);
arr.forEach(element => {
    console.log(element)
});
// 10
let arr2 = challenge.split(' ');
console.log(arr2);
// 11
let company = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
let company_arr = company.split(', ');
console.log(company_arr);
// 12
let change = challenge.replace('JavaScript','DSA');
console.log(change);
// 13
console.log(challenge.charAt(15));
// 14
console.log(challenge.charCodeAt(11));
// 15
console.log(challenge.indexOf('a'));  // It returns the first index where a is present
// 16
console.log(challenge.lastIndexOf('a'));
// 17
let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because'));
console.log(sentence.substr(31,7));
// 18
console.log(sentence.lastIndexOf('because'));
// 19
console.log(sentence.search('because'));
// 20
console.log(challenge.trim());
// 21
console.log(challenge.startsWith('3'));
// 22
console.log(challenge.endsWith('t'));
// 23
let pattern = /a/gi;
console.log(challenge.match(pattern));
// 24
let str1 = '30 Days Of ';
let str2 = 'JavaScript';
console.log(str1.concat(str2));
// 25
console.log(challenge.repeat(2));
