//length
var arr = [1, 2, 3, 4, 5];
function getLength(data = []) {
    console.log('length', data.length);
}
getLength()

//slice
function getString(str = '', position) {
    console.log('new string:', str.slice(0, position));
}
getString()