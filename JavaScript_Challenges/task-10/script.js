function greetUser() {
  let name = document.getElementById("nameInput").value.trim();
  let color = document.getElementById("colorInput").value.trim();

  if (name === "" || color === "") {
    alert("Please enter both your name and your favorite color!");
  } else {
    alert("Hello, " + name + "! Your favorite color is " + color + ".");
  }
}

document.getElementById("greetBtn").addEventListener("click", greetUser);
