/*
!       Conditionals
        - Evaluates an expresion and responds if it is true
        - Falsy
            - false
            - 0
            - " ", ' ' (empt string)
            - null
            - undefined 
            - NaN (not a number)
*/

let isOn = true;

if(isOn == true) {
    console.log('The light is on!')
}

/* 
    Structure:

    if(conditonal evaluated) {
        ... code that runs if expression is true. 
    }

*/

if(isOn) {
    console.log('The light is on, yay!');
}

//putting information inside other information backticks "`" are above the tab button
let myName = 'Logan'
let newString = `my name is ${myName}`;
console.log(newString);
// String interpolation
let firstname = "Logan"
let lastname = "Austin"
console.log(`${firstname} ${lastname}`);

isOn = false;

if(isOn == false) {
    console.log('The light is off');
}

let weather = 72;
// if weather is < "below" 70 then say "wear a jacket"
if(weather < 70) {
    console.log('Wear a jacket');
} 
// if weather is > "aboce" 70 then say "No jacket necessary!"
else {
    console.log('No jacket necessary!')
}
// And, Or, Not

let rain = false;
weather = 68;

if(weather < 70 && rain) {
    console.log('Wear a jacket');
} else {
    console.log('No jacket necessary');
}
// this is changed by the rain being true or false
// || is or 
if(weather > 70 || rain) {
    console.log('Wear a jacket');
} else {
    console.log('no jacket')
}

    if(!rain) {
    console.log('seems to be a clear day')
    }

    let grade = 5;
    // ORDER MATTERS
    if(grade > 75) {
        console.log('passing');
    } else if(grade > 69) {
        console.log('Please see the teacher');
    } else {
        console.log('failing');
    }
    

    //! Switch
    /*
        Keywords:
            - Switch
            - Case
            - Break
                - takes us out of our code block
            - Default
                - run if no cases match

        Structure:

        switch(expression) {
            case ... :
                    return;
                    break;
            case ... :
                    return;
                    break;
            case ... :
                    return;
                    break;
            default:
                return;
        }
    */

        let officeCharacter = "Micheal";

        switch(officeCharacter) {
            case "Micheal":
                console.log("My mind is going a mile an hour")
                break;
            case "Dwight":
                console.log("Perfectenschlag")
                break;
            case "Jim":
                console.log("Bears. Beets. Battlestar Galactica")
                break;
            default:
                console.log(`I'm sorry, ${officeCharacter}, but do I know you?`);
        }

        let num = 5;

        switch (true) {
            case (num < 0 && num > -10):
                console.log('case 1 ran')
                break;
            case (num > 0):
                console.log('case 2 ran');
                break;
            default:
                console.log('did not work');
                break;
        }

    //! Ternary
    /*
        Always a If/Else condition at minimum - has to end with an else statement

        Structure:

        expression ? true : fasle;
    */
    //     let epression = false;
    // if(true) {
    //     console.log('Runs True')
    // } else {
    //     console
    // }
    let expression = false;

    expression ? console.log('runs true') : console.log('runs false');

    let newNum = 6;

    num > 0 ? console.log('yes') : console.log('no');

    // as an if/else
    if(num > 0) {
        console.log('yes');
    } else {
        console.log('no');
    }

    // Else/If
    if(newNum == 0) {
        console.log('Hello');
    } else if (newNum < 0) {
        console.log('hi');
    } else {
        console.log('goodbye');
    }

    (newNum == 0) ? console.log('Hello') : (newNum < 0) ? console.log('hi') : console.log('goodbye again');