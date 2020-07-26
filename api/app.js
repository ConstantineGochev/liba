const { getTextPerPage } = require("./libs/pdf");

// waiting on gettext to finish completion, or error
getTextPerPage("./tibetan-book-dead.pdf").then(function (texts) {
  console.log('parse ', texts);
},
function (reason) {
  console.log(reason);
});
