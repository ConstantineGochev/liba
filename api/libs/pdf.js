const PDFJS = require("pdfjs-dist/es5/build/pdf.js");


function getTextPerPage(pdfUrl){
  var pdf = PDFJS.getDocument(pdfUrl).promise;
  return pdf.then(function(pdf) { // get all pages text
    var maxPages = pdf._pdfInfo.numPages;
    var countPromises = []; // collecting all page promises
    for (var j = 1; j <= maxPages; j++) {
      var page = pdf.getPage(j);

      var txt = "";
      countPromises.push(page.then(function(page) { // add page promise
        var textContent = page.getTextContent();
        return textContent.then(function(text){ // return content promise
          //console.log("PAGE TEXT CONTENTS = ",text.items);
          return text.items.map(function (s) { return s.str; }).join(' '); // value page text
        });
      }));
    }
    // Wait for all pages and join text
    return Promise.all(countPromises).then(function (texts) {
      return texts;
    });
  });
}


module.exports = {
  getTextPerPage
}
