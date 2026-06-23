let RECIPES = [];

const state = {
  ingredients: new Set(),
  effects: new Set()
};

async function loadData() {
  const res = await fetch("nordic_souls_all_recipes.json");
  RECIPES = await res.json();

  renderFilters();
  renderRecipes();
}

function getAllFilters() {
  const ingredients = new Set();
  const effects = new Set();

  for (const r of RECIPES) {
    r.ingredients.forEach(i => ingredients.add(i));
    r.effects.forEach(e => effects.add(e));
  }

  return {
    ingredients: [...ingredients].sort(),
    effects: [...effects].sort()
  };
}

function matches(recipe) {
  const ingMatch =
    state.ingredients.size === 0 ||
    [...state.ingredients].every(i => recipe.ingredients.includes(i));

  const effMatch =
    state.effects.size === 0 ||
    [...state.effects].every(e => recipe.effects.includes(e));

  return ingMatch && effMatch;
}

function renderFilters() {
  const { ingredients, effects } = getAllFilters();

  const ingDiv = document.getElementById("ingredientFilters");
  const effDiv = document.getElementById("effectFilters");

  ingDiv.innerHTML = "";
  effDiv.innerHTML = "";

  for (const i of ingredients) {
    const el = createChip(i, "ingredient");
    ingDiv.appendChild(el);
  }

  for (const e of effects) {
    const el = createChip(e, "effect");
    effDiv.appendChild(el);
  }
}

function createChip(label, type) {
  const el = document.createElement("div");
  el.className = "chip";
  el.textContent = label;

  el.onclick = () => {
    const set = type === "ingredient" ? state.ingredients : state.effects;

    if (set.has(label)) {
      set.delete(label);
      el.classList.remove("active");
    } else {
      set.add(label);
      el.classList.add("active");
    }

    renderRecipes();
  };

  return el;
}

function renderRecipes() {
  const container = document.getElementById("recipeList");
  container.innerHTML = "";

  const filtered = RECIPES.filter(matches);

  for (const r of filtered) {
    const div = document.createElement("div");
    div.className = "recipe";

    div.innerHTML = `
      <div><b>Ingredients:</b> ${r.ingredients.join(", ")}</div>
      <div><b>Effects:</b> ${r.effects.join(", ")}</div>
      <div><b>Value:</b> ${r.value}</div>
    `;

    container.appendChild(div);
  }
}

loadData();