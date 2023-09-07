const input = document.getElementById("input");
const button = document.getElementById("btn");
const list = document.getElementById("list-container");

function addtask() {
  if (input.value === "") {
    alert("write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    list.appendChild(li);

    let close = document.createElement("span");
    close.innerHTML = "\u00d7";
    li.appendChild(close);
  }
  input.value = "";
}
list.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      savaData();
    }
  },
  false
);
