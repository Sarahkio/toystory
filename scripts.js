var comment = document.getElementById("commentid");
var button = document.getElementById("buttonid");
var rate = document.getElementById("rateid");

button.addEventListener("click", function (event) {
  comment = document.getElementById("commentid").value;
  rate.textContent = "You said that it was " + comment + "!";
});
