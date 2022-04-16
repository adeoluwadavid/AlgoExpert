/**
 * The splice() method adds and/or removes array elements.

The splice() method overwrites the original array.
 */

const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits)