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
var employeeList = [
    {
        "department": "Marketing",
        "employees": [
            { "name": "James", "age": 20, "email": "James@yopmail.com" },
            { "name": "Jack", "age": 23, "email": "Jack@yopmail.com" },
            { "name": "George", "age": 54, "email": "George@yopmail.com" },
            { "name": "Thomas", "age": 45, "email": "Thomas@yopmail.com" }
        ]
    },
    {
        "department": "Sales",
        "employees": [
            { "name": "John", "age": 45, "email": "John@yopmail.com" },
            { "name": "Daniel", "age": 10, "email": "Daniel@yopmail.com" },
            { "name": "David", "age": 12, "email": "David@yopmail.com" },
            { "name": "Oscar", "age": 15, "email": "Oscar@yopmail.com" }
        ]
    },
    {
        "department": "Finance",
        "employees": [
            { "name": "Michael", "age": 21, "email": "Michael@yopmail.com" },
            { "name": "Noah", "age": 22, "email": "Noah@yopmail.com" },
            { "name": "Robert", "age": 25, "email": "Robert@yopmail.com" },
            { "name": "Liam", "age": 23, "email": "Liam@yopmail.com" }
        ]
    },
    {
        "department": "Human Resource",
        "employees": [
            { "name": "Richard", "age": 22, "email": "Richard@yopmail.com" },
            { "name": "Martin", "age": 21, "email": "Martin@yopmail.com" },
            { "name": "Charlie", "age": 23, "email": "Charlie@yopmail.com" },
            { "name": "Jake", "age": 22, "email": "Jake@yopmail.com" }
        ]
    },
    {
        "department": "Operations",
        "employees": [
            { "name": "Henry", "age": 25, "email": "Henry@yopmail.com" },
            { "name": "Jack", "age": 40, "email": "Jack@yopmail.com" },
            { "name": "William", "age": 16, "email": "William@yopmail.com" },
            { "name": "Alexander", "age": 28, "email": "Alexander@yopmail.com" }
        ]
    }
];
var departmentInfo = /** @class */ (function () {
    function departmentInfo(department) {
        this.departmentName = department;
    }
    departmentInfo.prototype.sortEmployee = function (direction) {
        var _this = this;
        employeeList.map(function (item) {
            if (_this.departmentName === item['department']) {
                item['employees'].sort(function (firstStr, secondStr) {
                    if (direction === 'asc') {
                        var asc = firstStr.name.localeCompare(secondStr.name);
                        return asc;
                    }
                    if (direction === 'desc') {
                        var desc = secondStr.name.localeCompare(firstStr.name);
                        return desc;
                    }
                });
                console.log('Sorting :', item);
            }
        });
    };
    return departmentInfo;
}());
var departInfo = /** @class */ (function (_super) {
    __extends(departInfo, _super);
    function departInfo(departmentName) {
        return _super.call(this, departmentName) || this;
    }
    departInfo.prototype.findEmployee = function (name) {
        var _this = this;
        var filteredDep = employeeList.filter(function (item) { return item.department === _this.departmentName; });
        filteredDep.map(function (item) {
            var filteredEmpName = item['employees'].filter(function (emp) { return emp.name === name; });
            if (filteredEmpName.length !== 0) {
                console.log('Employee detail :', filteredEmpName);
            }
            else {
                console.log('No employee under this department');
            }
        });
    };
    return departInfo;
}(departmentInfo));
var finance = new departInfo('Finance');
finance.sortEmployee('desc');
var sales = new departInfo('Sales');
sales.sortEmployee('asc');
var hrEmpName = new departInfo('Human Resource');
var opreationsEmpName = new departInfo('Operations');
hrEmpName.findEmployee('Charlie');
opreationsEmpName.findEmployee('William');
finance.findEmployee('David');
