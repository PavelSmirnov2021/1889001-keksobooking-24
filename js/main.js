function getRandom1(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    if ((min < 0) || (min >= max)) {
        return false;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  }
  getRandom1(0, 100);

function getRandom2(min, max) {
    if ((min < 0) || (min >= max)) {
        return false;
    }
    return Math.random() * (max - min) + min;
  }

  getRandom2(0.25, 99.3);