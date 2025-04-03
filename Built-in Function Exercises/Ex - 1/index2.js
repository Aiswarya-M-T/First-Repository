// 2.Multiple each object values into 2
const input = [
    { value: 5 },
    { value: 10 },
    { value: 15 },
    { value: 20 }
];
let output = input.map(obj => ({value : obj.value * 2}))
console.log(output)