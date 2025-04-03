function removeElement() {
    var userInput = document.getElementById("userInput").value.trim().replaceAll(/\s+/g, "");
    var input = userInput.replace(/[, ]+/g, ",").split(',');
    var position = document.getElementById("position").value.trim().replace(/[, ]+/g, ",").replaceAll(/\s+/g, "");
    var index = parseInt(position);
    var splCharRegex = /[^a-zA-Z0-9,\d\s]/;
    var positionSplCharRegex = /[^a-zA-Z0-9-\d\s]/;
    var validate = document.getElementById("validate");
    validate.innerText = "";
    document.getElementById("list").innerText = "";
    document.getElementById("result").innerText = "";
    if (!userInput.length) {
        validate.innerHTML = "Please enter a sentence";
        return false;
    }
    else if (splCharRegex.test(input)) {
        validate.innerText = "Special Character(s) not allowed";
        return false;
    }
    else if(input.length < 2){
        validate.innerText = "Please enter more than one word";
        return false;
    }
    else if (input[0] == '' || input[input.length - 1] == '') {
        validate.innerText = "Invalid! Please enter a sentence properly for user input!";
        return false;
    }
    else if (!position.length) {
        validate.innerText = "Please enter a position value";
        return false;
    }
    else if (positionSplCharRegex.test(position)) {
        validate.innerText = "Special Character(s) not allowed for position field";
        return false;
    }
    else if (/[^0-9,-]/.test(index)) {
        validate.innerText = "Numbers only allowed for position field"
        return false;
    }
    else if (index <= 0) {
        validate.innerText = "Positive numbers only allowed for position field";
        return false;
    }
    else if (index > input.length) {
        validate.innerText = "Enter position between 1 to " + input.length;
        return false;
    }
    else {
        var removedElement = input.splice(index-1,1);
        document.getElementById("result").innerText = "Successfully remove the " + '"' + removedElement + '"' + " element from " + index + " index value !";
        document.getElementById("list").innerText = "Updated List : " + input;
        validate.innerText = "";
    }
}
function clearForm() {
    document.getElementById("validate").innerText = " ";
    document.getElementById("result").innerText = " ";
}