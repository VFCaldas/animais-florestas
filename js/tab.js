

export default function initTabNav() {
  const menu = document.querySelectorAll('[data-animais="menu"] li');
  const itemMenu = document.querySelectorAll('[data-animais="item"]');
  const menuFloresta = document.querySelectorAll('[data-floresta="menu"] li')
  const itemFloresta = document.querySelectorAll('[data-floresta="item"]')
  itemFloresta[0].classList.add('ativo')
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
  function activeTab2(index) {
    itemFloresta.forEach((item) => {
      item.classList.remove('ativo')
    })
    itemFloresta[index].classList.add('ativo');
  }
  menuFloresta.forEach((item, index) => {
    item.addEventListener('click', () => {
      activeTab2(index);
    })
  })
}
