
const getCategories = document.querySelectorAll('#categories .item');
console.log(`В списке ${getCategories.length} категории.`);


for (let i = 0; i < getCategories.length; i += 1) {
console.log(`Категория: ${getCategories[i].querySelector('h2').textContent}`);
console.log(`Количество элементов: ${getCategories[i].querySelectorAll('li').length}`);
}


