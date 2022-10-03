document.getElementById("mybtn").addEventListener("click", onclick);
function add(time) {
  var element = document.getElementById("new");
  var a = element.innerHTML;

  a = time;
  element.innerHTML = a;
}
function onclick() {
  var i = document.getElementById("box");

  add(i.value);
  if (i.value > 5 && i.value <= 12) {
    add("Good Morning");
  } else if (i.value > 12 && i.value <= 17) {
    add("Good Afternoon");
  } else if (i.value > 17 && i.value <= 21) {
    add("Good Evening");
  } else if (i.value > 21 && i.value <= 24) {
    add("Good Night");
  } else {
    add("Invalid Time");
  }
}
