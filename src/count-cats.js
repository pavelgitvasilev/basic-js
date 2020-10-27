const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let a = 0;
  for (let i = 0; i < backyard.length; i++) {
    const element = backyard[i];

    for (let index = 0; index < element.length; index++) {
      const el = element[index];
      // console.log(el);
      if (el === '^^') {
        a = a + 1;
      }
    }
    
  }
 return a;


};
