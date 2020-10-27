const CustomError = require("../extensions/custom-error");

const chainMaker = {
  newChain: [],
  getLength() {

    return this.newChain.length;

  },
  addLink(value) {
    this.newChain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (!isNaN(position) && position > 0 && position <= this.newChain.length){
      this.newChain.splice(position-1, 1);
    } else {
      this.newChain = [];
      
      throw Error;
    }
    return this;
  },
  reverseChain() {
    this.newChain.reverse();
    return this;
  },
  finishChain() {
    let last = this.newChain.join('~~');
    this.newChain = [];
    return last;
  }

};

module.exports = chainMaker;
