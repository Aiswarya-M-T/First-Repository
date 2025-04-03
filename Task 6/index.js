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
//Method Overriding
var employees = /** @class */ (function () {
    function employees(name, role, salary) {
        this.name = name,
            this.role = role,
            this.monthlySalary = salary;
    }
    employees.prototype.calculateAllowance = function () {
        return this.monthlySalary * 0.05;
    };
    return employees;
}());
var developer = /** @class */ (function (_super) {
    __extends(developer, _super);
    function developer(name, role, monthlySalary) {
        return _super.call(this, name, role, monthlySalary) || this;
    }
    developer.prototype.calculateAnnualIncome = function () {
        return this.monthlySalary * 12;
    };
    return developer;
}(employees));
var manager = /** @class */ (function (_super) {
    __extends(manager, _super);
    function manager(name, role, monthlySalary, bonus) {
        var _this = _super.call(this, name, role, monthlySalary) || this;
        _this.yearlyBonus = bonus;
        return _this;
    }
    manager.prototype.calculateAnnualIncome = function () {
        var annualIncome = this.monthlySalary * 12;
        var annualBonus = annualIncome * 2 * this.yearlyBonus / 100;
        return annualIncome + annualBonus;
    };
    manager.prototype.calculateAllowance = function () {
        return this.monthlySalary * 0.1;
    };
    return manager;
}(employees));
var Developer = new developer('Alice', 'Developer', 50000);
console.log("Name : ".concat(Developer.name, ", Role : ").concat(Developer.role, ", Salary : ").concat(Developer.monthlySalary));
console.log("Developer Annual Income : ".concat(Developer.calculateAnnualIncome()));
console.log("Developer Allowance : ".concat(Developer.calculateAllowance()));
var Manager = new manager('Bob', 'Manager', 80000, 10);
console.log("Name : ".concat(Manager.name, ", Role : ").concat(Manager.role, ", Salary : ").concat(Manager.monthlySalary));
console.log("Manager Annual Income : ".concat(Manager.calculateAnnualIncome()));
console.log("Manager Allowance : ".concat(Manager.calculateAllowance()));
var Intern = new developer('Charlie', 'Developer', 20000);
console.log("Name : ".concat(Intern.name, ", Role : ").concat(Intern.role, ", Salary : ").concat(Intern.monthlySalary));
console.log("Intern Annual Income : ".concat(Intern.calculateAnnualIncome()));
console.log("Intern Allowance : ".concat(Intern.calculateAllowance()));
