/*
! Functions
    - block of code that performs a particular task.
    - simplified programs that run a task when invoked.

    Two Main Types:
        - Declaration
        - Expresion
*/

//* Declaration
/*
    Structure:
        1     2
    function hi() {
        ... code block
    }

    1. Keyword
    2. Name of the function and parenthesis for the parameter

    ! Gets hoisted
*/

function hi() {
    console.log('hi');
}

//* Expression 
/* 
    Structure:
        1
    let hey = function hi() {
        code block...
    }

    1. the variable "hey" is now representative of the function hi()
    ! Does not get hoisted
*/

let hello = function hey() {
    console.log('hey')
}

hi();  // invoking our function hi()
hello()  // expression variable name is required to run function
// hey(); // doesn't run

console.log(hello);
console.log(hello())

// create a function that, when invoked, lists out the numbers 1-10

function numbers() {
    for (i = 1; i <= 10; i++) {
        console.log(i);
    }
}

numbers();

// given the array, create a function that lists out the values individually.
let words = ['This', 'is', 'really', 'cool'];

function newArray() {
    for(i = 0; i < arr.length; i++ ) {
        console.log(arr[i])
        }
        for(word of words) {
            console.log(word);
        }
    
}

// newArray();

//! Parameters
/*
    Structure:

    function fncName(perameter) {
        console.log(`Hi, ${parameter}`);
                                2
    }
            3
    fncName("Paul");

    1. The perameter(s) that the function is acception or holding.
    2. Using string interpolation, we can refer to the perameter gave to the function. 
    3. This is where we define what parameters value will be.

*/

function order(ticket, total) {
    console.log(`I exchanged my ticket for a ${ticket}. It cost ${total} dollars`);
}

order('cheese pizza', 10);
order('soup', 3);
order('salad', 5);
/* invoking - arguments

    order arguments, arugment
*/

//! Return 
/*
    Structure:


    let hi = function() {
            1
        return "hi";
    };
            2       3
    let greeting = hi();

    console.log(greeting);

    1. Keyword: return - brings our data out of our function
    2. New variable to hold the returned value.
    3. When called, the function becomes the value of the return.

*/

function fName() {
    return 'Steve'
}

let myName = fName();
console.log(myName);

let volume = function(l,w,h) {
    let total = l * w * h;
    return total
}

let recOne = volume(3,5,2);
let recTwo = volume(7,2,5);

console.log("Rec One: ", recOne);
console.log("Rec Two: ", recTwo);

function coffeeMaker(filter) {
    return `a full pot of ${filter}!`;
}
let mon = coffeeMaker('coffee');
let tues = coffeeMaker('tea');
let wed = coffeeMaker('green tea');
let sat = coffeeMaker('soup');

console.log(mon);
console.log(tues);
console.log(wed);
console.log(sat);

//! Arrow Functions
/*
    Structure:
        1       2
    let hi = () => {
        console.log('hi')
    }

    1. We need to set the arrow function to a variable
    2. we use the "fat arrow" to signify its a function

    - introduced in es6. They are basically just a more concise way to write functional expressions - NOT declarations.

    ! Do NOT get hoisted!

    Two different styles:
        - Concise body
        - Block Body
*/

//* Concise body 
let goodbye = () => console.log('goodbye');
goodbye();

let total = () => 2+2;
let isFour = total()
console.log(isFour)

//* Block Body 
let apples = qty => {
    return `There are ${qty} apples.`
};

let appleCount = apples(4);
console.log(appleCount)

//? same function above as concise body
let apples2 = qty => `There are ${qty} apples`;
let newAppleCount = apples2(isFour);
console.log(newAppleCount);

//? Multiple params 
let calc = (x,y) => x + y;
console.log(calc(3,4));

//* IIFE 
/*
    - Immediately Invoked Function Expression
    - Helps allocating space in memory for anonymous functions
    - Fires our function as soon as it is read

*/

(function() {
    console.log('IIFE fired')
})();

/*
    Make a tip calculator using a function
    Have it RETURN the value
    Capture that returned value in a VARIABLE
    Print that variable
*/


