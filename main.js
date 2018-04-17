$(document).ready(function() {

  // Get current time and set current color
  const getTimeAndColor = function() {
    let currentTime = new Date();

    let currentHours = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();
    let timeOfDay = (currentHours < 12) ? 'AM' : 'PM';

    currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;
    currentHours = (currentHours < 10) ? '0' + currentHours : currentHours;
    currentHours = (currentHours === 0) ? 12 : currentHours;
    currentMinutes = (currentMinutes < 10) ? '0' + currentMinutes : currentMinutes;
    currentSeconds = (currentSeconds < 10) ? '0' + currentSeconds : currentSeconds;

    let presentTime = `${currentHours}:${currentMinutes}:${currentSeconds} ${timeOfDay}`;
    let presentColor = getColor(currentHours, currentMinutes, currentSeconds);

    document.body.style.backgroundColor = presentColor;
    $('#current-color').text(presentColor);
    $('#clock').text(presentTime);

    setInterval(getTimeAndColor, 1000);
  }

  // Track current color to current time & convert RGB to Hex
  const getColor = function(hour, min, sec) {
    let red = Math.round(255 * (hour/24)).toString(16);
    let green = Math.round(255 * (min/60)).toString(16);
    let blue = Math.round(255 * (sec/60)).toString(16);

    // Ensure RGB always has two digits
    red = (red.length < 2) ? '0' + red : red;
    green = (green.length < 2) ? '0' + green : green;
    blue = (blue.length < 2) ? '0' + blue : blue;

    return `#${red}${green}${blue}`.toUpperCase();
  };

  getTimeAndColor();

});