var min = (firstNum, secondNum) => {
    let mininum = Math.min(firstNum, secondNum);
    return mininum;
}

var max = (firstValue, secondValue) => {
    let maximum = Math.max(firstValue, secondValue);
    return maximum;
}

var floorNumber = (number) => {
    let floor = Math.floor(number);
    return floor;
}

export { min, max, floorNumber };