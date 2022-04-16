/**
 * Array.from() is a static property of the JavaScript Array object.

You can only use it as Array.from().

Using x.from(), where x is an array will return undefined.
 */

/**
 * Array.from(object, mapFunction, thisValue)
 */

 let text = "ABCDEFG"
 const myArr = Array.from(text);
 console.log(myArr)

 console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]