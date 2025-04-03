// Addition
var add = (firstValue, secondValue) => {
    var sum = firstValue + secondValue;
    return sum;
}
// Substraction
var sub = (firstNum, secondNum) => {
    var substraction = firstNum - secondNum;
    return substraction;
}
// Multiplication
var multiply = (firstDigit, secondDigit) => {
    var multiple = firstDigit * secondDigit;
    return multiple;
}
// Division
var division = (valueOne, valueTwo) => {
    var divide = valueOne / valueTwo;
    return divide;
}

export default add;
export { sub, multiply, division };