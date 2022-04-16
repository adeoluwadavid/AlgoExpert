//Searches a string for a value, or a regular expression, and returns a string where the values are replaced

let text = "Mr Blue has a blue house and a blue car";
let result = text.replace(/blue/gi, "red");
let result2 = text.replace(/blue|house|car/gi, function (x) {
  return x.toUpperCase();
});

console.log(result)