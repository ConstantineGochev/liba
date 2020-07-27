const utils = require("./utils");

function Seeker(type, term, bookName, searchArr) {
  this.type = type;
  this.term = term;
  this.words = term.split(" ");
  this.bookName = bookName;
  /* Search Arr contains page contents array*/
  this.searchArr = searchArr;
  this.results = {};
  return this.seek();
}
Seeker.prototype.seek = function() {
  switch (this.type) {
    case Seeker.ANYWORD: return this.seekByAnyWord()
    case Seeker.EXACTPHRASE: return this.seekByExactPhrase();
    case Seeker.SENTENCECONTAINING: return this.seekBySentenceContaining();
    case Seeker.INTITLE: return this.seekInTitle();
    default: return this.seekByAnyWord()
  }
}
Seeker.prototype.seekByAnyWord = function() {
  let arrLen = this.searchArr.length;
  let indx = 0;
  while(indx < arrLen) {
    let indices = utils.getIndicesOf(this.term, this.searchArr[indx],false)
    if(indices.length > 0) {
        this.results[indx] = indices
    }
    indx++
  }
  return this.results
}
Seeker.prototype.seekByExactPhrase = function() {

}
Seeker.prototype.seekBySentenceContaining = function() {

}
Seeker.prototype.seekInTitle = function() {


}
/*
 Seeker Types Of Search
*/
Seeker.ANYWORD = 0;
Seeker.EXACTPHRASE = 1;
Seeker.SENTENCECONTAINING = 2;
Seeker.INTITLE = 3;

module.exports = Seeker;
