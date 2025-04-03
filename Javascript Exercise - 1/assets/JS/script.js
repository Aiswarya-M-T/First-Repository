function findLargeSmallStr() {
    var userInput = document.getElementById("userInput").value;
    var input = userInput.trim().replaceAll(/\s+/g, " ");
    var words = input.split(' ');
    var splCharRegex = /[^a-zA-Z\d\s]/;
    var numRegex = /\d/;
    var validate = document.getElementById("validate");
    validate.innerText = " ";
    document.getElementById("large").innerText = " ";
    document.getElementById("small").innerText = " ";
    var largestWord = words[0];
    var smallestWord = words[0];
    for (var i = 1; i < words.length; i++) {
        if (words[i].length > largestWord.length) {
            largestWord = words[i];
        }
        else if (words[i].length < smallestWord.length) {
            smallestWord = words[i];
        }
    }
    if (!input.length) {
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
    else if (words.length === 1) {
        validate.innerText = "Please enter a sentence more than one word";
        return false;
    }
    else if (largestWord.length === smallestWord.length) {
        validate.innerText = "All words are equal in length";
        return false;
    }
    document.getElementById("large").innerText = "Largest string : " + largestWord;
    document.getElementById("small").innerText = "Smallest string : " + smallestWord;
}
function clearForm() {
    document.getElementById("validate").innerText = " ";
    document.getElementById("large").innerText = " ";
    document.getElementById("small").innerText = " ";
}