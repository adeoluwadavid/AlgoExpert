// Returns a string with removed whitespaces
/**
 * The trim() method removes whitespace from both sides of a string.

The trim() method does not change the original string.
 */

let text2 = "       Hello      World!        ";
let result = text2.trim();
console.log(result)

let text = "space    is    short  but      tab   is  long"
let arr = text.split(" ").filter(x => x !== "")
console.log(arr)
let finalText = "";

for (let item of arr) {
  finalText += item + " "
}

console.log(finalText)
