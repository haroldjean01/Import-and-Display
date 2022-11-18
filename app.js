/* Imports */

import { fetchAnimals } from './fetch-utils.js';

/* Get DOM Elements */
const animalListContainer = document.getElementById('animal-list');

/* Events */
window.addEventListener('load', async () => {
    const animals = await fetchAnimals();
});
/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
