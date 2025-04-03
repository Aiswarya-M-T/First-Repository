"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.detailsOfStudent = void 0;
var index_1 = require("./index");
var detailsOfStudent;
(function (detailsOfStudent) {
    detailsOfStudent.fetchGrade = function (rank) {
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
    var grades = ['A+', 'A', 'B', 'C'];
    detailsOfStudent.studentPerformance = function (grade, rank) {
        grade = detailsOfStudent.fetchGrade(rank);
        var performance = '';
        grades.map(function (element, index) {
            if (grade == element) {
                performance = index_1.studPerformance[index];
            }
        });
        return performance;
    };
})(detailsOfStudent || (exports.detailsOfStudent = detailsOfStudent = {}));
