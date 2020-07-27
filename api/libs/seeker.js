
function Seeker(type, term, searchObj) {
  this.type = type;
  this.term = term;
  this.words = term.split(" ");
  /* Search Object contains bookname -> page contents array*/
  this.searchObj = searchObj;
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
  console.log("type = %s, term = %s ",this.type,this.term)
  return Object.values(this.searchObj).reduce(function(textarr) {
    console.log(textarr)
  })

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
