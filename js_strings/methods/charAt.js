/**
 * The charAt() method returns the character at a specified index (position) in a string.

The index of the first character is 0, the second 1, ...

The index of the last character is string length - 1 
 */

let text = "HELLO WORLD";
let firstLetter = text.charAt(0);

let lastLetter = text.charAt(text.length - 1)

console.log('First Letter: ', firstLetter)
console.log('Last Letter: ', lastLetter)