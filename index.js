function clock()
{
    var hours = document.getElementById('hour');
    var mins = document.getElementById('min');
    var secs = document.getElementById('sec');
    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();

    hours.innerHTML = h;
    mins.innerHTML = m;
    secs.innerHTML = s;
}
var interval = setInterval(clock,1000);
