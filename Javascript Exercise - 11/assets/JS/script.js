function currentUrl(){
    var currentURL = document.URL;
    document.getElementById("result").innerHTML = currentURL;
}
function clearForm(){
    document.getElementById("result").innerText = " ";
}