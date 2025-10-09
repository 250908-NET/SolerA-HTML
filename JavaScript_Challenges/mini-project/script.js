let input = document.getElementById("taskInput");
let button = document.getElementById("addTask");
let list = document.getElementById("taskList");

button.addEventListener("click", function() {
  let taskText = input.value.trim();
  if (taskText === "") return;

  let li = document.createElement("li");
  let span = document.createElement("span");
  li.textContent = taskText;

  let delBtn = document.createElement("button");
  delBtn.textContent = "X";

  li.addEventListener("click", function() {
    li.classList.toggle("done");
  });

  delBtn.addEventListener("click", function() {
    li.remove();
  });

  li.appendChild(delBtn)
  list.appendChild(li);
  input.value = "";
});