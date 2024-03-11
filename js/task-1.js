

const categoriesList = document.querySelector('#categories');


const categoriesListItems = categoriesList.querySelectorAll('.item');
console.log('Number of categories: ' + categoriesListItems.length);

categoriesListItems.forEach(item => {
  const h2 = item.firstElementChild;
  const ul = h2.nextElementSibling;

  console.log('Category: ' + h2.textContent);
  console.log('ELements: ' + ul.childElementCount);
});