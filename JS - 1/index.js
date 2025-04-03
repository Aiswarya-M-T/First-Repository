// Add new key value pair to the object using dot notation
const user = {
    name: 'ajay',
     age: 23,
    qualification: 'B.E.Csc'
}
function testObj(){
    user.district = "Madurai";
    user.state = "Tamilnadu";
    console.log(user);
}
testObj()

//var
for (var i = 1; i <= 10; i++) {
    console.log(i)
}
console.log("var : " + i);

//let
for (let j = 1; j <= 10; j++) {
    console.log(j)
}
console.log("let : " + j);

//const
for (const k = 1; k <= 10; k++) {
    console.log(k)
}
console.log("const : " + k);
