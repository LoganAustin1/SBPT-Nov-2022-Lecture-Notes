

//! Reverse Challenge
/*
- First check if you are working with an array
    - Using a method, flip the values within the array 
    (what was in index 5 is now in 0, 4 to 1, etc.)
    - Using a method, print the values of the newly arranged array
    
    hint: 
    - search something like "arrays", "javascript", "reverse"
    - look in your notes to see how we can check if something is an array
*/

let arr = [1, 2, 3, 4, 5];

if(arr instanceof Array) {
    let reversed = arr.reverse();
} else {
    console.log('not an array')
}
// arr.reverse();
// console.log(arr); 





//! .ForEach()
/*
    - (Go look at MDN docs to remind you):
    - Create an array containing movies (4 qty)
    - Use .forEach() to list your movies
    - Add another movie at the end
        - Use .forEach() to list your movies
    - And replace one of your existing movies with another one.
        - Use .forEach() to list your movies
*/

let movies = [
    "Departed", "The Godfather", "Finding Nemo", "Milk"
];
movies.forEach(item => console.log([item]));
movies.push("Top Gun"); // add Top Gun to end of array
movies.forEach(item => console.log(item));
movies.splice(2, 1, "Chritmas Vacation"); // add Christmas Vacation second in line in array
movies.forEach(item => console.log(item));