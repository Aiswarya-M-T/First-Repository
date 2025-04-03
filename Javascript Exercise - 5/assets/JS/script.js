function findLargest() {
    var userInput = document.getElementById("userInput").value.trim().replace(/,+/g, ',');
    var input = userInput.replaceAll(/\s+/g, "").split(',');
    var firstNumber = parseInt(input[0]);
    var secondNumber = parseInt(input[1]);
    var letterRegex = /[a-zA-Z]/;
    var splCharRegex = /[^0-9,]/;
    var validate = document.getElementById("validate");
    validate.innerText = "";
    document.getElementById("result").innerText = "";
    if (!userInput.length) {
        validate.innerText = "Please enter a number";
    }
    else if (letterRegex.test(input)) {
        validate.innerText = "Letter(s) not allowed";
    }
    else if (splCharRegex.test(input)) {
        validate.innerText = "Special character(s) not allowed";
    }
    else if (input[0] == '' || input[input.length - 1] == '') {
        validate.innerText = "Invalid! Please enter a number properly!";
    }
    else if (input.length < 2) {
        validate.innerText = "Please enter more than one number";
    }
    else if (input.length > 2) {
        validate.innerText = "Please enter two numbers only";
    }
    else if (firstNumber === secondNumber) {
        validate.innerText = "Both numbers are same";
    }
    else {
        largest(firstNumber, secondNumber)
    }
}
function largest(firstNumber, secondNumber) {
    if (firstNumber > secondNumber) {
        var largestNumber = firstNumber;
    }
    else {
        largestNumber = secondNumber;
    }
    document.getElementById("result").innerText = "Largest number : " + largestNumber;
    validate.innerText = "";
}
function clearForm() {
    document.getElementById("validate").innerText = " ";
    document.getElementById("result").innerText = " ";
    document.getElementById("userInput").value = " ";
}