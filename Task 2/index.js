var studentsDetail = [
    { "name": "JOHN", "age": 13, "rank": 2 },
    { "name": "HARRY", "age": 13, "rank": 10 },
    { "name": "VENOM", "age": 13, "rank": 10 },
    { "name": "MARK", "age": 13, "rank": 11 },
    { "name": "BROCK", "age": 13, "rank": 40 },
    { "name": "HENRY", "age": 13, "rank": "" },
    { "name": "TIM", "age": 13, "rank": 27 },
    { "name": "MARRY", "age": 13, "rank": 22 },
    { "name": "MANOJ", "age": 13, "rank": 12 }
];
var studPerformance;
(function (studPerformance) {
    studPerformance[studPerformance["Excellent"] = 0] = "Excellent";
    studPerformance[studPerformance["Very_Good"] = 1] = "Very_Good";
    studPerformance[studPerformance["Good"] = 2] = "Good";
    studPerformance[studPerformance["Need_Improvement"] = 3] = "Need_Improvement";
})(studPerformance || (studPerformance = {}));
var fetchGrade = function (rank) {
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
};
var grade = ['A+', 'A', 'B', 'C'];
var studentPerformance = function (student) {
    student.grade = fetchGrade(Number(student.rank));
    grade.map(function (element, index) {
        if (student.grade == element) {
            student.performance = studPerformance[index];
        }
    });
    return student;
};
var filteredDetail = studentsDetail.filter(function (element) { return element.rank != ''; });
var updatedDetail = filteredDetail.map(studentPerformance);
var firstRankStudent = updatedDetail.reduce(function (acc, curr) {
    return acc.rank < curr.rank ? acc : curr;
});
var check = function (firstRankStudent) {
    if (firstRankStudent.rank === 1) {
        return firstRankStudent;
    }
    return console.assert(firstRankStudent.rank === 1, "First rank student should have rank 1");
};
var output = check(firstRankStudent);
console.log(updatedDetail);
if (output) {
    console.log('First Rank Student', output);
}
