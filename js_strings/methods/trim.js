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
let finalText2 = "";

for (let item of arr) {
  finalText += item + " "
}
arr.map(e => finalText2 += e + ' ')
console.log(finalText)
console.log(finalText2)
