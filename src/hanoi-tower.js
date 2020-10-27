const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turnes = ((Math.pow(2, disksNumber)) - 1);
  let sec = (3600 / turnsSpeed * turnes);
  let obj = {
    'turns': turnes,
    'seconds': Math.floor(sec)
  };
  return obj;
};
