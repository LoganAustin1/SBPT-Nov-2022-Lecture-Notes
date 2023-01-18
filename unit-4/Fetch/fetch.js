/*
! API 
    - Application Programming Interface
    - Client (front end) to communicate with the server (to database)
    - Allow HTTP request and responce lifecycle.
    


! AJAX
    - Asynchronous Javascript and XML
    - Wrap XML with XMLHHpptyRequests -> not important to know righ now
    - Governs different aspects of our page, such as static vs dynamic section of our page.

    *jQuery
        - A library that helps us handle the front end 
        - Prior to DOM and Fetch
        - Still used but dated

    example: 
        - timed update to comments (replies)
        - infinite scrolling
        - dynamic search results

    - Works through multiple technologies
        - HTML / CSS
        - DOM (Document Object Model)
        - JSON 
        - Fetch
        - JS bringing it all together 

    - Not Promised based
*/

/*
! Fetch
    - Before fetch(), we would have to use httpRequest through the above noted.
    - Is an API
    - A method requires 1 argument.
        - location of data (url)
    - Handles the request and responce
    - Returns a promise
        - Allows us to access


*/


const log = console.log;


const testEndpoint = 'https://jsonplaceholder.typicode.com/posts/';

fetch(testEndpoint)
    // .then(responce => log(responce)); // object is returned.
    // .then(responce => log(responce.url)); // View url in object.
    // .then(responce => log(responce.body)); // body of object -> returns a string 

/*
! JSON 
    - Javascript Object Notation
        - very lightweight for storing and transferring data
        - "easy to understand"

    Syntax:
    {
        "key":"value",
        "key": true,
        "key": 0
    }

    - Everything is wrapped in quotes with minor exceptions (integers / booleans)
    - Data is all seperated with commas
    - Cannot hold comments or functions
*/

.then(responce => responce.json()) // "json-ifying our string"
// .then(data => log(data.title)); looking at "title" within the JSON object
.then(data => log(data));

//* JSON.parse(string)
let myText = '{ "name": "Gollum", "lost_ring": true }';
log(myText);
log(JSON.parse(myText));


/*
The Process:
    1. Fetch your recourse which returns a promise
    2. Use a .then() resolver to catch fetches return and assign to a parameter.
    3. use .json() on responce to finish reading entire ReadableStream.
    4. Chained another .then() to catch read responce object and ..
    5. Build the rest as needed. 
        - DOM manipulation
        - use data to process in other functions
        - whatever your project requires.

    Fetch differs from jQuery:
        - The promise returned won't reject on HTTP error status even if its a 404 or 500 (internal / ecternal server error )
*/

const url = 'https://meowfacts.herokuapp.com/';


// function getCatFact() {
//     fetch(url)
//         .then(r => r.json())
//         .then(d => log(d.data[0]));
// }

//* async/await version
const getCatFact = async () => {
    let res = await fetch(url);
    let result = await res.json();
    let data = result.data[0];

    log('In Async/Await: ', data);
}

getCatFact();

//* Local Fetch
fetch('./local.json')
    .then(r => r.json())
    // .then(d => log(d));
    // .then(d => log(d.fellowship));
    .then(d => {
        let members = d.fellowship;

        for(m of members) {
            if(m.name === 'Gimli') {
                m.name = 'Hannah'
                log(m.name);
            } else {
                log(m.name);
            }
        }

    });

    // Error Handling
async function getCatFact() {

    try {
        
        let responce = await fetch(url)
        let results = await responce.json();
        let data = results.data[0];
        log('Try/Catch: ', data);
    } catch (err) {
        console.log(err);
    
    }
}

getcatFact3();

//* using resolvers 
fetch(url)
    .then(r => r.json())
    .then(d => log('Resolver: ', d.data[0]))
    .catch(err => console.error(err));


