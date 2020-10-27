const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  }


  let newArr = [];
  let arrModifire = arr.slice(0);
  let tmp = 'temp';

  for (var i = 0; i < arrModifire.length; i++) {
    switch (arrModifire[i]) {
      
      case '--discard-next':
        arrModifire[i] = tmp;
        arrModifire[i + 1] = tmp;
        break;

      case '--discard-prev':
        arrModifire[i] = tmp;
        arrModifire[i - 1] = tmp;
        break;
      
      case '--double-next':
        if (i < arrModifire.length - 1) {
          arrModifire[i] = arrModifire[i + 1];
        } else {
          arrModifire[i] = tmp;
        }
        break;

      case '--double-prev':
        arrModifire[i] = tmp;
        if (i > 0 && arrModifire[i - 1] !== tmp) {
          arrModifire[i] = arrModifire[i - 1];
        } else {
          arrModifire[i] = tmp;
        }
        break;
      default:
    }
  }
  arrModifire.forEach((item) => {
    if (item !== tmp) {
      newArr.push(item);
    }
  });

  return newArr;
};