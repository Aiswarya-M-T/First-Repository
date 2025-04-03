"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.studPerformance = void 0;
var indexOne_1 = require("./indexOne");
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
})(studPerformance || (exports.studPerformance = studPerformance = {}));
var fetchStudentDetails = function (stud) {
    stud.grade = indexOne_1.detailsOfStudent.fetchGrade(stud.rank);
    stud.performance = indexOne_1.detailsOfStudent.studentPerformance(stud.grade, stud.rank);
    return stud;
};
var filteredDetail = studentsDetail.filter(function (element) { return element.rank != ''; });
var studentGrade = filteredDetail.map(function (stud) {
    var grade = indexOne_1.detailsOfStudent.fetchGrade(stud.rank);
    return __assign(__assign({}, stud), { grade: grade });
});
var studentPerformance = filteredDetail.map(fetchStudentDetails);
var firstRankStudent = studentPerformance.reduce(function (acc, curr) {
    return acc.rank < curr.rank ? acc : curr;
});
var check = function (firstRankStudent) {
    if (firstRankStudent.rank === 1) {
        return firstRankStudent;
    }
    return console.assert(firstRankStudent.rank === 1, "First rank student should have rank 1");
};
var output = check(firstRankStudent);
console.log("Students Grade Detail : ", studentGrade);
console.log("Students Performance Detail : ", studentPerformance);
if (output) {
    console.log("First Rank Student : ", output);
}
