function radioButton(selectedColor) {
    var colorSelection = {
        red: false,
        green: false,
        blue: false
    };
    colorSelection[selectedColor] = true;
    document.getElementById("result").innerHTML = JSON.stringify(colorSelection);
}