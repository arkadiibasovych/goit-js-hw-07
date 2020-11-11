const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.querySelector('ul#ingredients');

// const li1 = document.createElement('li');
// const li2 = document.createElement('li');
// const li3 = document.createElement('li');
// const li4 = document.createElement('li');
// const li5 = document.createElement('li');
// const li6 = document.createElement('li');

// li1.textContent = ingredients[0];
// li2.textContent = ingredients[1];
// li3.textContent = ingredients[2];
// li4.textContent = ingredients[3];
// li5.textContent = ingredients[4];
// li6.textContent = ingredients[5];

// ingredientsList.append(li1, li2, li3, li4, li5, li6);

 const createList = ingredients.map(ingredient => {
    const li = document.createElement('li');
    li.textContent = ingredient;
    return li;
});
   
ingredientsList.append(...createList);