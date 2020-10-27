const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(member) {
    if (!Array.isArray(member)) {
        return false;
    }
    
    let twoLetter = [];

    member.forEach(element => {
        if (typeof (element) === 'string' && element != '') {
            twoLetter.push(element.trim().toUpperCase().slice(0, 1));
        } else {
            return false;
        }
    });

  return twoLetter.sort().join('');

};