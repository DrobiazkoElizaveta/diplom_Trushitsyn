ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("map", {
    center: [60.710497, 28.749784], // Координаты города Выборг
    zoom: 17,
  });

  myPlacemark = new ymaps.Placemark(
    [60.714809, 28.748976],
    {
      balloonContentHeader: "Автовокзал",
      balloonContentBody:
        '<img src="./img/monuments/автовокзал.png" style="width: 70px;">',
      iconContent:
        '<img src="./img/monuments/автовокзал.png" style="width: 70px;">',
    },
    {
      iconLayout: "default#imageWithContent",
      iconImageHref: "your_image_url.jpg",
      iconImageSize: [100, 100],
      iconImageOffset: [-25, -25],
    }
  );

  myMap.geoObjects.add(myPlacemark);
}
