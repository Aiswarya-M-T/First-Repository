// Spread operator
var array = [1, 2, 3, 4, 5];
function add(firstValue, secondValue, thirdValue, fourthValue, fifthValue) {
    var sum =  firstValue + secondValue + thirdValue + fourthValue + fifthValue;
    return sum;
}
console.log("Sum : " + add(...array));

// 2 - Object
const user = {
	name: 'karthick',
	age: 12,
    standard: 7
};
const mark = {
	marks : [67, 34, 54,72,56],
	grade : 'II'
};
var userDetails = {...user, ...mark};
console.log(userDetails);

// 3 - Over write
const employee = {
	name: 'ajay',
	age: 26,
	designation: 'software engineer',
	email: 'sr@gmail.com'
};
var email = {email : 'sr@mitrahsoft.com'};
var employeeDetail = {...employee, ...email};
console.log(employeeDetail);