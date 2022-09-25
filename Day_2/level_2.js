// 1
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");
// 2
console.log('"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead."')
// 3
let num = '10';
if(typeof(num) === typeof(10)){
    console.log("true");
}
else{
    let num2 = parseInt(num);
    console.log(typeof(num2) === typeof(10))
}

// 4
let flo = parseFloat('9.8');
let ten = Math.ceil(flo);
console.log(ten);

// 5
let word1 = "python";
let word2 = "jargon";
if(word1.includes('on') && word2.includes('on')){
    console.log('true');
}
else{
    console.log('false');
}

// 6
let sentence = "I hope this course is not full of jargon.";
console.log(sentence.includes('jargon'));

// 7
let random = Math.floor(Math.random() * 101);
console.log(random);

// 8
let rand = Math.floor(Math.random()*51)+50;   // Math.floor(Math.random() *(max-min+1))+min;
console.log(rand);

// 9
let rando = Math.floor(Math.random() * 256);
console.log(rando);

// 10
let java_script = "JavaScript";
let len = java_script.length;
let rand_len = Math.floor(Math.random() * (len+1));
console.log(java_script.charAt(rand_len))






