
function displayCurrentTime(){
  var date = new Date();
  var hrs = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
  var mins = date.getMinutes();
  var secs = date.getSeconds();
  var am_pm = hours >= 12 ? 'AM' : 'PM';

  document.getElementById('hours').innerHTML = hrs;
  document.getElementById('minutes').innerHTML = mins;
  document.getElementById('seconds').innerHTML = secs;
  document.getElementById('am_pm').innerHTML = am_pm;
}

setInterval(displayCurrentTime, 10);