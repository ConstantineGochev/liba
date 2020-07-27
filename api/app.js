const { getTextPerPage } = require("./libs/pdf");
const Seeker = require("./libs/seeker");
// waiting on gettext to finish completion, or error
getTextPerPage("./tibetan-book-dead.pdf").then(function (texts) {
  let result = new Seeker(0,"death",'Book of the Dead', texts);
  console.log(result);
},
function (reason) {
  //console.log(reason);
});
