var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var user = /** @class */ (function () {
    function user(name, email) {
        this.name = name;
        this.email = email;
    }
    Object.defineProperty(user.prototype, "userAge", {
        get: function () {
            return this.age;
        },
        set: function (age) {
            this.age = age;
        },
        enumerable: false,
        configurable: true
    });
    user.prototype.check = function (role) {
        if (role === 'student' && student.age >= 5) {
            this.userAge = student.age;
        }
        else if (role === 'teacher' && teacher.age > 20) {
            this.userAge = teacher.age;
        }
        else {
            console.error('Student age should equal to 5 or above & Teacher age should above 20');
        }
    };
    return user;
}());
var student = /** @class */ (function (_super) {
    __extends(student, _super);
    function student(name, email, studClass, rank) {
        var _this = _super.call(this, name, email) || this;
        _this.studClass = studClass;
        _this.rank = rank;
        return _this;
    }
    return student;
}(user));
var teacher = /** @class */ (function (_super) {
    __extends(teacher, _super);
    function teacher(name, email, subject, classesHandleByTeacher, yearsOfExperience) {
        var _this = _super.call(this, name, email) || this;
        _this.subject = subject;
        _this.classesHandleByTeacher = classesHandleByTeacher;
        _this.yearsOfExperience = yearsOfExperience;
        return _this;
    }
    return teacher;
}(user));
var Student = new student('Aiswarya', 'aiswarya@gmail.com', '5th', 1);
var Teacher = new teacher('Joshpine', 'joshpine@gmail.com', 'Science', '5th, 6th', 3);
student.age = 6;
teacher.age = 19;
Student.check('student');
Teacher.check('teacher');
console.log(Student);
console.log(Teacher);
