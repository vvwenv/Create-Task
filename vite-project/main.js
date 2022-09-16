import "./style.css";
import { meals } from "./recipes";

var randomMeal = meals[Math.floor(Math.random() * meals.length)];
console.log(randomMeal.name);
console.log(randomMeal.type);
console.log(randomMeal.ingredients);
console.log(randomMeal.instructions);
