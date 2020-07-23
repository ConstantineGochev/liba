const { gettext } = require("./libs/pdf");

// waiting on gettext to finish completion, or error
gettext("./tibetan-book-dead.pdf").then(function (text) {
  console.log('parse ', text);
},
function (reason) {
  console.log(reason);
});
