const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let sample = parseFloat(sampleActivity);
  if (typeof(sampleActivity) === 'string' && !isNaN(sample) && sample < 15 && sample > 0) {
      const t = 0.693 / HALF_LIFE_PERIOD;
      let n = MODERN_ACTIVITY / sample;
      let nLog = Math.log(n);
      let tBig = nLog / t;
      let result = Math.ceil(tBig);
      return result;
  } else {
    return false;
  }
};
