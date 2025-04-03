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
]
abstract class departmentInfo {
    departmentName: string
    constructor(department: string) {
        this.departmentName = department
    }
    abstract findEmployee(name: string): any
    sortEmployee(direction: 'asc' | 'desc'): any {
        employeeList.map((item) => {
            if (this.departmentName === item['department']) {
                item['employees'].sort((firstStr, secondStr): any => {
                    if (direction === 'asc') {
                        let asc = firstStr.name.localeCompare(secondStr.name)
                        return asc
                    }
                    if (direction === 'desc') {
                        let desc = secondStr.name.localeCompare(firstStr.name)
                        return desc
                    }
                })
                console.log('Sorting :', item)
            }
        })
    }
}
class departInfo extends departmentInfo {
    findEmployee(name: string) {
        var filteredDep = employeeList.filter((item) => item.department === this.departmentName)
        filteredDep.map((item) => {
            var filteredEmpName = item['employees'].filter((emp) => emp.name === name)
            if (filteredEmpName.length !== 0) {
                console.log('Employee detail :', filteredEmpName)
            }
            else {
                console.log('No employee under this department')
            }
        })
    }
    constructor(departmentName: string) {
        super(departmentName)
    }
}
var finance = new departInfo('Finance')
finance.sortEmployee('desc')
var sales = new departInfo('Sales')
sales.sortEmployee('asc')
var hrEmpName = new departInfo('Human Resource')
var opreationsEmpName = new departInfo('Operations')
hrEmpName.findEmployee('Charlie')
opreationsEmpName.findEmployee('William')
finance.findEmployee('David')