/**
 * he sort() sorts the elements of an array.

The sort() overwrites the original array.

The sort() sorts the elements as strings in alphabetical and ascending order.
 */

// array.sort(compareFunction)

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();

const points = [40, 100, 1, 5, 25, 10];
points.sort((a,b)=> a-b)

//console.log(fruits)
//console.log(points)



const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
//console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
//console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]


const numbers =  [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Zeros', value: 37 }
  ];
numbers.sort(function(a, b) {
    return a.value - b.value;
});
console.log(numbers);