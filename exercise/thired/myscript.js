function my_clock() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = m >= 10 ? m : ('0' + m);
    s = s >= 10 ? s : ('0' + s);
    return h + ":" + m + ":" + s
}
let btn = document.getElementsByName('btnK')[0]
btn.value = my_clock()
setInterval(function () {
    btn.value = my_clock()
}, 1000);


function clickEvent() {
    alert('你搜不到的')
    return
}
btn.onclick = clickEvent
