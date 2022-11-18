export function renderAnimals(animals) {
    const div = document.createElement('div');

    const h2 = document.createElement('h2');
    h2.textContent = animals.name;

    const p = document.createElement('p');
    p.textContent = `${animals.name} is an animal`;

    const ul = document.createElement('ul');
    for (let animal of animals) {
        const li = document.createElement('li');
        li.textContent = animal;
        ul.append(li);
    }
    div.append(h2, p, ul);
    return div;
}
