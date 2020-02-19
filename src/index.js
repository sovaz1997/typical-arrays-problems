
exports.min = function min (array) {
  if(array === undefined || array.length === 0) {
    return 0;
  }

  let min = array[0];
  array.forEach(element => {
    min = Math.min(min, element);
  });

  return min;
}

exports.max = function max (array) {
    if(array === undefined || array.length === 0) {
        return 0;
    }
    
    let max = array[0];
    array.forEach(element => {
        max = Math.max(max, element);
    });
    
    return max;
}

exports.avg = function avg (array) {
    if(array === undefined || array.length === 0) {
        return 0;
    }
    
    let avg = 0;
    array.forEach(element => {
        avg += element;
    });
    
    return avg / array.length;
}
