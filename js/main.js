function getRandomInteger(min, max) {
  if ((min < 0) || (min >= max)) {
    return null;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomInteger(0, 99);

function getRandomFloat(min, max, precision) {
  if (min < 0 || min >= max) {
    return null;
  }
  return Number((Math.random() * (max - min) + min).toFixed(precision));
}
getRandomFloat(0.5, 98.99, 4);

const author = {
  avatar: 'img/avatars/user01.png'
};
const offer = {
  title: 'Бронирование отеля',
  address: '35.65000, 139.70000',
  price: price(),
  type: ['palace', 'flat', 'house', 'bungalow', 'hotel'],
  rooms: rooms(),
  guests: guests(),
  checkin: ['12:00', '13:00', '14:00'],
  checkout: ['12:00', '13:00', '14:00'],
  features: ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
  description: 'Отель с видом на горы',
  photos: ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg']
};
const location = {
  lat: lat(),
  lng: lng()
};

