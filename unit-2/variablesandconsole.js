/* 
    var
    let
    const
        - variables that hold data - doesn't change
    (or none)
*/

let a = 2;
let streetAddress = '123 main street';

let     b   =    1;
// 1    2   3    4

/* 
    1. Javascript Keyword to denote the creation of a variable
    2. The name of the variable
        - Developers refer to in order to grab the value stored
    3. Assignment operater
    4. The initial value.
*/

// Variable Declaration
let x; 

// Variable Initialization
let y = 10; // Anything on the right side of the assignment operator (=)

// Assigning to Other Variables
let first = 'John';
let last = 'smith';

let full = first + last;

console.log('Declaration:', x); // Declaration: undefined 

x = 10; // assigning our variable
console.log('Initialization 1: ', x);

x = 33; // reassigning the value of our variable
console.log('Initialization 2: ', x);

let hi = 'Hello';
console.log('Both: ', x, hi);

// const = 'new' in ES6: declare variables meant to remain unchanged.

let today = 'Great!';
const javaScript = 'wonderful';
console.log(today, javaScript);

today = 'Lovely!';
console.log(today, javaScript);

// javaScript = 'Super'; //When we try to reassign a const variable it will give a TypeError 
console.log(today, javaScript);

console.warn('this is a warning');

let warning = 'uh oh';
console.warn('warn ', warning);

let err = 'this looks real bad...';

console.error('error ', err);
