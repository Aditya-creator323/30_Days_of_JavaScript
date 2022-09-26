// 1
/*
let age = prompt("Enter your age:");
if(age >= 18){
    console.log("You are old enough to drive.")
}
else{
    console.log(`You are left with ${18 - age} years to drive.`)
}
*/
// 2
let newAge = prompt("Enter your age:");
let myAge = 21;
if(newAge > myAge){
    console.log(`You are ${newAge - myAge} years older than me`);
}
else if(myAge > newAge){
    console.log(`You are ${myAge - newAge } years younger than me`);
}
else{
    console.log(`We both are of equal age`);
}




