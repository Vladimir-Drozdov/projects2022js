const map = L.map('map').on('load', () => { console.log('Карта инициализована'); }).setView({
//создание карты (по id), .on- навесили события, setView-установка центра и масштаба карты(самый лучший масштаб-10)
      lat: 59.92748,//устанавливаем координаты центра карты
      lng: 30,//устанавливаем координаты центра карты
   }, 10);
L.tileLayer(//Пишем ссылку на карту
   'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
 //  {
 //     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright"> OpenStreetMap</a> contributors',
  // },
).addTo(map);//при помощи метода addTo() добавляем карту
const marker = L.marker({//Создаем маркер
   lat: 60,//Координаты маркера latitude-широта
   lng:30,//Координаты маркера longitude-долгота
   },
   {
      title:'You are',//То что будет отображаться при наведении на маркер
      draggable:true,//можно перетаскивать
   }
)
marker.addTo(map);
marker.on('moveend', function (e) {//обработчик собития moveend- пользователь 
//закончил передвигать значок
   console.log(e.target.getLatLng());//getLanLng()-получение координат
})
const button = document.querySelector('[type="button"]');
button.addEventListener('click', function () {
   marker.setLatLng(//утсанавливаем координаты метки
      {
         lat: 60,
         lng: 30,
      }
   );
   map.setView(//устанавливаем центр и масштаб карты
      {
         lat: 50,
         lng: 50,
      },10
   )
});
const createCustomPopup = (point) => {
   const baloonTemplate = document.querySelector('#baloon').content.querySelector('.baloon');
   const popupElement = baloonTemplate.cloneNode(true);
   popupElement.querySelector('.baloon__title').textContent = point.title;
   popupElement.querySelector('.baloon__lat-lng').textContent = `Координаты
   ${point.lat}, ${point.lng}`;
   return popupElement;
}
//Создаем слой- он накладывается на карту, но ее содержимое не закрывает,
//просто вставляет свое содержимое
const markerGroup = L.layerGroup().addTo(map);//Создали первый слой
const markerGroup2 = L.layerGroup().addTo(map);//Создали второй слой
const markers = [
   {
   lat: 50,
   lng:40,
   title:'You are3',
   draggable:true,//можно перетаскивать
   }
   ,{
   lat: 60,
   lng:50,
   title:'You are2',
   draggable:true,//можно перетаскивать
   }

]
markers.forEach((point) => {
   let { lat, lng } = point;
   const marker = L.marker({
      lat,
      lng,
   },
   {
      title: point.title,
   });
   
  // marker.addTo(markerGroup).bindPopup(createCustomPopup(point));//создали 2 маркера, привязали к ним попапы, они всплывают при клике на маркеры
   console.log(marker);
   if (marker._latlng.lat == 60) {
      marker.addTo(markerGroup2).bindPopup(createCustomPopup(point));
   } else {
      marker.addTo(markerGroup).bindPopup(createCustomPopup(point));
   }
})
//Удаляем слой. Слой удаляется вместе с содержимым
markerGroup.clearLayers();

//marker.remove();//удаление метки с карты
// Creating map options
/*var mapOptions = {
   center: [59.92748, 30],//широта и долгота- там где хотиv
   //центрировать карту
            zoom: 4//уровень масштабирования карты
         }
         
         // Creating a map object
         var map = new L.map('map', mapOptions);//создание карты
         
         // Creating a Layer object запрашиваем желаемый слой листов
         var layer = new L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
         
         // Adding layer to the map добавляем их на карту
map.addLayer(layer); 
//L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)
//coздаем маркер
var marker = new L.Marker([59.92748, 30]);
//добавляем маркер на карьу при помощи метода appTo
marker.addTo(map)
//Привязка всплывающего окна к маркеру
//Если без .openPopup(), то попап будет всплывать только при клике
marker.bindPopup('Hi Welcome to Tutorialspoint').openPopup();
//Создаем markerOptions
var markerOptions = {
   title: "MyLocation",// это всплывает при наведении на маркер
   clickable: true,
   draggable: true // маркер можно двигать
}
// создаем еще маркер с markerOptions
var marker2 = L.marker([50,30], markerOptions);
marker2.addTo(map)
//создаем иконку
// Icon options
var iconOptions = {
   iconUrl: 'ellipse_20_3713.png',//путь к изображению, используемого в качестве значка
   iconSize: [29, 25], // размер значка
   iconAnchor:[59,50]//координаты кончика хвоста метки, отсчитывается от левого верхнего угла иконки 
}

// Creating a custom icon
var customIcon = L.icon(iconOptions);
//создаем третий маркер с иконкой
var markerOptions3 = {
   title: "MyLocation",// это всплывает при наведении на маркер
   clickable: true,
   draggable: true, // маркер можно двигать
   icon: customIcon //добавляем иконку
}
var marker3 = L.marker([59, 35], markerOptions3);
marker3.addTo(map)
//рисуем линии
var latlngs = [ //хранит точки, по которым будет построена линия
   [17.385044, 78.486671],
 //  [16.506174, 80.648015],
   [30, 50],
   [17.686816, 83.218482]
];
var polyline = L.polyline(latlngs, { color: 'red' });//создаем линиию
//чтобы создать полигон(многоугольник) надо было написать это:
//var polygon = L.polygon(latlngs, { color: 'red' });
//polygon.addTo(map);
//прямоугольник -rectangle - здесь нужно в latlng две точки
//добавляем полилинию на карту

polyline.addTo(map);
//создание и добавление круга
var circleCenter = [17.385044, 78.486671];
var circleOptions = {
   color: 'red',
   fillColor: '#f03',
   fillOpacity: 0//прозрачность круга
}
var circle = L.circle(circleCenter, 50000, circleOptions);//центр круга, радиус и параметры круга.
circle.addTo(map);
//Мультилинии
 var latlang = [
            [[60, 78.486671], [80, 80.648015], [17.686816, 83.218482]],
            [[43.082680, 80.270718], [70, 77.594563],[15.828126, 78.037279]]
         ];
         
         // Creating poly line options
         var multiPolyLineOptions = {color:'black'};
         
         // Creating multi poly-lines
         var multipolyline = L.multiPolyLine(latlang , multiPolyLineOptions);
         
         // Adding multi poly-line to map
multipolyline.addTo(map);
//Мультиполигон
var latlang2 = [
            [[17.385044, 78.486671], [16.506174, 80.648015], [17.686816, 83.218482]],
            [[13.082680, 80.270718], [12.971599, 77.594563],[15.828126, 78.037279]]
         ];
         // Creating multi polygon options
         var multiPolygonOptions = {color:'red', weight:8};
         
         // Creating multi polygons
         var multipolygon = L.multiPolygon(latlang2, multiPolygonOptions);
         
         // Adding multi polygon to map
         multipolygon.addTo(map);
*/