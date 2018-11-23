function my_clock() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = m >= 10 ? m : ('0' + m);
    s = s >= 10 ? s : ('0' + s);
    return h + ":" + m + ":" + s
}

var clock_div = document.getElementById('clock_div');
clock_div.innerHTML = my_clock();
setInterval(function () {
    clock_div.innerHTML = my_clock();
}, 1000);
