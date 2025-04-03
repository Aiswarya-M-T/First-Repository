function emailFormat() {
    var userName = document.getElementById("userName").value.replace(/\s\s+/g, ' ').trim();
    var recordId = document.getElementById("recordId").value.replace(/\s\s+/g, ' ').trim();
    var senderMail = document.getElementById("sender").value.replace(/\s\s+/g, ' ').trim();
    var receiverMail = document.getElementById("receiver").value.replace(/\s\s+/g, ' ').trim();
    var ccMail = document.getElementById("ccMail").value.replace(/\s\s+/g, ' ').trim();
    var comments = document.getElementById("comments").value.replace(/\s\s+/g, ' ').trim();
    var changedStatus = document.getElementById("checkBox").checked;
    var splCharRegex = /[^a-zA-Z\d\s]/;
    var numRegex = /[^0-9]/;
    var emailRegex = /^[a-zA-Z0-9.\s@]+@[gmail\s@]+\.[com\s@]+$/;
    var form = document.getElementById("form");
    var format = document.getElementById("format");
    document.getElementById("result").innerHTML = "";
    var validate = document.getElementsByClassName("validate");
    var check = true;
    validate[0].innerText = "";
    validate[1].innerText = "";
    validate[2].innerText = "";
    validate[3].innerText = "";
    validate[4].innerText = "";
    validate[5].innerText = "";
    if (!userName.length) {
        validate[0].innerText = "Please enter the name";
        check = false;
    }
    else if (splCharRegex.test(userName)) {
        validate[0].innerText = "Special character(s) not allowed for name";
        check = false;
    }
    if (!recordId.length) {
        validate[1].innerText = "Please enter the record id";
        check = false;
    }
    else if (numRegex.test(recordId)) {
        validate[1].innerText = "Number(s) only allowed for record id";
        check = false;
    }
    if (!senderMail.length) {
        validate[2].innerText = "Please enter the sender mail id";
        check = false;
    }
    else if (!emailRegex.test(senderMail)) {
        validate[2].innerText = "Please enter valid sender mail id";
        check = false;
    }
    if (!receiverMail.length) {
        validate[3].innerText = "Please enter the receiver mail id";
        check = false;
    }
    else if (!emailRegex.test(receiverMail)) {
        validate[3].innerText = "Please enter valid receiver mail id";
        check = false;
    }
    if (!ccMail.length) {
        validate[4].innerText = "Please enter the cc mail id";
        check = false;
    }
    else if (!emailRegex.test(ccMail)) {
        validate[4].innerText = "Please enter valid cc mail id";
        check = false;
    }
    if (!comments.length) {
        validate[5].innerText = "Please enter the comments";
        check = false;
    }
    if (check) {
        form.style.display = 'none';
        format.style.display = 'block';
        document.getElementById("result").innerHTML =
            `<p>This is an automatically generated notification to inform you about the following:</p>
        <p>Greetings</p>
        <p>User <b>"${userName}"</b> changed status of "<b>${recordId}</b>" to "<b>${changedStatus}</b>" with below comments</p>
        <p>From : <b>"${senderMail}"</b></p>
        <p>To : <b>"${receiverMail}"</b></p>
        <p>CC : <b>"${ccMail}"</b></p>
        <p>Comments : <b>"${comments}"</b></p>
        <div>Best Regards,</div>
        <div>Mitrah soft</div>`
        validate.innerText = "";
    }
}
function showForm() {
    form.style.display = 'block';
    format.style.display = 'none';
}
function clearForm() {
    document.getElementsByClassName("validate").innerText = "";
}