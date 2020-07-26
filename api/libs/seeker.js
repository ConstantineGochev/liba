
function Seeker(type, term, category, author, book) {
  this.type = type;
  this.term = term;
  this.words = term.split(" ");
  this.category = category;
  this.author = author;
  this.book = book;
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
Seerer.INTITLE = 3;

module.exports = Seeker;
