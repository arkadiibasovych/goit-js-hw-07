const getCategories = document.querySelectorAll('#categories .item');
console.log(`В списке ${getCategories.length} категории.`);

console.log(`Категория: ${getCategories[0].querySelector('h2').textContent}`);
console.log(`Количество элементов: ${getCategories[0].querySelectorAll('li').length}`);

console.log(`Категория: ${getCategories[1].querySelector('h2').textContent}`);
console.log(`Количество элементов: ${getCategories[1].querySelectorAll('li').length}`);

console.log(`Категория: ${getCategories[2].querySelector('h2').textContent}`);
console.log(`Количество элементов: ${getCategories[2].querySelectorAll('li').length}`);
