/* Imports */

import { fetchAnimals, fetchbBitcoins, fetchCreditCards, fetchSsns } from './fetch-utils.js';
import { renderAnimals, renderBitcoins, renderCreditCards, renderSsns } from './render-utils.js';

/* Get DOM Elements */
const animalListContainer = document.getElementById('animals-list');
const bitcoinsListContainer = document.getElementById('bitcoins-list');
const ssnsListContainer = document.getElementById('ssns-list');
const creditCardsListContainer = document.getElementById('credit-card-list');

/* Events */
window.addEventListener('load', async () => {
    const animals = await fetchAnimals();
    // console.log('animals', animals);

    // Display Function
    for (let animal of animals) {
        const animalsEl = renderAnimals(animal);
        animalListContainer.append(animalsEl);
    }
});

window.addEventListener('load', async () => {
    const bitcoins = await fetchbBitcoins();

    for (let bitcoin of bitcoins) {
        const bitcoinsEl = renderBitcoins(bitcoin);
        bitcoinsListContainer.append(bitcoinsEl);
    }
});

window.addEventListener('load', async () => {
    const ssns = await fetchSsns();

    for (let ssn of ssns) {
        const ssnsEl = renderSsns(ssn);
        ssnsListContainer.append(ssnsEl);
    }
});

window.addEventListener('load', async () => {
    const cards = await fetchCreditCards();
    for (let card of cards) {
        const cardsEl = renderCreditCards(card);
        creditCardsListContainer.append(cardsEl);
    }
});
/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
