// Method Overloading
class checkValues {
    findBasedOnType(firstValue: number, secondValue: number): number;
    findBasedOnType(firstValue: string, secondValue: string): string;
    findBasedOnType(firstValue: number[]): number
    findBasedOnType(firstValue: any, secondValue?: any) {
        if (typeof firstValue === 'number' && typeof secondValue === 'number') {
            return firstValue * secondValue
        }
        else if (typeof firstValue === 'string' && typeof secondValue === 'string') {
            return firstValue + secondValue
        }
        else if (Array.isArray(firstValue)) {
            var sum = firstValue.reduce((acc, curr) => acc + curr)
            return sum
        }
    }
}
var check = new checkValues()
console.log(`Multiply Numbers : ${check.findBasedOnType(3, 2)}`)
console.log(`String Concatenation : ${check.findBasedOnType('Hello ', 'World')}`)
console.log(`Sum of Array : ${check.findBasedOnType([1, 2, 3, 4])} `)