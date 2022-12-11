//! Loops 
/*
    For
        Takes in 3 parameters 
            - intital expression 
            - condition
            - increment expression

    Structure: 

    for(initial expression; conditon; increment expression) {
        ... code block
    }
*/

// for(i = 0; i < 10; i ) {
//     console.log(i);
// }

// console.log('out of loop');




// //Challenge: Using a for loop, count from 10 to 0, going down by 1
// for(i = 10; i > 0; i--) {
//     console.log(i);
// }

let firstName = 'Winebrenner';
for(let i = 0; i <firstName.length; i++) {
    console.log(firstName[i], i);
}

let sum = 0;
for(let i = 1; i <= 50; i++) {
    sum += i;
    
}
console.log(sum);

//! For In 
let student = {
    name: "Peter",
    awesome: true,
    degree: 'Javascript',
    // week: 1
}

for(item in student) {
    console.log(item); // notes each key in the object.
    console.log(student[item]); // notes the value of each key.
}

let catArray = [
    'tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'
];

for(cat in catArray) {
    // console.log(cat);
    console.log(catArray[cat]);

}

//! For Of
// for(item of student) {
//     console.log(item);
// }

// for(cat of catArray) {
//     console.log('FOR OF: ', cat);
// }

for(cat of catArray) {
    if(cat === 'tabby') {
        console.log(cat);
    } else {
        console.log("not tabby");
    }
}