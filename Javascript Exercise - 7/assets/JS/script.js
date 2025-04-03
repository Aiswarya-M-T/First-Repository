function validation(check) {
    var userInput = document.getElementById("userInput").value;
    var correctedInput = userInput.trim().replace(/,+/g, ',');
    var input = correctedInput.replaceAll(/\s+/g, "").split(',');
    var validate = document.getElementById("validate");
    var splCharRegex = /[^0-9,]/;
    var letterRegex = /[a-zA-Z]/;
    validate.innerText = "";
    document.getElementById("result").value = "";
    if (!userInput.length) {
        validate.innerText = "Please enter a number";
        return false;
    }
    else if (letterRegex.test(input)) {
        validate.innerText = "Letter(s) not allowed";
        return false;
    }
    else if (splCharRegex.test(input)) {
        validate.innerText = "Special character(s) not allowed";
        return false;
    }
    else if (input.length < 2) {
        validate.innerText = "Please enter more than one number";
        return false;
    }
    else if (input[0] == '' || input[input.length - 1] == '') {
        validate.innerText = "Invalid! Please enter a number properly!";
        return false;
    }
    else {
        var array = input.map(Number);
        var sum = 0;
        var multiply = 1;
        for (var i = 0; i < array.length; i++) {
            switch (check) {
                case 'add':
                    sum += array[i];
                    document.getElementById("result").value = sum;
                    document.getElementById("result-label").innerText = "Result of sum";
                    validate.innerText = "";
                    break;
                case 'multiply':
                    multiply *= array[i];
                    document.getElementById("result").value = multiply;
                    document.getElementById("result-label").innerText = "Result of multiplication";
                    validate.innerText = "";
                    break;
                default:
            }
        }
    }
}
function clearForm() {
    document.getElementById("validate").innerText = " ";
    document.getElementById("result").value = " ";
    document.getElementById("userInput").value = "";
    document.getElementById("result-label").innerText = "Result";
}