//Print object
var name = 'babu';
var age = '24';
var city = 'KVP';
const object = {name, age, city};
console.log(object)

//Print new object
var name = 'babu';
var age = '24';
var education = { college: 'UTI', degree: 'BE', class: 'first class', location: 'cbe' };
const newObj = {name,age,education}
console.log(`Name : ${newObj.name}`)
console.log(`College : ${newObj.education.college}`)
console.log(`Class : ${newObj.education.class}`)