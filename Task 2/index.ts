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
enum studPerformance {
    Excellent,
    Very_Good,
    Good,
    Need_Improvement
}
interface students {
    name: string,
    age?: number,
    rank: number | string,
    grade?: string
    performance: studPerformance | string
}
var fetchGrade = (rank: number): string => {
    var result = '';
    switch (true) {
        case (rank <= 10):
            result = 'A+';
            break;
        case (rank <= 15):
            result = 'A';
            break;
        case (rank <= 25):
            result = 'B';
            break;
        case (rank > 25):
            result = 'C';
            break;
    }
    return result;
}
var grade: string[] = ['A+', 'A', 'B', 'C']
var studentPerformance = (student: students) => {
    student.grade = fetchGrade(Number(student.rank))
    grade.map((element: string, index: number) => {
        if (student.grade == element) {
            student.performance = studPerformance[index]
        }
    })
    return student
}
var filteredDetail = studentsDetail.filter((element) => element.rank != '') as students[]
var updatedDetail: students[] = filteredDetail.map(studentPerformance)
var firstRankStudent: students = updatedDetail.reduce((acc, curr) => {
    return acc.rank < curr.rank ? acc : curr
})
var check = (firstRankStudent: students) => {
    if (firstRankStudent.rank === 1) {
        return firstRankStudent
    }
    return console.assert(firstRankStudent.rank === 1, "First rank student should have rank 1")
}
var output = check(firstRankStudent)
console.log(updatedDetail)
if (output) {
    console.log('First Rank Student', output)
}