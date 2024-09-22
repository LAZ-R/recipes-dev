import { APP_NAME, APP_VERSION } from "../app-properties.js";
import { RECIPES } from "./data/recipes.data.js";
import { getSvgIcon } from "./services/icons.service.js";
import { getLatestRecipe, getRecipeById, getRecipeOverviewCard, getRecipePromotedCard, getAllRecipesOverviewCards, getRecipeCompleteIhm } from "./services/recipes.service.js";
import { getRandomIntegerBetween, setHTMLTitle } from "./utils/UTILS.js";
import { requestWakeLock } from "./utils/wakelock.js";

/* ########################################################### */
/* ------------------------ VARIABLES ------------------------ */
/* ########################################################### */
const HEADER = document.getElementById('header');
const MAIN = document.getElementById('main');
const FOOTER = document.getElementById('footer');

/* ########################################################### */
/* ------------------------ FUNCTIONS ------------------------ */
/* ########################################################### */

/* ########################################################### */
/* ------------------------ EXECUTION ------------------------ */
/* ########################################################### */

// Keep screen awake
//requestWakeLock();
setHTMLTitle(APP_NAME);


// DOM initializing
HEADER.innerHTML = `<span>${APP_NAME}</span>`;

MAIN.innerHTML = `
  <h1>Bienvenue</h1>
  <p>Sur ce site tu retrouveras toutes les recettes que j'ai appris à cuisiner au fil des années, avec la liste des ingrédients et les étapes à suivre bien sûr, mais aussi des petits tips glanés avec le temps ! 😉</p>
  <h2>Dernière recette ajoutée</h2>
  ${getRecipePromotedCard(getLatestRecipe())}
  <h2>Recette au hasard</h2>
  ${getRecipePromotedCard(getRecipeById(getRandomIntegerBetween(1, RECIPES.length)))}
  <h2>Toutes les recettes</h2>
  ${getAllRecipesOverviewCards()}
`;

FOOTER.innerHTML = `
  <span>&copy; <a href="https://laz-r.github.io/">laz_R</a> - ${new Date().getFullYear()} - v ${APP_VERSION}</span>`;