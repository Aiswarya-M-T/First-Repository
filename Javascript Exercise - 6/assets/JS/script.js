function checkBox(box) {
    var input = document.querySelectorAll('.check');
    for (var i = 0; i < input.length; i++) {
        switch (box) {
            case 'checkAll':
                input[i].checked = true;
                break;
            case 'uncheckAll':
                input[i].checked = false;
                break;
            case 'unselect':
                input[i].checked = !input[i].checked;
                break;
            default:
        }
    }
}
