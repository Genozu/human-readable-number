function transformUnits(count) {
    switch (count) {
      case 0:
        return 'zero';
      case 1:
        return 'one';
      case 2:
        return 'two';
      case 3:
        return 'three';
      case 4:
        return 'four';
      case 5:
        return 'five';
      case 6:
        return 'six';
      case 7:
        return 'seven';
      case 8:
        return 'eight';
      case 9:
        return 'nine';
    }
  }

function transformFromTen (count) {
    switch (count) {
      case 0:
        return 'ten';
      case 1:
        return 'eleven';
      case 2:
        return 'twelve';
      case 3:
        return 'thirteen';
      case 4:
        return 'fourteen';
      case 5:
        return 'fifteen';
      case 6:
        return 'sixteen';
      case 7:
        return 'seventeen';
      case 8:
        return 'eighteen';
      case 9:
        return 'nineteen';
    }
}
  
function transformTens(count) {
    switch (count) {
      case 2:
        return 'twenty';
      case 3:
        return 'thirty';
      case 4:
        return 'forty';
      case 5:
        return 'fifty';
      case 6:
        return 'sixty';
      case 7:
        return 'seventy';
      case 8:
        return 'eighty';
      case 9:
        return 'ninety';
    }
}

module.exports = function toReadable (number) {
    const str = `${number}`;
    let result;
    
    if (str.length === 1) {
        result = transformUnits(Number(str[0]));
    } else if (str.length === 2) {
        if (Number(str[0]) === 1){
        result = transformFromTen(Number(str[1]));
        } else if (Number(str[1]) === 0) {
        result = `${transformTens(Number(str[0]))}`
        } else {
        result = `${transformTens(Number(str[0]))} ${transformUnits(Number(str[1]))}`;
        }
    } else {
        if (Number(str[1]) === 0 && Number(str[2]) === 0) {
        result = `${transformUnits(Number(str[0]))} hundred`;
        } else if (Number(str[1]) === 0 && Number(str[2]) !== 0) {
        result = `${transformUnits(Number(str[0]))} hundred ${transformUnits(Number(str[2]))}`;
        } else if (Number(str[1]) === 1) {
        result = `${transformUnits(Number(str[0]))} hundred ${transformFromTen(Number(str[2]))}`;
        } else if (Number(str[1]) > 1 && Number(str[2]) === 0) {
        result = `${transformUnits(Number(str[0]))} hundred ${transformTens(Number(str[1]))}`;
        } else {
        result = `${transformUnits(Number(str[0]))} hundred ${transformTens(Number(str[1]))} ${transformUnits(Number(str[2]))}`;
        }
    }

    return result;
}
