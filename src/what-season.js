const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (date == '' || date == null || isNaN(date.getTime())) {
    return 'Unable to determine the time of year!';
  }
  if (date.getMonth() == 0 || date.getMonth() == 1 || date.getMonth() == 11) {
    return ('winter');
  } else if (date.getMonth() > 1 && date.getMonth() <= 4) {
    return "spring";
  } else if (date.getMonth() > 4 && date.getMonth() <= 7) {
    return "summer";
  } else if (date.getMonth() > 7 && date.getMonth() < 11) {
    return "autumn";
  } else {
    return "error";
  }
};
