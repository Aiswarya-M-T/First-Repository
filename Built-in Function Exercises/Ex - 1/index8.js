/*You are given an array of objects representing a collection of employees, each with a name, salary, and department.
Your task is to use map, filter, and reduce to calculate the average salary for each department 
and then return an array of objects containing only the departments that have an average salary above 65000.*/
const employees = [
    { name: "John", salary: 50000, department: "IT" },
    { name: "Jane", salary: 60000, department: "HR" },
    { name: "Bob", salary: 55000, department: "IT" },
    { name: "Sophie", salary: 75000, department: "HR" },
    { name: "Mike", salary: 65000, department: "IT" },
    { name: "Emily", salary: 80000, department: "HR" },
    { name: "David", salary: 70000, department: "IT" },
];
let groupByDepartment = employees.reduce((acc, obj) => {
    acc[obj.department] = acc[obj.department] || []
    acc[obj.department].push(obj)
    return acc
}, {})
let avgSalary = Object.keys(groupByDepartment).map(dep => {
    let avg = groupByDepartment[dep].reduce((acc, current) => acc + current.salary, 0) / groupByDepartment[dep].length;
    return { Department: dep, Average: parseInt(avg) }
})
let highSalary = avgSalary.filter(salary => salary.Average > 65000)
console.log(highSalary)