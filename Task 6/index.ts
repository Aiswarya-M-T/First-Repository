//Method Overriding
abstract class employees {
    name: string
    role: string
    monthlySalary: number
    constructor(name: string, role: string, salary: number) {
        this.name = name,
            this.role = role,
            this.monthlySalary = salary
    }
    abstract calculateAnnualIncome(monthlySalary: number): number
    calculateAllowance(): number {
        return this.monthlySalary * 0.05
    }
}
class developer extends employees {
    calculateAnnualIncome(): number {
        return this.monthlySalary * 12
    }
    constructor(name: string, role: string, monthlySalary: number) {
        super(name, role, monthlySalary)
    }
}
class manager extends employees {
    calculateAnnualIncome(): number {
        const annualIncome = this.monthlySalary * 12
        const annualBonus = annualIncome * 2 * this.yearlyBonus / 100
        return annualIncome + annualBonus
    }
    calculateAllowance(): number {
        return this.monthlySalary * 0.1
    }
    yearlyBonus: number
    constructor(name: string, role: string, monthlySalary: number, bonus: number) {
        super(name, role, monthlySalary)
        this.yearlyBonus = bonus
    }
}
var Developer = new developer('Alice', 'Developer', 50000)
console.log(`Name : ${Developer.name}, Role : ${Developer.role}, Salary : ${Developer.monthlySalary}`)
console.log(`Developer Annual Income : ${Developer.calculateAnnualIncome()}`)
console.log(`Developer Allowance : ${Developer.calculateAllowance()}`)
var Manager = new manager('Bob', 'Manager', 80000, 10)
console.log(`Name : ${Manager.name}, Role : ${Manager.role}, Salary : ${Manager.monthlySalary}`)
console.log(`Manager Annual Income : ${Manager.calculateAnnualIncome()}`)
console.log(`Manager Allowance : ${Manager.calculateAllowance()}`)
var Intern = new developer('Charlie', 'Developer', 20000)
console.log(`Name : ${Intern.name}, Role : ${Intern.role}, Salary : ${Intern.monthlySalary}`)
console.log(`Intern Annual Income : ${Intern.calculateAnnualIncome()}`)
console.log(`Intern Allowance : ${Intern.calculateAllowance()}`)