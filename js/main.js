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

