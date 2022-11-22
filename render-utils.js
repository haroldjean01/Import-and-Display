export function renderAnimals(animals) {
    const div = document.createElement('div');

    const h4 = document.createElement('h4');
    h4.textContent = animals.name;

    const p = document.createElement('p');
    p.textContent = animals.name;

    div.append(h4, p);
    return div;
}

export function renderBitcoins(bitcoins) {
    const div = document.createElement('div');

    const h4 = document.createElement('h4');
    h4.textContent = bitcoins.address;

    const p = document.createElement('p');
    p.textContent = bitcoins.address;

    div.append(h4, p);
    return div;
}

export function renderSsns(ssns) {
    const div = document.createElement('div');

    const h4 = document.createElement('h4');
    h4.textContent = ssns.ssns;

    const p = document.createElement('p');
    p.textContent = ssns.ssns;

    div.append(h4, p);
    return div;
}

export function renderCreditCards(cards) {
    const div = document.createElement('div');

    const h4 = document.createElement('h4');
    h4.textContent = cards.credit_card;

    const p = document.createElement('p');
    p.textContent = cards.credit_card;

    div.append(h4, p);
    return div;
}
