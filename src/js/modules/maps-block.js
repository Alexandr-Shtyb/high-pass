export function closeMapsBlock() {
  const mapsAddressBlock = document.querySelector('.contacts__maps-address-block');
  const mapsBtn = document.querySelector('.contacts__maps-btn');

  mapsBtn.addEventListener('click', () => {
    mapsAddressBlock.style.display = 'none';
    setTimeout(function () {
      mapsAddressBlock.style.display = 'block';
    }, 30000);
  });
}
