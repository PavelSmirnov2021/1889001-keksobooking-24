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

const author = {
  avatar: 'img/avatars/user01.png'
};
const offer = {
  title: 'Бронирование отеля',
  address: '35.65000, 139.70000',
  price: price(0,99),
  type: ['palace', 'flat', 'house', 'bungalow', 'hotel'],
  rooms: rooms(0,99),
  guests: guests(0,99),
  checkin: ['12:00', '13:00', '14:00'],
  checkout: ['12:00', '13:00', '14:00'],
  features: ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
  description: 'Отель с видом на горы',
  photos: ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg']
};
const location = {
  lat: lat(35.65000, 35.70000, 5),
  lng: lng(139.70000, 139.80000, 5)
};

