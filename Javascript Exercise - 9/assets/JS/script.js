function dateTime() {
    var obj = new Date();
    var year = obj.getFullYear();
    var month = obj.getMonth()+1;
    var date = obj.getDate();
    var hour = obj.getHours();
    var minute = obj.getMinutes();
    var seconds = obj.getSeconds();
    var millisec = obj.getMilliseconds();
    var localDateTime = obj.toLocaleString();
    var utc = obj.toUTCString();
    var utcMillisec = obj.getUTCMilliseconds();
    document.getElementById("year").value = year;
    document.getElementById("month").value = month;
    document.getElementById("date").value = date;
    document.getElementById("hour").value = hour;
    document.getElementById("minute").value = minute;
    document.getElementById("seconds").value = seconds;
    document.getElementById("millisec").value = millisec;
    document.getElementById("localDateTime").value = localDateTime;
    document.getElementById("utc").value = utc;
    document.getElementById("utcMillisec").value = utcMillisec;
}
function clearDateTime() {
    document.getElementById("year").value = "";
    document.getElementById("month").value = "";
    document.getElementById("date").value = "";
    document.getElementById("hour").value = "";
    document.getElementById("minute").value = "";
    document.getElementById("seconds").value = "";
    document.getElementById("millisec").value = "";
    document.getElementById("localDateTime").value = "";
    document.getElementById("utc").value = "";
    document.getElementById("utcMillisec").value = "";
}