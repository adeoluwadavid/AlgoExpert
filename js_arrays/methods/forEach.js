// Calls a function for each array element
let text = "";
const fruits = ["apple", "orange", "cherry"];
function myFunction(item, index) {
     text += index + ": " + item
    console.log(text)
  }
let r = fruits.forEach(myFunction);
console.log(r)