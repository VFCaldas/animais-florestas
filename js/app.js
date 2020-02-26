const menu = document.querySelectorAll('[data-animais="menu"] li');
const itemMenu = document.querySelectorAll('[data-animais="item"]');
console.log(itemMenu);
itemMenu[0].classList.add('ativo');

function activeTab(index) {
  itemMenu.forEach((item) => {
    item.classList.remove('ativo');
  })
  itemMenu[index].classList.add('ativo');
}

menu.forEach((item, index) => {
  item.addEventListener('click', () => {
    activeTab(index);
  });
});
