document.getElementById("mybtn").addEventListener("click", onclick);
function add(color) {
  var element = document.getElementById("new");
  var a = element.innerHTML;
  a = "<li>" + color + "</li>" + a;
  element.innerHTML = a;
}
function onclick() {
  var i = document.getElementById("box");
  console.log(i);
  switch (i.value) {
    case "1":
      add("your choice is Yellow");
      break;

    case "2":
      add("Your Choice Is Blue");
      break;

    case "3":
      add("Your Choice Is Red");
      break;

    case "4":
      add("Your Choice Is Pink");
      break;

    case "5":
      add("Your Choice Is Purpel");
      break;
  }
}
