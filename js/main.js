function getRandom1(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    if ((min < 0) || (min >= max)) {
        return false;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  }


function getRandom2(min, max) {
    if ((min < 0) || (min >= max)) {
        return false;
    }
    return Math.random() * (max - min) + min;
  }
