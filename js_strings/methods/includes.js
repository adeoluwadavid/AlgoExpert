/**
 * The includes() method returns true if a string contains a specified string.

Otherwise it returns false.

The includes() method is case sensitive.
 */

let text = "Hello World, welcome to the universe.";
let result1 = text.includes("World");

let result2 = text.includes("World", 12);

console.log(result1);
console.log(result2);
