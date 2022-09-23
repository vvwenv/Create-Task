import "./style.css";
import { breakfast, lunch, dinner } from "./recipes";

var rdnB = breakfast[Math.floor(Math.random() * breakfast.length)];
var rdnL = lunch[Math.floor(Math.random() * lunch.length)];
var rdnD = dinner[Math.floor(Math.random() * dinner.length)];
// console.log(rdn.name);
// console.log(rdn.type);
// console.log(rdn.ingredients);
// console.log(rdn.instructions);

document.getElementById("mainBtn").addEventListener("click", test);

function test() {
  console.log(rdnB);
  console.log(rdnL);
  console.log(rdnD);
}

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
