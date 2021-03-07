let menu = {
  John: 100,
  Ann: 160,
  Pete: "My menu",
};

multiplyNumeric(menu);

/* after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
*/

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number" ) {
      obj[key] *= 2;
    }
  }
}

console.log(menu)