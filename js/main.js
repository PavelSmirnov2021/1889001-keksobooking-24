function getRandomInteger(min, max) {
    if ((min < 0) || (min >= max)) {
        return null;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  }
 

function getRandomFloat(min, max, precision) {
    if (min < 0 || min >= max) {
      return null;
    }
    return Number((Math.random() * (max - min) + min).toFixed(precision));
  }





