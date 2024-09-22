import { APP_NAME, APP_VERSION } from "../app-properties.js";
import { getSvgIcon } from "./services/icons.service.js";
import { getLatestRecipe, getRecipeById, getRecipeOverviewCard, getRecipeCompleteIhm } from "./services/recipes.service.js";
import { setHTMLTitle } from "./utils/UTILS.js";
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
requestWakeLock();

// get recipe
let params = new URLSearchParams(document.location.search);
let id = params.get("id"); // is the string "Jonathan"
let recipe = getRecipeById(id);

setHTMLTitle(recipe.name);


// DOM initializing
HEADER.innerHTML = `<a href="./">${APP_NAME}</a>`;

MAIN.innerHTML = `
  ${getRecipeCompleteIhm(recipe)}`;

FOOTER.innerHTML = `
  <span>&copy; <a href="https://laz-r.github.io/">laz_R</a> - ${new Date().getFullYear()} - v ${APP_VERSION}</span>`;