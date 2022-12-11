let conditions = [
    'sunny', 'snow', 'humid','sunny', 'snow', 'humid', 'sunny', 'snow', 'humid', 'rain','sunny', 'snow', 'humid', 'windy'
];

let number = 0;
// let weather = 'sunny';

do {
    // code block that runs as long as the while expression returns true
    // exception: will run at least once.

    console.log(conditions[number]);
    number++;

    if(conditions[number] === "rain") {
        // number = 20;  // provide a "false" for our while expression
        // break; // breaks out of our loop (code block)
        number++;
        // continue; // can help us "skip" a position.
    } 

} while (number < conditions.length);

console.log(number);
// continues 