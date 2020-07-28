function getIndicesOf(searchStr, str, caseSensitive) {
    var searchStrLen = searchStr.length;
    if (searchStrLen == 0) {
        return [];
    }
    var startIndex = 0, index, indices = [];
    if (!caseSensitive) {
        str = str.toLowerCase();
        searchStr = searchStr.toLowerCase();
    }
    while ((index = str.indexOf(searchStr, startIndex)) > -1) {
        indices.push(index);
        startIndex = index + searchStrLen;
    }
    return indices;
}

function getParagraph(page, indxes) {


}

function getSentence(page, indxes) {


}

function getPageText(pagesArr, pageIndx) {
  return pagesArr[pageIndx]
}

module.exports = {
  getIndicesOf,
  getParagraph,
  getSentence,
  getPageText
}
