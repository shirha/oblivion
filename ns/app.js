const version = "1.1"

let RECIPES = {};

const MAX_RECIPES = 40;

/* -----------------------------
   STATE
------------------------------ */

const state = {
  includedIngredients: new Set(),
  includedEffects: new Set(),
  effectsWarning: false,      // WARNING if effect moved to excluded pool
  ingredients: new Set(),     // .chip filtering
  effects: new Set(),         // .chip filtering
  showAll: false,
  editAll: false,
  pureOnly: false,
  threeOnly: false,
};
const isPoison = r => r.type.some(i => i === 1);
const isPure = r => new Set(r.type).size == 1;

let dialog = null;
let listContainer = null;


/* -----------------------------
   MATCHES FILTER
------------------------------ */

function matches(recipe) {
  const ingMatch =
    state.ingredients.size === 0 ||
    [...state.ingredients].every(i =>
      recipe.ingredients.includes(i)
    );

  const ingIncluded =
    [...recipe.ingredients].every(i =>
      state.includedIngredients.has(i)
    );

  const effMatch =
    state.effects.size === 0 ||
    [...state.effects].every(e =>
      recipe.effects.includes(e)
    );

  const effIncluded =
    [...recipe.effects].every(i =>
      state.includedEffects.has(i)
    );

  const countMatch =
    state.threeOnly ||
    recipe.ingredients.length === 2;

  const pureMatch =
    !state.pureOnly ||
    isPure(recipe);

  return ingMatch && ingIncluded && effMatch && effIncluded && countMatch && pureMatch;
}

/* -----------------------------
   SETUP NAV
------------------------------ */

