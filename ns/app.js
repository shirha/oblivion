let RECIPES = [];

const MAX_RECIPES = 40;

const state = {
  ingredients: new Set(),
  effects: new Set(),

  pureOnly: false,
  threeOnly: false
};

/* -----------------------------
   LOAD DATA
------------------------------ */

async function loadData() {
  const res = await fetch("data/recipes.json");
  RECIPES = await res.json();

  renderFilters();
  renderRecipes();

}

function setupNav() {
  const filtersBtn = document.getElementById("showFilters");
  const recipesBtn = document.getElementById("showRecipes");

  filtersBtn?.addEventListener("click", () => {
    document.body.classList.remove("show-recipes");
  });

  recipesBtn?.addEventListener("click", () => {
    document.body.classList.add("show-recipes");
  });

  const ingredsFilters = document.getElementById("ingredientFilters").previousElementSibling;
  const effectsFilters = document.getElementById("effectFilters").previousElementSibling;

  ingredsFilters?.addEventListener("click", () => {
    effectsFilters.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
      container: "nearest"   // Modern browsers only
    });
  });

  effectsFilters?.addEventListener("click", () => {
    ingredsFilters.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
      container: "nearest"   // Modern browsers only
    });
  });

}

/* -----------------------------
   FILTER BUILDING
------------------------------ */

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

/* -----------------------------
   PURE CHECK
------------------------------ */

function isPure(recipe) {
  const t = recipe.type || [];
  const has0 = t.includes(0);
  const has1 = t.includes(1);

  return !(has0 && has1); // pure = NOT mixed
}

function matches(recipe) {
  const ingMatch =
    state.ingredients.size === 0 ||
    [...state.ingredients].every(i =>
      recipe.ingredients.includes(i)
    );

  const effMatch =
    state.effects.size === 0 ||
    [...state.effects].every(e =>
      recipe.effects.includes(e)
    );

  const countMatch =
    state.threeOnly ||
    recipe.ingredients.length === 2;

  const pureMatch =
    !state.pureOnly ||
    isPure(recipe);

  return ingMatch && effMatch && countMatch && pureMatch;
}

/* -----------------------------
   FILTER RENDERING
------------------------------ */

function renderFilters() {
  const { ingredients, effects } = getAllFilters();

  const ingDiv = document.getElementById("ingredientFilters");
  const effDiv = document.getElementById("effectFilters");
  const metaDiv = document.getElementById("metaFilters");

  ingDiv.innerHTML = "";
  effDiv.innerHTML = "";
  metaDiv.innerHTML = "";

  for (const i of ingredients) {
    ingDiv.appendChild(createChip(i, "ingredient"));
  }

  for (const e of effects) {
    effDiv.appendChild(createChip(e, "effect"));
  }

  // -----------------------------
  // META BUTTONS
  // -----------------------------

  const pure = document.createElement("div");
  pure.className = "chip";
  pure.textContent = "Pure Only";

  pure.onclick = () => {
    state.pureOnly = !state.pureOnly;
    pure.classList.toggle("active");
    renderRecipes();
  };

  metaDiv.appendChild(pure);

  const three = document.createElement("div");
  three.className = "chip";
  three.textContent = "3 Ingredients";

  three.onclick = () => {
    state.threeOnly = !state.threeOnly;
    three.classList.toggle("active");
    renderRecipes();
  };

  metaDiv.appendChild(three);
}

/* -----------------------------
   CHIP CREATION
------------------------------ */

function createChip(label, type) {
  const el = document.createElement("div");
  el.className = "chip";
  el.textContent = label;

  el.onclick = () => {
    const set = type === "ingredient"
      ? state.ingredients
      : state.effects;

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

/* -----------------------------
   MIXED CHECK (for UI only)
------------------------------ */

function isMixed(recipe) {
  const t = recipe.type || [];
  return t.includes(0) && t.includes(1);
}

/* -----------------------------
   RENDER RECIPES
------------------------------ */

function renderRecipes() {
  const container = document.getElementById("recipeList");
  container.innerHTML = "";

  const filteredAll = RECIPES.filter(matches);
  const filtered = filteredAll.slice(0, MAX_RECIPES);

  const el = document.querySelector('.app');
  const hint = document.querySelector(".hint");
  console.log("hint:",hint)

  if (filteredAll.length > MAX_RECIPES) {
    hint.textContent =
      `Showing first ${MAX_RECIPES} of ${filteredAll.length} recipes (${el.clientWidth})`;
  } else {
    hint.textContent =
      `Showing ${filteredAll.length} recipes`;
  }

  for (const r of filtered) {
    const div = document.createElement("div");
    div.className = "recipe";

    div.innerHTML = `
      <div><b>Ingredients:</b> ${r.ingredients.join(", ")}</div>
      <div><b>Effects:</b> ${r.effects.join(", ")}</div>
      <div>
        <b>Value:</b>
        <span class="value ${isMixed(r) ? "mixed" : ""}">
          ${r.value}
        </span>
        <hr>
      </div>
    `;

    container.appendChild(div);
  }

  console.log({
    '3-filter': state.threeOnly,
    recipes: RECIPES.length,
    filtered: RECIPES.filter(matches).length,
    width: window.innerWidth,
    height: window.innerHeight,
    minDim: Math.min(window.innerWidth, window.innerHeight),
    maxTouchPoints: navigator.maxTouchPoints,
    isPhone: isPhone()
  });
}

function isPhone() {
  const minDimension = Math.min(window.innerWidth, window.innerHeight);
  const isTouch = navigator.maxTouchPoints > 0;
  return isTouch && minDimension < 481; 
}

// Apply phone class to body
function updateLayout() {
  if (isPhone()) {
    document.body.classList.add('phone');
  } else {
    document.body.classList.remove('phone');
  }
}

window.addEventListener('load', updateLayout);
window.addEventListener('resize', updateLayout);
window.addEventListener('orientationchange', updateLayout);

/* -----------------------------
   START
------------------------------ */



setupNav();
loadData();
