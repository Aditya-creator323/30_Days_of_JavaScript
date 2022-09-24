// if else

// Hour
// If hour is between 6am and 12pm:Good Morning
// If it is between 12pm and 6pm: Good afternoon
// otherwise: Good Evening!

/*
let hour = 10;

if(hour >= 6 && hour < 12)
    console.log("Good Morning!");
else if(hour >= 12 && hour < 18)
    console.log("Goor Afternoon!");
else
    console.log("Goor Evening!");
*/


// Switch and Case
/*
let role = 'moderator';

switch (role) {
    case 'guest':
        console.log("Guest User");
        break;
    case 'moderator':
        console.log('Moderator User');
        break;
    default:
        console.log('Unknown User');
}
*/


// Objects :-
// Object-Oriented Programming(OOP)

/*
const circle = {
    radius:1,
    location :{
        x:1,
        y:1
    },
    isVisible:true,
    draw : function(){              // method
        console.log('draw');
    }

};
*/


// circle.draw();      // calling a method

// Factory function
/*
function createCircle(radius){
    return {
        radius,
        draw(){
            console.log('draw');
        }
    };
}

const circle1 = createCircle(1);
console.log(circle1);
*/

// Camel Notation :- oneTwoThreeFour
// Pascal Notation :- OneTwoThreeFour

// Constructor function 
function Circle(radius){
    this.radius = radius;
    this.draw = function (){
        console.log('draw');
    }
}

const circle = new Circle(1);


const circle1 = {
    radius: 1
}

circle1.color = 'red';
circle.draw = function (){}

delete circle1.color;
delete circle1.draw;

console.log(circle1);