function setupNav() {
  const filtersBtn = document.getElementById("showFilters");
  const recipesBtn = document.getElementById("showRecipes");

  const filtersPanel = document.getElementById("panel-filters");
  const recipesPanel = document.getElementById("panel-recipes");

  const allButtons = [filtersBtn, recipesBtn];

/* SETUP NAV HELPERS --------- */

  function activateButton(activeBtn) {
    allButtons.forEach(btn => {
      if (btn) btn.classList.toggle("active", btn === activeBtn);
    });
  }

  function showPanel(panelToShow, activeBtn) {
    // Hide all panels
    document.querySelectorAll('.panel').forEach(panel => {
      panel.classList.remove('active');
    });

    // Show selected panel
    if (panelToShow) panelToShow.classList.add('active');

    // Highlight active button
    activateButton(activeBtn);
  }

/* NAV BUTTON LISTENERS ------ */

  filtersBtn?.addEventListener("click", () => {
    showPanel(filtersPanel, filtersBtn);
  });

  recipesBtn?.addEventListener("click", () => {
    showPanel(recipesPanel, recipesBtn);
  });

  // Show Filters by default on mobile
  if (isPhone()) {
    showPanel(filtersPanel, filtersBtn);
  }

/* SCROLL INTO VIEW ---------- */

  const ingredsFilters = document.getElementById("ingredsH3"); // .previousElementSibling;
  const effectsFilters = document.getElementById("effectsH3"); // .previousElementSibling;

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
   RENDER META PANEL
------------------------------ */

function renderMeta() {
  const metaDiv = document.getElementById("metaFilters");
  metaDiv.innerHTML = "";

  const pure = document.createElement("div");
  pure.className = "chip";
  pure.textContent = "Pure";

  pure.onclick = () => {
    state.pureOnly = !state.pureOnly;
    pure.classList.toggle("active");
    renderRecipes();
  };

  metaDiv.appendChild(pure);

  const three = document.createElement("div");
  three.className = "chip";
  three.textContent = "3 Ing";

  three.onclick = () => {
    state.threeOnly = !state.threeOnly;
    three.classList.toggle("active");
    renderRecipes();
  };

  metaDiv.appendChild(three);

  const show = document.createElement("div");
  show.className = "chip";
  show.textContent = "Show All";

  show.onclick = () => {
    state.showAll = !state.showAll;
    show.classList.toggle("active");
    renderIngreds();
    renderEffects();
  };

  metaDiv.appendChild(show);

  const edit = document.createElement("div");
  edit.className = "chip";
  edit.textContent = "±";

  edit.onclick = () => {
    state.editAll = !state.editAll;
    edit.classList.toggle("active");

    renderIngreds();
    renderEffects();
  };

  // metaDiv.appendChild(edit);
  
  const save = document.createElement("button");
  save.className = "ls";
  save.textContent = "Save";

  save.onclick = openManageDialog;

  metaDiv.appendChild(save);

  const option = document.createElement("div");
  option.className = "chip";
  option.textContent = "⚙";

  option.onclick = openOptionDialog;

  metaDiv.appendChild(option);
}

/* -----------------------------
   RENDER FILTERS LIST
------------------------------ */

// --------------------------------------------------------

function createChip(label, active, onclick) {
  const el = document.createElement("div");
  el.className = "chip";
  el.textContent = label;

  if (active) {
    el.classList.add("active");
  }

  el.onclick = onclick;

  return el;
}

// --------------------------------------------------------

function createMoveButton(included, onclick) {
  const el = document.createElement("div");
  el.className = `btn-move ${included ? "" : "active"}`;
  el.innerHTML = included ? "➖&#xFE0E;" : "➕&#xFE0E;";
  el.onclick = onclick;
  return el;
}

// --------------------------------------------------------

function renderFilterList({
  data,
  includedSet,
  activeSet,
  includedDiv,
  excludedDiv,
  rowClass,
  itemClass,
  renderSelf,
  onExcluded,
}) {

  includedDiv.innerHTML = "";
  excludedDiv.innerHTML = "";

  for (const label of Object.keys(data).sort()) {

    const details = data[label] || [];
    const isIncluded = includedSet.has(label);

    const item = document.createElement("div");
    item.className = rowClass;

    item.appendChild(createMoveButton(isIncluded, () => {

      if (isIncluded) {
        includedSet.delete(label);
        activeSet.delete(label);
      } else
        includedSet.add(label);

      renderSelf();
      renderRecipes();

    }));

    item.appendChild(createChip(
      label,
      activeSet.has(label),
      () => {

        if (activeSet.has(label))
          activeSet.delete(label);
        else
          activeSet.add(label);

        renderSelf();
        renderRecipes();

      }
    ));

    if (state.showAll) {
      const list = document.createElement("div");
      list.className = itemClass;
      list.innerHTML = details.join("<br>");
      item.appendChild(list);
    }

    if (isIncluded) {
      includedDiv.appendChild(item);
    } else {
      item.classList.add("active");
      excludedDiv.appendChild(item);

      if (onExcluded)
        onExcluded();
    }
  }
}

// --------------------------------------------------------

function renderIngreds() {

  renderFilterList({

    data: RECIPES.ingredients,

    includedSet: state.includedIngredients,
    activeSet: state.ingredients,

    includedDiv: document.querySelector("#ingredientFilters .includedPool"),
    excludedDiv: document.querySelector("#ingredientFilters .excludedPool"),

    rowClass: "ingredient-row",
    itemClass: "item-list",

    renderSelf: renderIngreds

  });

}

// --------------------------------------------------------

function renderEffects() {

  state.effectsWarning = false;

  renderFilterList({

    data: RECIPES.effects,

    includedSet: state.includedEffects,
    activeSet: state.effects,

    includedDiv: document.querySelector("#effectFilters .includedPool"),
    excludedDiv: document.querySelector("#effectFilters .excludedPool"),

    rowClass: "effect-row",
    itemClass: "item-list",

    renderSelf: renderEffects,

    onExcluded() {
      state.effectsWarning = true;
    }

  });

}

/* -----------------------------
   RENDER RECIPES
------------------------------ */

function renderRecipes() {

  document.getElementById("warn").innerHTML = `Recipes ${state.effectsWarning ? '<span style="color:#ff99ce;"><b><i>!</i></b></span>' : ''}`;

  const container = document.getElementById("recipeList");
  container.innerHTML = "";

  const filteredAll = RECIPES['recipes'].filter(matches);
  const filtered = filteredAll.slice(0, MAX_RECIPES);

  const el = document.querySelector('.app');
  const hint = document.querySelector(".hint");

  if (filteredAll.length > MAX_RECIPES) {
    hint.innerHTML =
      `Showing first ${MAX_RECIPES} of ${filteredAll.length} recipes <small>(${el.clientWidth}&thinsp;w)</small>`;
  } else {
    hint.textContent =
      `Showing ${filteredAll.length} recipes`;
  }
  console.log(hint.textContent)

  for (const r of filtered) {
    const div = document.createElement("div");
    div.className = "recipe";

    let label = isPoison(r) ? "Poison" : "Potion";
    let mixed = isPure(r) ? "" : "mixed";

    div.innerHTML = `
      <div>
        <b>Ingredients:</b>
        <span class="ingredients"></span>
      </div>

      <div>
        <b>Effects:</b>
        <span class="effects"></span>
      </div>

      <div>
        <b>${label}:</b>
        <span class="value ${mixed}">${r.value}</span>
        <hr>
      </div>
    `;

    const ingredientsDiv = div.querySelector(".ingredients");
    const effectsDiv = div.querySelector(".effects");

    for (const i of r.ingredients) {
      const el = document.createElement("div");
      el.className = "chip";
      el.textContent = i;
      el.onclick = () => {
        state.includedIngredients.delete(i);
        state.ingredients.delete(i);
        renderIngreds();
        renderRecipes();
      };
      ingredientsDiv.appendChild(el);
    }

    for (const e of r.effects) {
      const el = document.createElement("div");
      el.className = "chip";
      el.textContent = e;
      el.onclick = () => {
        state.effectsWarning = true
        state.includedEffects.delete(e);
        state.effects.delete(e);
        renderEffects();
        renderRecipes();
      };
      effectsDiv.appendChild(el);
    }

    container.appendChild(div);
  }

  console.log(JSON.stringify({
    'three': state.threeOnly,
    'pure': state.pureOnly,
    width: window.innerWidth,
    height: window.innerHeight,
    maxTouchPoints: navigator.maxTouchPoints,
    isPhone: isPhone()
  }));
}

/* -----------------------------
   DIALOG
------------------------------ */

const NamedListsUI = {
  dialog: null,
  listContainer: null,
  vanilla: null,

  LS_NAMED: "ns:v1.namedLists",
  LS_LAST: "ns:v1.lastUsedList",
  LS_VANILLA: "ns:v1.vanilla",

  init() {
    this.dialog = document.getElementById("manageListsDialog");
    this.listContainer = document.getElementById("namedListsContainer");
    this.vanilla = getVanilla();

    this.dialog.querySelector("#btn-save-current")
      .addEventListener("click", this.save.bind(this));

    this.dialog.querySelector("#btn-clear-all")
      .addEventListener("click", this.clear.bind(this));

    this.dialog.querySelector("#btn-vanilla")
      .addEventListener("click", this.json_toggle.bind(this));

    this.dialog.querySelector("#btn-close")
      .addEventListener("click", () => this.dialog.close?.());
  },

  save() {
    let oldName = getLastUsedList();

    if (["Default Ingredients", "Most All Ingredients"].includes(oldName)) oldName = "";

    const name = prompt("List name?", oldName);
    if (!name) return;

    const currentIncludes = [...state.includedIngredients]; 

    const lists = getNamedLists();

    lists[name] = currentIncludes;

    setNamedLists(lists);
    setLastUsedList(name);

    renderNamedLists();
  },
  json_toggle() {
    const el = document.getElementById("btn-vanilla");
    const state = getVanilla();
    // console.log(`vanilla: ${state}`);

    if (state === "off") {
      el.textContent = "Vanilla";
      setVanilla("on");
    } else {
      el.textContent = "Apothe";
      setVanilla("off");
    }
    console.log(`vanilla: ${getVanilla()}`);
  },
  clear() {
    if (!confirm("Delete ALL saved include lists?")) return;

    localStorage.removeItem(this.LS_NAMED+"_"+this.vanilla);
    localStorage.removeItem(this.LS_LAST)+"_"+this.vanilla;

    renderNamedLists(); // refresh UI
  },
};

function openManageDialog() {

    renderNamedLists();

    NamedListsUI.dialog.showModal();
}

function openOptionDialog() {

    renderNamedLists();

    NamedListsUI.dialog.showModal();
}

function getNamedLists() {
  return JSON.parse(localStorage.getItem(NamedListsUI.LS_NAMED+"_"+NamedListsUI.vanilla)) || {};
}

function setNamedLists(namedLists) {
  localStorage.setItem(NamedListsUI.LS_NAMED+"_"+NamedListsUI.vanilla, JSON.stringify(namedLists));
}

function getLastUsedList() {
  return localStorage.getItem(NamedListsUI.LS_LAST+"_"+NamedListsUI.vanilla);
}

function setLastUsedList(name) {
  localStorage.setItem(NamedListsUI.LS_LAST+"_"+NamedListsUI.vanilla, name);
}

function getVanilla() {
  return localStorage.getItem(NamedListsUI.LS_VANILLA) || "off";
}

function setVanilla(name) {
  localStorage.setItem(NamedListsUI.LS_VANILLA, name);
}

// --------------------------------------------------------

function ensureDefaultLists() {

  const most_all = [ "Abecean Longfin", "Bear Claws", "Bee", "Beehive Husk", "Bleeding Crown", "Blisterwort", "Blue Butterfly Wing", "Blue Dartwing", "Blue Mountain Flower", "Bone Meal", "Briar Heart", "Butterfly Wing", "Canis Root", "Charred Skeever Hide", "Chaurus Eggs", "Chicken's Egg", "Creep Cluster", "Cyrodilic Spadetail", "Deathbell", "Dragon's Tongue", "Dwarven Oil", "Ectoplasm", "Elves Ear", "Eye Of Sabre Cat", "Falmer Ear", "Fire Salts", "Fly Amanita", "Frost Mirriam", "Frost Salts", "Garlic", "Giant Lichen", "Giant's Toe", "Glow Dust", "Glowing Mushroom", "Grass Pod", "Hagraven Claw", "Hagraven Feathers", "Hanging Moss", "Hawk Beak", "Hawk Feathers", "Histcarp", "Honeycomb", "Ice Wraith Teeth", "Imp Stool", "Jazbay Grapes", "Juniper Berries", "Large Antlers", "Lavender", "Luna Moth Wing", "Moon Sugar", "Mora Tapinella", "Mudcrab Chitin", "Namira's Rot", "Nightshade", "Nirnroot", "Nordic Barnacle", "Orange Dartwing", "Pearl", "Pine Thrush Egg", "Purple Mountain Flower", "Red Mountain Flower", "River Betty", "Rock Warbler Egg", "Sabre Cat Tooth", "Salt Pile", "Scaly Pholiota", "Silverside Perch", "Skeever Tail", "Slaughterfish Egg", "Slaughterfish Scales", "Small Antlers", "Small Pearl", "Snowberries", "Spider Egg", "Spriggan Sap", "Swamp Fungal Pod", "Taproot", "Thistle Branch", "Torchbug Thorax", "Troll Fat", "Tundra Cotton", "Vampire Dust", "Void Salts", "Wheat", "White Cap", "Wisp Wrappings"];
  const defaults = ["Blue Butterfly Wing", "Blue Mountain Flower", "Butterfly Wing", "Charred Skeever Hide", "Chicken's Egg", "Dragon's Tongue", "Elves Ear", "Fly Amanita", "Jazbay Grapes", "Lavender", "Mora Tapinella", "Nightshade", "Nirnroot", "Purple Mountain Flower", "Red Mountain Flower", "Salmon Roe", "Salt Pile", "Slaughterfish Egg", "Snowberries", "Thistle Branch", "Tundra Cotton", "Wheat", "White Cap"];
  const namedLists = getNamedLists();

  if (!namedLists["Default Ingredients"]) {
    namedLists["Default Ingredients"] = [...defaults];
  }

  if (!namedLists["Most All Ingredients"]) {
    namedLists["Most All Ingredients"] = [...most_all];
  }

  setNamedLists(namedLists);
}

// --------------------------------------------------------

function loadLastUsedList() {

  ensureDefaultLists();

  const namedLists = getNamedLists();
  const last = getLastUsedList();

  if (last && namedLists[last]) {
    state.includedIngredients = new Set(namedLists[last]);
    console.log(`Loaded "${last}"`);
    return;
  }

  state.includedIngredients =
      new Set(namedLists["Default Ingredients"]);

  setLastUsedList("Default Ingredients");
}

// --------------------------------------------------------

function loadLocalStorage() {

  ensureDefaultLists();

  loadLastUsedList();

  state.includedEffects = new Set(Object.keys(RECIPES.effects));
}

// --------------------------------------------------------

function loadNamedList(name) {

  const namedLists = getNamedLists();

  if (!namedLists[name]) return;

  state.includedIngredients = new Set(namedLists[name]);

  setLastUsedList(name);

  renderNamedLists();
  renderIngreds();
  renderRecipes();
}

// --------------------------------------------------------

function renameNamedList(oldName) {

  const newName = prompt("Enter new name:", oldName);

  if (!newName || newName === oldName)
    return;

  const namedLists = getNamedLists();

  if (namedLists[newName]) {
    alert("That name already exists.");
    return;
  }

  namedLists[newName] = namedLists[oldName];
  delete namedLists[oldName];

  setNamedLists(namedLists);

  if (getLastUsedList() === oldName)
    setLastUsedList(newName);

  renderNamedLists();
}

// --------------------------------------------------------

function deleteNamedList(name) {

  if (!confirm(`Delete "${name}"?`))
    return;

  const namedLists = getNamedLists();

  delete namedLists[name];

  setNamedLists(namedLists);

  if (getLastUsedList() === name) {
    setLastUsedList("Default Ingredients");
    loadNamedList("Default Ingredients");
  }

  renderNamedLists();
}

// --------------------------------------------------------

function renderNamedLists() {

  const namedLists = getNamedLists();
  const last = getLastUsedList();
  const vanilla = getVanilla();
  console.log(`vanilla: ${vanilla}`);
  if (vanilla === "on") {
    document.getElementById("btn-vanilla").textContent = "Vanilla";
  }

  NamedListsUI.listContainer.innerHTML = "";

  Object.keys(namedLists)
    .sort()
    .forEach(name => {

      const row = document.createElement("div");
      row.className = "named-list";

      const input = document.createElement("input");
      input.value = name;
      input.readOnly = true;
      if (name === last){
        input.className = "active";
      }

      input.onclick = () => loadNamedList(name);

      input.ondblclick = () => renameNamedList(name);

      const ren = document.createElement("button");
      ren.textContent = "✎";
      ren.onclick = () => renameNamedList(name);

      const del = document.createElement("button");
      del.textContent = "✕";
      del.onclick = () => deleteNamedList(name);

      row.append(input, ren, del);

      NamedListsUI.listContainer.appendChild(row);
    });
}

/* -----------------------------
   INIT
------------------------------ */

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

async function loadData() {
  const vanilla = getVanilla(); //  console.log(`vanilla: ${vanilla}`,vanilla === "true",vanilla === true);

  try {
    const res = await fetch(`data/recipes_${vanilla === "on" ? "vanilla" : "apothe"}.json`);
    RECIPES = await res.json();

    console.log("Recipes loaded successfully:", Object.keys(RECIPES));
  } catch (err) {
    console.error("Failed to load recipes.json:", err);
  }
}

document.addEventListener('DOMContentLoaded', async () => {

  NamedListsUI.init();

  updateLayout();
  setupNav();

  await loadData();

  loadLocalStorage();
  renderMeta();
  renderIngreds();
  renderEffects();
  renderRecipes();
});

/**
(opencv) O:\Wabbajack\project\ocr\ns>python simple_list1.py
Enter the path to your UTF-8 text file: app.js

const version = "1.1"
let RECIPES = {};
const MAX_RECIPES = 40;
const state = {
const isPure = r => new Set(r.type).size == 1;
let dialog = null;
let listContainer = null;

function matches(recipe) {
function setupNav() {
function renderMeta() {

function createChip(label, active, onclick) {
function createMoveButton(included, onclick) {

function renderFilterList({
function renderIngreds() {
function renderEffects() {
function renderRecipes() {

const NamedListsUI = {
function openManageDialog() {
function getNamedLists() {
function setNamedLists(namedLists) {
function getLastUsedList() {
function setLastUsedList(name) {
function ensureDefaultLists() {
function loadLastUsedList() {
function loadLocalStorage() {
function loadNamedList(name) {
function renameNamedList(oldName) {
function deleteNamedList(name) {
function renderNamedLists() {

function isPhone() {
function updateLayout() {

async function loadData() {
document.addEventListener('DOMContentLoaded', async () => {
*/
