/* eslint-disable no-unused-vars */
function price(min, max) {
  if ((min < 0) || (min >= max)) {
    return null;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
price(0, 99);

function rooms(min, max) {
  if ((min < 0) || (min >= max)) {
    return null;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
rooms(0, 99);

function guests(min, max) {
  if ((min < 0) || (min >= max)) {
    return null;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
guests(0, 99);

function lat(min, max, precision) {
  if (min < 0 || min >= max) {
    return null;
  }
  return Number((Math.random() * (max - min) + min).toFixed(precision));
}
lat(35.65000, 35.70000, 5);

function lng(min, max, precision) {
  if (min < 0 || min >= max) {
    return null;
  }
  return Number((Math.random() * (max - min) + min).toFixed(precision));
}
lng(139.70000, 139.80000, 5);

function randomNumber(min, max) {
  if ((min < 0) || (min >= max)) {
    return null;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
randomNumber(0, 99);

const AVATARS = ['img/avatars/user01.png', 'img/avatars/user02.png', 'img/avatars/user03.png', 'img/avatars/user04.png', 'img/avatars/user05.png', 'img/avatars/user06.png', 'img/avatars/user07.png', 'img/avatars/user08.png', 'img/avatars/user09.png', 'img/avatars/user10.png'];
const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHEKINS = ['12:00', '13:00', '14:00'];
const CHEKOUTS = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const TITLES = ['Отель в Москве', 'Отель в Санкт-Петербруге', 'Отель в Сочи', 'Отель в Краснодаре', 'Отель в Самаре', 'Отель в Ростове', 'Отель в Новосибирске', 'Отель в Казани', 'Отель в Тюмени', 'Отель в Екатеринбурге'];
const DESCRIPTIONS = ['Уютное место для отдыха', 'Проведите время с близкими', 'Лучшее место для отпуска'];
const HOTELS_COUNT = 10;

const createHotel = () => {
  const randomAvatarIndex = randomNumber(0, AVATARS.length - 1);
  const randomTypeIndex = randomNumber(0, TYPES.length - 1);
  const randomChekinIndex = randomNumber(0, CHEKINS.length - 1);
  const randomChekoutIndex = randomNumber(0, CHEKOUTS.length - 1);
  const randomFeaturesIndex = randomNumber(0, FEATURES.length - 1);
  const randomPhotosIndex = randomNumber(0, PHOTOS.length - 1);
  const randomTitleIndex = randomNumber(0, TITLES.length - 1);
  const randomDescriptionIndex = randomNumber(0, DESCRIPTIONS.length - 1);
  return {
    avatar: AVATARS[randomAvatarIndex],
    type: TYPES[randomTypeIndex],
    chekin: CHEKINS[randomChekinIndex],
    chekout: CHEKOUTS[randomChekoutIndex],
    features: FEATURES[randomFeaturesIndex],
    photos: PHOTOS[randomPhotosIndex],
    title: TITLES[randomTitleIndex],
    description: DESCRIPTIONS[randomDescriptionIndex],
    price: price(1000,50000),
    rooms: rooms(1,5),
    guests: guests(1,10),
    lat: lat(35.65000, 35.70000, 5),
    lng: lng(139.70000, 139.80000, 5),
  };
};
createHotel();

const createHotels = Array.from({length: HOTELS_COUNT}, createHotel);
