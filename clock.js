setInterval(digitalTime, 1000);

var clock = new Date();
var hour = clock.getHours();
var minutes = clock.getMinutes();

function digitalTime() {

   

    var currentHour = hour.toLocaleString('en-US', {hour: 'numeric'});
    var formatHour = currentHour % 12 + " " + ":";
    var currentMinutes = minutes;

    if(currentMinutes !== currentMinutes) {
        currentMinutes++;
    }

    document.getElementById("hour").innerHTML = formatHour;
    document.getElementById("min").innerHTML =currentMinutes;
}
