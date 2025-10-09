function sayHello() {
  alert("Hello from the external file!");
}

function sayGoodbye() {
  alert("Goodbye from the external file!");
}

let helloBtn = document.getElementById("helloBtn");
helloBtn.addEventListener("click", sayHello);

let goodbyeBtn = document.getElementById("goodbyeBtn");
goodbyeBtn.addEventListener("click", sayGoodbye);