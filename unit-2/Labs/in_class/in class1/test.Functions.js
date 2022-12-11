let expressionFn = () => {

    let myStatement = "Hello";

    // return myStatement;
    newExpressionFn(myStatement);
    declarationFn(myStatement);
}

// console.log(expressionFn());

let newExpressionFn = (statement) => {
    return `${statement} there!`;
}

function declarationFn(statement) {
    return `${statement} there!`;
}
// console.log(newExpressionFn('Hi'));

console.log(expressionFn());