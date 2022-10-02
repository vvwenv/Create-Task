import "./style.css";
import { meals } from "./recipes";
// const rdn = meals[Math.floor(Math.random() * meals.length)];
// console.log(rdn(meals.name));
function main() {
  let elements = document.getElementsByClassName("genBtn");
  Array.from(elements).forEach(function (element) {
    element.addEventListener("click", function () {
      const rdn = Math.floor(Math.random() * meals.length);
      document.querySelector(".meal").innerHTML = "";
      console.log(meals[rdn].name);
      display();
    });
  });
}
main();
function display() {
  const rdn = Math.floor(Math.random() * meals.length);
  document.querySelector(".meal").insertAdjacentHTML(
    "afterbegin",
    `
      <h2 class="name">${meals[rdn].name}</h2>
      
      <p class="ingredients">${meals[rdn].ingredients}</p>
      <p class="instructions">${meals[rdn].instructions}</p>`
  );
}
// console.log(rdn.type);
// console.log(rdn.ingredients);
// console.log(rdn.instructions);

// let name = document.querySelector(".name");
// let img = document.querySelector("img");
// let ingredients = document.querySelector(".ingredients");
// let instructions = document.querySelector(".instructions");
// function main() {
//   let generator = document.getElementById("#mainBtn");
//   Array.from(generator).forEach(function (generator) {
//     generator.addEventListener("click", function () {
//       const rdn = Math.floor(Math.random() * meals.length);
//       console.log(meals[rdn]);
//     });
//   });
// }
// main();
// function display() {
//   name.insertAdjacentHTML(
//     "afterbegin",
//     `
//       <h2 class="name">${meals.name[rdn]}</h2>
//       <p class="ingredients">${meals.ingredients[rdn]}</p>`
//   );
// }
