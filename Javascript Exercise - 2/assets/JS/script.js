function checkVowels() {
    var userInput = document.getElementById("userInput").value;
    var word = userInput.trim().replaceAll(/\s+/g, " ");
    var splCharRegex = /[^a-zA-Z\d\s]/;
    var numRegex = /\d/;
    var validate = document.getElementById("validate");
    validate.innerText = " ";
    document.getElementById("result").innerText = " ";
    if (!word.length) {
        validate.innerText = "Please enter a sentence";
        return false;
    }
    else if (splCharRegex.test(word)) {
        validate.innerText = "Special character(s) not allowed";
        return false;
    }
    else if (numRegex.test(word)) {
        validate.innerText = "Number(s) not allowed";
        return false;
    }
    else if (word.split(/\s+/).length > 1) {
        validate.innerText = "Please enter only one word";
        return false;
    }
    var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    var result = [];
    var outcome = [];
    for (var i = 0; i < word.length; i++) {
        var output = word[i];
        if (vowels.includes(output) && !result.includes(output)) {
            outcome = result.push(output);
            document.getElementById("result").innerText = "Vowels : " + result.join(',');
            validate.innerText = " ";
        }
        else if (result.length === 0) {
            validate.innerText = "Vowel is not found";
            document.getElementById("result").innerText = " ";
        }
    }
}
function clearForm() {
    document.getElementById("validate").innerText = " ";
    document.getElementById("result").innerText = " ";
}