// Method Overloading
var checkValues = /** @class */ (function () {
    function checkValues() {
    }
    checkValues.prototype.findBasedOnType = function (firstValue, secondValue) {
        if (typeof firstValue === 'number' && typeof secondValue === 'number') {
            return firstValue * secondValue;
        }
        else if (typeof firstValue === 'string' && typeof secondValue === 'string') {
            return firstValue + secondValue;
        }
        else if (Array.isArray(firstValue)) {
            var sum = firstValue.reduce(function (acc, curr) { return acc + curr; });
            return sum;
        }
    };
    return checkValues;
}());
var check = new checkValues();
console.log("Multiply Numbers : ".concat(check.findBasedOnType(3, 2)));
console.log("String Concatenation : ".concat(check.findBasedOnType('Hello ', 'World')));
console.log("Sum of Array : ".concat(check.findBasedOnType([1, 2, 3, 4]), " "));
