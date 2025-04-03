const arr = [
    { name: 'John', age: 25 },
    { name: 'Mary', age: 30 },
    { name: 'Peter', age: 35 }
];
let output = arr.map(obj => ({ name: obj.name.toUpperCase(), age : obj.age }))
console.log(output)