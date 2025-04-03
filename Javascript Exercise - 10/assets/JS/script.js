function validateForm() {
    var firstName = document.getElementById("firstName").value.replace(/\s\s+/g, ' ').trim();
    var lastName = document.getElementById("lastName").value.replace(/\s\s+/g, ' ').trim();
    var email = document.getElementById("email").value.trim();
    var phoneNumber = document.getElementById("phone").value.trim();
    var number = parseInt(phoneNumber);
    var zipcode = document.getElementById("zipcode").value.trim();
    var zip = parseInt(zipcode);
    var address = document.getElementById("address").value;
    var splCharRegex = /[^a-zA-Z\d\s]/;
    var letterRegex = /[a-zA-Z]/;
    var numRegex = /\d/;
    var emailRegex = /^[a-zA-Z0-9.\s@]+@[a-zA-Z\s@]+\.[cominrg{2,3}\s@]+$/;
    var validate = document.getElementsByClassName("validate");
    validate[0].innerText = "";
    validate[1].innerText = "";
    validate[2].innerText = "";
    validate[3].innerText = "";
    validate[4].innerText = "";
    document.getElementById("result").innerText = "";
    if (!firstName.length && !lastName.length && !email.length && !phoneNumber.length && !zipcode.length) {
        validate[0].innerText = "Please enter your first name";
        validate[1].innerText = "Please enter your last name";
        validate[2].innerText = "Please enter your email id";
        validate[3].innerText = "Please enter your phone number";
        validate[4].innerText = "Please enter the zipcode";
    }
    else if (!firstName.length) {
        validate[0].innerText = "Please enter your first name";
    }
    else if (splCharRegex.test(firstName)) {
        validate[0].innerText = "Special character(s) not allowed for first name";
    }
    else if (numRegex.test(firstName)) {
        validate[0].innerText = "Number(s) not allowed for first name"
    }
    else if (!lastName.length) {
        validate[1].innerText = "Please enter your last name";
    }
    else if (splCharRegex.test(lastName)) {
        validate[1].innerText = "Special character(s) not allowed";
    }
    else if (numRegex.test(lastName)) {
        validate[1].innerText = "Number(s) not allowed for last name"
    }
    else if (!email.length) {
        validate[2].innerText = "Please enter your email id";
    }
    else if (!emailRegex.test(email)) {
        validate[2].innerText = "Enter proper mail id";
    }
    else if (!phoneNumber.length) {
        validate[3].innerText = "Please enter your phone number";
    }
    else if (splCharRegex.test(phoneNumber)) {
        validate[3].innerText = "Special Character(s) not allowed";
    }
    else if (letterRegex.test(phoneNumber)) {
        validate[3].innerText = "Letter(s) not allowed";
    }
    else if (number.toString().length != 10) {
        validate[3].innerText = "Please enter phone number properly";
    }
    else if (!zipcode.length) {
        validate[4].innerText = "Please enter the zipcode";
    }
    else if (zip.toString().length != 6) {
        validate[4].innerText = "Enter your zipcode correctly";
    }
    else if (splCharRegex.test(zipcode)) {
        validate[4].innerText = "Special Character(s) not allowed";
    }
    else if (letterRegex.test(zipcode)) {
        validate[4].innerText = "Letter(s) not allowed";
    }
    else {
        document.getElementById("result").innerText = "Form submitted successfully!";
        validate.innerText = "";
    }
}
function clearForm() {
    document.getElementById("validate").innerText = " ";
    document.getElementById("result").innerText = " ";
}