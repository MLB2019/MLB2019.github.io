function myTime() {
  //create new instance of date function
  var today = new Date();

  //declare variables
  var hour = today.getHours();
  var min = today.getMinutes();
  var sec = today.getSeconds();
  min = checkTime(min);
  sec = checkTime(sec);

  //identifying the element to change on the web page
  document.getElementById('timePlace').innerHTML = hour + ":" + min + ":" + sec;
  var t = setTimeout(myTime, 500);
}
//function to check the time on the system
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
