function countryCode() {
    var selectElement = document.getElementById('country');
    const country = {
        "IE": "Ireland",
        "IM": "Isle of Man",
        "IL": "Israel",
        "IT": "Italy",
        "JM": "Jamaica",
        "JP": "Japan",
        "JE": "Jersey",
        "JO": "Jordan",
        "KZ": "Kazakhstan"
    }
    var result = selectElement.options[selectElement.selectedIndex].value;
    if (result == '') {
        document.getElementById("result").innerHTML = "";
    }
    else {
        document.getElementById('result').innerHTML = `Country Name : ${country[result]}`;
    }
}
