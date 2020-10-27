const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  
  constructor(direction) {
    if (direction === true || direction === undefined) {
      this.direction = true;
    } else {
      this.direction = false;
    }
  }

  codeIt(mess, key, method) {
    let messUp,
      keyUp,
      encryptArr = [],
      cryptStr = '';
 
    let index = 0;
  
    messUp = mess.toUpperCase();
    keyUp = key.toUpperCase();

    for (let i = 0; i < messUp.length; i++) {
      let currentCode = messUp[i].charCodeAt();
      if (currentCode >= 65 && currentCode <= 90) {
        if (method === 'encrypt') {
          cryptStr = String.fromCharCode((currentCode + keyUp.charCodeAt(index)) % 26 + 65); 
        } else{
          cryptStr = String.fromCharCode(((currentCode + 26) - keyUp.charCodeAt(index)) % 26 + 65);
        }
        encryptArr.push(cryptStr);
        if (index !== keyUp.length - 1) {
          index++;
        } else {
          index = 0;
        }
      } else {
        encryptArr.push(messUp[i]);
      }
      
    }
    return this.direction ? encryptArr.join('') : encryptArr.reverse().join('');
  }
encrypt(mess, key) {
  if (!key && !mess) {
    throw Error;
  } else {
    return this.codeIt(mess, key, 'encrypt', false);
  }
}
decrypt(mess, key) {
  if (!key && !mess) {
    throw Error;
  } else {
    return this.codeIt(mess, key, 'decrypt', true);
  }
}
  
}
module.exports = VigenereCipheringMachine;
