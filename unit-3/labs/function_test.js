let noun = 'soup';
let verb = 'eat';
let place = 'Vermont';

function declarationFunction(param1,param2,param3) {
    return `I would like to ${param2} ${param1} in ${param3}`;
}

let comments = declarationFunction(noun, verb, place);
console.log(comments);

let food = "burger";
let action = "make";
place = "Indiana";

let comment2 = declarationFunction(food, action, place);
console.log(comment2);

function capitalize(someWord) {
    let firstLetter = someWord.toUpperCase() + someWord.slice(1)

    let restOfWord = someWord.toLowerCase() + someWord.slice(2, 10)
    
    let fullWord = firstLetter + restOfWord
    console.log(fullWord)
    
    
    }
    console.log(capitalize('tomato'));     // should print 'Tomato'
    console.log(capitalize('BACON'));      // should print 'Bacon'
    console.log(capitalize('LeTTuCe'));    // should print 'Lettuce'
    console.log(capitalize('mayonnAISE')); // should print 'Mayonnaise'
    
    capitalize();
    