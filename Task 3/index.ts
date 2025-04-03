import { detailsOfStudent } from './indexOne';
var studentsDetail = [
    { "name": "JOHN", "age": 13, "rank": 2 },
    { "name": "HARRY", "age": 13, "rank": 1 },
    { "name": "VENOM", "age": 13, "rank": 10 },
    { "name": "MARK", "age": 13, "rank": 11 },
    { "name": "BROCK", "age": 13, "rank": 40 },
    { "name": "HENRY", "age": 13, "rank": "" },
    { "name": "TIM", "age": 13, "rank": 27 },
    { "name": "MARRY", "age": 13, "rank": 22 },
    { "name": "MANOJ", "age": 13, "rank": 12 }
]
export enum studPerformance {
    Excellent,
    Very_Good,
    Good,
    Need_Improvement
}
interface students {
    name: string,
    age?: number,
    rank: number,
    grade?: string,
    performance: studPerformance | string
}
var fetchStudentDetails = <T extends students>(stud: T): students => {
    stud.grade = detailsOfStudent.fetchGrade(stud.rank)
    stud.performance = detailsOfStudent.studentPerformance(stud.grade, stud.rank)
    return stud
}
var filteredDetail = studentsDetail.filter((element) => element.rank != '') as students[]
var studentGrade: students[] = filteredDetail.map((stud) => {
    let grade = detailsOfStudent.fetchGrade(stud.rank)
    return { ...stud, grade }
})
var studentPerformance = filteredDetail.map(fetchStudentDetails);
var firstRankStudent: students = studentPerformance.reduce((acc, curr) => {
    return acc.rank < curr.rank ? acc : curr
})
var check = (firstRankStudent: students) => {
    if (firstRankStudent.rank === 1) {
        return firstRankStudent
    }
    return console.assert(firstRankStudent.rank === 1, "First rank student should have rank 1")
}
var output = check(firstRankStudent)
console.log("Students Grade Detail : ", studentGrade)
console.log("Students Performance Detail : ", studentPerformance);
if (output) {
    console.log("First Rank Student : ", output)
}