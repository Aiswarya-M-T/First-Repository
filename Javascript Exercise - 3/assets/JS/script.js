function checkChar() {
    var userInput = document.getElementById("userInput").value;
    var input = userInput.trim().replaceAll(/\s+/g, " ");
    var splCharRegex = /[^a-zA-Z\d\s]/;
    var numRegex = /\d/;
    var validate = document.getElementById("validate");
    validate.innerText = " ";
    document.getElementById("result").innerText = " ";
    if (input.length === 0) {
        validate.innerText = "Please enter a sentence";
        return false;
    }
    else if (splCharRegex.test(input)) {
        validate.innerText = "Special character(s) not allowed";
        return false;
    }
    else if (numRegex.test(input)) {
        validate.innerText = "Number(s) not allowed";
        return false;
    }
    else if (input.length < 2) {
        validate.innerText = "Please enter more than one character";
        return false;
    }
    var firstChar = input[0];
    var lastChar = input[input.length - 1];
    if (firstChar === lastChar) {
        document.getElementById("result").innerText = "First and Last characters are same !";
        validate.innerText = "";
    }
    else {
        validate.innerText = "First and Last characters are not same";
        document.getElementById("result").innerText = "";
    }
}
function clearForm() {
    document.getElementById("validate").innerText = " ";
    document.getElementById("result").innerText = " ";
}