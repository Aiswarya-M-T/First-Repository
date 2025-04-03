function arrayCreation() {
    var userInput = document.getElementById("userInput").value.trim().replaceAll(/\s+/g, "");
    var input = userInput.replace(/[, ]+/g, ",").split(',');
    var position = document.getElementById("position").value.trim().replaceAll(/\s+/g, "");
    var sampleIndex = parseInt(position);
    var element = document.getElementById("element").value.trim().replaceAll(/\s+/g, "");
    var splCharRegex = /[^0-9,a-zA-Z]/;
    var positionSplCharRegex = /[^a-zA-Z0-9-\d\s]/;
    var elementSplCharRegex = /[^0-9a-zA-Z]/;
    var array = input;
    var index = sampleIndex;
    var value = element;
    var validate = document.getElementById("validate");
    validate.innerText = "";
    document.getElementById("result").innerText = " ";
    if (!userInput.length) {
        validate.innerText = "Please enter a sentence";
    }
    else if (splCharRegex.test(input)) {
        validate.innerText = "Special Character(s) not allowed for user input";
    }
    else if (input.length < 2) {
        validate.innerText = "Please enter more than one string";
    }
    else if (input[0] == '' || input[input.length - 1] == '') {
        validate.innerText = "Invalid! Please enter a sentence properly for user input!";
    }
    else if (!position.length) {
        validate.innerText = "Please enter a position value";
    }
    else if (positionSplCharRegex.test(position)) {
        validate.innerText = "Special Character(s) not allowed for position field";
    }
    else if (/[a-zA-Z]/.test(position)) {
        validate.innerText = "Letter(s) not allowed for position field";
    }
    else if (/[^0-9-]/.test(position)) {
        validate.innerText = "Numbers only allowed for position field"
    }
    else if (sampleIndex < 0) {
        validate.innerText = "Positive numbers only allowed for position field";
    }
    else if (sampleIndex > input.length || sampleIndex == 0) {
        validate.innerText = "Enter position between 1 to " + input.length;
    }
    else if (!element.length) {
        validate.innerText = "Please enter a element";
    }
    else if (elementSplCharRegex.test(element)) {
        validate.innerText = "Special Character(s) not allowed for element field";
    }
    else {
        array[index - 1] = value;
        document.getElementById("result").innerText = "Updated Array : " + array;
        validate.innerText = "";
    }
}
function clearForm() {
    document.getElementById("validate").innerText = "";
    document.getElementById("result").innerText = "";
    document.getElementById("userInput").value = "";
    document.getElementById("position").value = "";
    document.getElementById("element").value = "";
}