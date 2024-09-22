import { RECIPES } from "../data/recipes.data.js";
import { getSvgIcon } from "./icons.service.js";

export const getRecipeById = (recipeId) => {
  const recipe = RECIPES.filter((recipe) => recipe.id == Number(recipeId))[0];
  //console.log(recipe);
  return recipe;
}

export const getLatestRecipe = () => {
  return RECIPES[RECIPES.length - 1];
}

export const getTipsIhm = (tips) => {
  return `
    <div class="tips-container">
      <span>💡 Mon petit tips</span>
      <p>${tips.value}</p>
    </div>
  `;
}

export const getRecipeIngredientsIhm = (recipeIngredients) => {
  let str = '<div class="recipe-ingredients-container">';
  for (let index = 0; index < recipeIngredients.length; index++) {
    const ingredient = recipeIngredients[index];
    str += `
      <div class="ingredient-bloc">
        <!-- <span>${index + 1}</span> -->
        <span>${ingredient}</span>
      </div>`;
  }
  str += '</div>';
  return str;
}

export const getRecipeStepsIhm = (recipeSteps) => {
  let str = '<div class="recipe-steps-container">';
  for (let index = 0; index < recipeSteps.length; index++) {
    const step = recipeSteps[index];
    if (step.type == 'STEP') {
      str += `
      <div class="step-bloc">
        <span class="step-number">${index + 1}</span>
        <span>${step.value}</span>
      </div>`;
    } else {
      str += `${getTipsIhm(step)}`;
    }
  }
  str += '</div>';
  return str;
}

export const getRecipeCompleteIhm = (recipe) => {
  return `
    <div class="recipe-container">
      <h3>${recipe.name}</h3>
      <div class="img-container" style="background-image: url('${recipe.imgSrc}');"></div>
      <p>${recipe.desc}</p>
      <h4>Durée</h4>
      <div class="timing-container">
        <div class="timing-line">
          ${getSvgIcon('clock', 'icon-xs')}
          <span>Préparation</span>
          <span>${recipe.prepTime}min</span>
        </div>
        <div class="timing-line">
          ${getSvgIcon('clock', 'icon-xs')}
          <span>Cuisson</span>
          <span>${recipe.cookingTime}min</span>
        </div>
      </div>
      <h4>Ingrédients</h4>
      ${getRecipeIngredientsIhm(recipe.ingredients)}
      <h4>Étapes de préparation</h4>
      ${getRecipeStepsIhm(recipe.steps)} 
    </div>`;
}

export const getRecipeOverviewCard = (recipe) => {
  return `
  <div class="recipe-card" onclick="onRecipeCardClick(${recipe.id})">
    <div class="card-img-container" style="background-image: url('${recipe.imgSrc}');"></div>
    <div class="card-overview-text">
      <strong>${recipe.name}</strong>
      <div class="timing-container">
        <div class="timing-line">
          ${getSvgIcon('clock', 'icon-xs')}
          <span>Préparation</span>
          <span>${recipe.prepTime}min</span>
        </div>
        <div class="timing-line">
          ${getSvgIcon('clock', 'icon-xs')}
          <span>Cuisson</span>
          <span>${recipe.cookingTime}min</span>
        </div>
      </div>
    </div>
  </div>`;
}

export const getRecipePromotedCard = (recipe) => {
  return `
  <div class="recipe-card" onclick="onRecipeCardClick(${recipe.id})">
    <div class="card-img-container" style="background-image: url('${recipe.imgSrc}');"></div>
    <div class="card-overview-text">
      <strong>${recipe.name}</strong>
      <p>${recipe.smDesc}</p>
      <div class="timing-container">
        <div class="timing-line">
          ${getSvgIcon('clock', 'icon-xs')}
          <span>Préparation</span>
          <span>${recipe.prepTime}min</span>
        </div>
        <div class="timing-line">
          ${getSvgIcon('clock', 'icon-xs')}
          <span>Cuisson</span>
          <span>${recipe.cookingTime}min</span>
        </div>
      </div>
    </div>
  </div>`;
}

const onRecipeCardClick = (recipeId) => {
  window.location = `./recipe.html?id=${recipeId}`;
}
window.onRecipeCardClick = onRecipeCardClick;

export const getAllRecipesOverviewCards = () => {
  let str = '<div class="recipes-list">';
  RECIPES.forEach(recipe => {
    str += getRecipeOverviewCard(recipe);
  });
  str += '</div>';
  return str;
}