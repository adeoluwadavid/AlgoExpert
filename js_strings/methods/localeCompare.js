/**
 * The localeCompare() method compares two strings in the current locale.

The localeCompare() method returns sort order -1, 1, or 0 (for before, after, or equal).

The current locale is based on the language settings of the browser.
 */

//string.localeCompare(compareString)

let text1 = "ab";
let text2 = "b";
let result = text1.localeCompare(text2);

console.log(result)