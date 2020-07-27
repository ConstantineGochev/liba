const { getTextPerPage } = require("./libs/pdf");
const Seeker = require("./libs/seeker");
// waiting on gettext to finish completion, or error
getTextPerPage("./tibetan-book-dead.pdf").then(function (texts) {
  //console.log('parse ', texts);
  let obj = {"Book of the Dead": texts};
  let result = new Seeker(0,"death", obj);
  console.log("result == ", result);
},
function (reason) {
  //console.log(reason);
});
