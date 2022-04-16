// Copies array elements within the array, to and from specified positions
// array.copyWithin(target,start,end)

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let r1 = fruits.copyWithin(2, 0);
console.log(r1)

const fruits2 = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
let r2 =  fruits2.copyWithin(2, 0, 2);
console.log(r2)