export function burgerByClick() {
  const burgerBtn = document.querySelector('.header__burger-btn');
  const burgerMenu = document.querySelector('.header__burger-menu');
  const navBlock768 = document.querySelector('.header__nav-block-768');
  const burgerBtnClose = document.querySelector('.header__burger-menu-btn-close');
  const headerList = document.querySelector('.header__list');

  burgerBtn.addEventListener('click', () => {
    let valueBurgerMenu = window.getComputedStyle(burgerMenu).width;
    let widthHeaderElements = valueBurgerMenu.replace(/[^0-9]/g,"");

    burgerMenu.style.display = 'block';
    burgerMenu.style.width = `${widthHeaderElements}`;
    headerList.style.display = 'block';
    navBlock768.style.display = 'none';
  });

  burgerBtnClose.addEventListener('click', () => {
    burgerMenu.style.display = 'none';
    navBlock768.style.display = 'flex';
    headerList.style.display = 'flex';
  });
}
