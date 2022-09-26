// 1
let sen = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
let lo = /love/gi;

let some = sen.match(lo);
console.log(some.length);

// 2
let sentence = 'You cannot end a sentence with because because because is a conjunction';
let pattern = /because/gi;

let something = sentence.match(pattern);
console.log(something.length)


