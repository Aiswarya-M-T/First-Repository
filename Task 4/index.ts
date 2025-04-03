class user {
    private name: string
    private email: string
    private age?: number
    private address?: string
    private city?: string
    private state?: string
    private contactNumber?: number
    public role?: string
    static age: number
    constructor(name: string, email: string) {
        this.name = name
        this.email = email
    }
    get userAge(): number | undefined {
        return this.age
    }
    set userAge(age: number) {
        this.age = age
    }
    check(role: string) {
        if (role === 'student' && student.age >= 5) {
            this.userAge = student.age
        }
        else if (role === 'teacher' && teacher.age > 20) {
            this.userAge = teacher.age
        }
        else {
            console.error('Student age should equal to 5 or above & Teacher age should above 20');
        }
    }
}
class student extends user {
    private studClass: string
    private rank: number
    constructor(name: string, email: string, studClass: string, rank: number) {
        super(name, email)
        this.studClass = studClass
        this.rank = rank
    }
}
class teacher extends user {
    private subject: string
    private classesHandleByTeacher: string
    private yearsOfExperience: number
    constructor(name: string, email: string, subject: string, classesHandleByTeacher: string, yearsOfExperience: number) {
        super(name, email)
        this.subject = subject
        this.classesHandleByTeacher = classesHandleByTeacher
        this.yearsOfExperience = yearsOfExperience
    }
}
var Student = new student('Aiswarya', 'aiswarya@gmail.com', '5th', 1)
var Teacher = new teacher('Joshpine', 'joshpine@gmail.com', 'Science', '5th, 6th', 3)
student.age = 6
teacher.age = 19
Student.check('student')
Teacher.check('teacher')
console.log(Student)
console.log(Teacher)