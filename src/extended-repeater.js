const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str = str + '';

  let separator;
  let additionSeparator;
  let addition;

  if (options.hasOwnProperty('addition')) {
    addition = options.addition + '';
  } else {
    addition = '';
  }

  if (options.hasOwnProperty('separator')) {
    separator = options.separator;
  } else {
    separator = '+';
  }
  if (options.hasOwnProperty('additionSeparator')) {
    additionSeparator = options.additionSeparator;
  } else {
    additionSeparator = "|";
  }
  if (options.additionRepeatTimes !== undefined) {
    for (let i = 1; i <= options.additionRepeatTimes; i++) {
      if (i !== options.additionRepeatTimes) {
        str = str + addition + additionSeparator;
      } else {
        str = str + addition;
      }
    }
  } else {
    str = str + addition;
  }
  let concatStr = str;
  for (let i = 2; i <= options.repeatTimes; i++) {
    str = str + separator + concatStr;
  }
  return str;
};