var message = ["Camp", "Thailand", "Summer", "Camp"];
var text = "";
var i;
for (i = 0; i < message.length; i++) {
  text += message[i] + "<br>";
}
document.getElementById("campMessage").innerHTML = text;
