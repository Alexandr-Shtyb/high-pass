export function searchByClick() {
  const btn = document.querySelector('.header__search-btn');
  const searchByClick = document.querySelector('.header__search-by-click-block');
  const btnClose = document.querySelector('.header__search-by-click-btn');
  const headerTag = document.querySelector('.header__tag');
  const headerLogo = document.querySelector('.header__logo');
  const headerNav = document.querySelector('.header__nav');
  const headerElements = document.querySelector('.header__elements');
  const headerItems = document.querySelectorAll('.item-helper');
  const inputSearch = document.querySelector('.header__search-by-click-input');
  const placeholder = inputSearch.placeholder;

  btn.addEventListener('click', () => {
    let valueHeaderElements = window.getComputedStyle(headerTag).width;
    let widthHeaderElements = valueHeaderElements.replace(/[^0-9]/g,"");

    searchByClick.style.display = 'block';
    btn.style.display = 'none';

    if ((widthHeaderElements <= 1920) && (widthHeaderElements > 1320)) {
      headerLogo.style.marginRight = '70px';
      headerNav.style.marginRight = '50px';
    } else if ((widthHeaderElements <= 1320) && (widthHeaderElements > 1024)) {
      headerItems.forEach(item => {
        item.style.marginRight = '20px';
      });
      headerLogo.style.marginRight = '20px';
      headerNav.style.marginRight = '20px';
    } else if (widthHeaderElements <= 768) {
      searchByClick.style.display = 'block';
      btn.style.display = 'none';
      headerLogo.style.display = 'none';
      headerElements.style.justifyContent = 'center';
    }
  });

  btnClose.addEventListener('click', () => {
    let valueHeaderElements = window.getComputedStyle(headerTag).width;
    let widthHeaderElements = valueHeaderElements.replace(/[^0-9]/g,"");

    searchByClick.style.display = 'none';
    btn.style.display = 'block';

    if ((widthHeaderElements <= 1920) && (widthHeaderElements > 1320)) {
      headerLogo.style.marginRight = '140px';
      headerNav.style.marginRight = '193px';
    } else if ((widthHeaderElements <= 1320) && (widthHeaderElements > 1024)) {
      headerItems.forEach(item => {
        item.style.marginRight = '33px';
      });
      headerLogo.style.marginRight = '82px';
      headerNav.style.marginRight = '131px';
    } else if (headerElements.style.width <= 768) {
      headerLogo.style.display = 'block';
    }
    searchByClick.style.display = 'none';
    btn.style.display = 'block';
    headerElements.style.justifyContent = 'space-between';
  });

  inputSearch.addEventListener('click', () => {
    inputSearch.placeholder = '';
  });

  inputSearch.addEventListener('blur', () => {
    inputSearch.value = '';
    inputSearch.placeholder = `${placeholder}`;
  });
}
