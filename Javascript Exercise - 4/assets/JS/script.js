function checkReverse() {
    var userInput = document.getElementById("userInput").value;
    var input = userInput.trim();
    var splCharRegex = /[^a-zA-Z\d\s]/;
    var validate = document.getElementById("validate");
    validate.innerText = "";
    document.getElementById("result").innerText = "";
    if (input.length === 0) {
        validate.innerText = "Please enter a sentence";
        return false;
    }
    else if (splCharRegex.test(input)) {
        validate.innerText = "Special character(s) not allowed";
        return false;
    }
    else if (input.length < 2) {
        validate.innerText = "Please enter more than one character";
        return false;
    }
    var reversed = "";
    for (var i = input.length - 1; i >= 0; i--) {
        reversed += input[i];
    }
    document.getElementById("result").innerText = "Reversed string :" + reversed;
}
function clearForm() {
    document.getElementById("validate").innerText = " ";
    document.getElementById("result").innerText = " ";

}