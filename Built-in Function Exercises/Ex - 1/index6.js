/* You are given an array of objects representing a group of students, each with a name and an array of test scores. 
Your task is to use map, filter, and reduce to calculate the average test score for each student, 
and then return an array of objects containing only the students who have an average score above 90.*/
const students = [
    { name: "Alice", scores: [90, 85, 92] }, // sum = 267 avg = 89
    { name: "Bob", scores: [75, 80, 85] },  // sum = 240 avg = 80 
    { name: "Charlie", scores: [90, 95, 85] }, // sum = 270 avg = 90
    { name: "David", scores: [100, 100, 100] } // sum = 300 avg = 100
];
let average = students.map(student => {
    let avg = student.scores.reduce((acc, current) => acc + current) / student.scores.length;
    return { name : student.name, averageScore : avg }
})
let highScore = average.filter(student => student.averageScore > 90);
console.log(highScore)