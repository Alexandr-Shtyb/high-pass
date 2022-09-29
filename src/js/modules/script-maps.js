export function map() {
  let center = [55.76943526, 37.63827803];

  ymaps.ready(init);
  function init() {
    var myMap = new ymaps.Map("map", {
      center: center,
      zoom: 14,
      controls: [],
    });

    var myPlacemark = new ymaps.Placemark(center, {}, {
      iconLayout: 'default#image',
      iconImageHref: '../img/svg/location-marker.svg',
      iconImageSize: [12, 12],
      iconImageOffset: [0, 0],
    });

    myMap.geoObjects.add(myPlacemark);
  }
}
