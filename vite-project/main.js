import "./style.css";
import { meals } from "./recipes";
const rdn = Math.floor(Math.random() * meals.length);
// const rdn = meals[Math.floor(Math.random() * meals.length)];
// console.log(rdn(meals.name));
function main() {
  let elements = document.getElementsByClassName("genBtn");
  Array.from(elements).forEach(function (element) {
    element.addEventListener("click", function () {
      document.querySelector(".meal").innerHTML = "";
      // console.log(meals[rdn].name);
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
      <img class="img" src="${meals[rdn].url}" alt=""/>
      <div class="text">
      <h2 class="need">You need</h2>
      <p class="ingredients">${meals[rdn].ingredients}</p>
      <p class="instructions">${meals[rdn].instructions}</p></div>
      <button class="addfav">Add to Favorite</button>`
  );
  document.getElementsByClassName("favBtn")[0].onclick = function () {
    toggle();
  };
  document.getElementsByClassName("addfav")[0].onclick = function () {
    test();
    //   add();
    // };
  };
}
function toggle() {
  document.getElementsByClassName("fav")[0].classList.toggle("show");
  document.querySelector(".favIcon").classList.toggle("favIcon--active");
}
function test() {
  if (meals[rdn].fav == false) {
    document.querySelector(".fav").insertAdjacentHTML(
      "afterbegin",
      `
      <h2 class="name">${meals[rdn].name}</h2>
      <img class="img" src="${meals[rdn].url}" alt=""/>
      <div class="text">
      <h2 class="need">You need</h2>
      <p class="ingredients">${meals[rdn].ingredients}</p>
      <p class="instructions">${meals[rdn].instructions}</p></div>`
    );
    console.log("In favorites now");
  } else {
    console.log(meals[rdn].fav);
    console.log("Already in your favorites");
  }
}
// function add() {
//   fav.push(this.meals[rdn].name);
//   console.log(fav);
// }

// $(document).ready(function () {
//   $(".favBtn").click(function () {
//     $(".fav").toggleClass("fav--active");
//   });
// });

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
