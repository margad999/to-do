const todos = ["workout", "do homework", "eat some food", "drive something"];

todos.push("reach the challenger on faceit");
const input = document.getElementById("input");
const container = document.getElementById("container1");

const addtodo = () => {
  todos.push(input.value);
  console.log(todos);
  rendertodo();
};
const rendertodo = () => {
  container.textContent = "";
  for (let i = 0; i < todos.length; i++) {
    const newdiv = document.createElement("div");
    newdiv.textContent = todos[i];
    newdiv.classList.add("box");
    container.appendChild(newdiv);
  }
};
