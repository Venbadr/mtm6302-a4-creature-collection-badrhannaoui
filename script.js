// PROVIDED: use this collection to generate the entries.
const $creatures = [
  {
    "name": "Moss Dragon",
    "description": "A gentle gardener who grows tiny forests wherever it naps.",
    "image": "assets/moss-dragon.svg",
    "alt": "A green dragon with leafy horns and small wings."
  },
  {
    "name": "Cloud Fox",
    "description": "A sky wanderer collecting soft clouds and lost daydreams.",
    "image": "assets/cloud-fox.svg",
    "alt": "A pale blue fox with pointed ears and a fluffy tail."
  },
  {
    "name": "Ember Salamander",
    "description": "A warm little companion that keeps campfires glowing.",
    "image": "assets/ember-salamander.svg",
    "alt": "An orange salamander with a flame at the end of its tail."
  },
  {
    "name": "Moon Owl",
    "description": "A quiet navigator who reads the stories written in stars.",
    "image": "assets/moon-owl.svg",
    "alt": "A purple owl with a crescent moon on its forehead."
  },
  {
    "name": "Crystal Turtle",
    "description": "A patient explorer carrying a sparkling crystal garden.",
    "image": "assets/crystal-turtle.svg",
    "alt": "A mint green turtle with purple crystals on its shell."
  },
  {
    "name": "Mushroom Sprite",
    "description": "A woodland storyteller with a spotted cap and muddy boots.",
    "image": "assets/mushroom-sprite.svg",
    "alt": "A small cream sprite wearing a red spotted mushroom cap."
  }
]

// YOUR WORK: build these features using the supplied HTML, CSS, and data.
// 1. Select the collection and preference controls.
// Selecting the collection, preference controls and status message
const collection = document.getElementById("collection");
const themeSelect = document.getElementById("theme");
const layoutSelect = document.getElementById("layout");
const statusMessage = document.getElementById("status");
// 2. Use a loop to generate the creature entries. See START-HERE.md for markup.
// Looping through the creatures and generate their HTML
for (const creature of $creatures) {
  collection.innerHTML += `
    <li class="creature">
      <img src="${creature.image}" alt="${creature.alt}">
      <div class="creature-info">
        <h3>${creature.name}</h3>
        <p class="creature-description">${creature.description}</p>
      </div>
    </li>
  `;
}
// 3. Listen for changes to each preference control and update the appearance of each creature.
// the theme changes and update the habitat
themeSelect.addEventListener("change", function () {
  document.body.dataset.theme = themeSelect.value;
   // Saving preferences to Local Storage
  savePreferences();
});
// 4. Save both selected preferences to Local Storage.
// the layout changes and update the collection
layoutSelect.addEventListener("change", function () {
  collection.dataset.layout = layoutSelect.value;
  // Saving preferences to Local Storage
  savePreferences();
});
// 5. Check for saved data on load and restore the controls and appearance.
// Saving both selected preferences to Local Storage
function savePreferences() {
  const preferences = {
    theme: themeSelect.value,
    layout: layoutSelect.value
  };

  localStorage.setItem("mtm6302-a4-preferences", JSON.stringify(preferences));

  statusMessage.textContent = "Your preferences have been saved!";
}
// Checking for saved preferences and restor them on page when loading
function restorePreferences() {
  const savedPreferences = localStorage.getItem("mtm6302-a4-preferences");

  if (savedPreferences !== null) {
    const preferences = JSON.parse(savedPreferences);

    themeSelect.value = preferences.theme;
    layoutSelect.value = preferences.layout;

    document.body.dataset.theme = preferences.theme;
    collection.dataset.layout = preferences.layout;

    statusMessage.textContent = "Your preferences have been restored!";
  } else {
    statusMessage.textContent = "No saved preferences yet. Make this collection yours!";
  }
}

// Restoring preferences when the page loads
restorePreferences();
// Add short pseudocode comments before writing each feature.

