import "./style.css";
import { meals } from "./recipes";

var rdn = meals[Math.floor(Math.random() * meals.length)];
console.log(rdn.name);
console.log(rdn.type);
console.log(rdn.ingredients);
console.log(rdn.instructions);

let name = document.querySelector(".name");
let img = document.querySelector("img");
let ingredients = document.querySelector(".ingredients");
let instructions = document.querySelector(".instructions");
function display() {
  name.insertAdjacentHTML(
    "afterbegin",
    `
      <h2 class="name">${meals.name[rdn]}</h2>
      <p class="ingredients">${define.kDefinition}</p>`
  );
}
