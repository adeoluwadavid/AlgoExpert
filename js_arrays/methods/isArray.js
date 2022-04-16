/**
 * Array.isArray() is a static property of the JavaScript Array object.

You can only use it as Array.isArray().

Using x.isArray(), where x is an array will return undefined.
 */

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let result =  Array.isArray(fruits);
console.log(result)