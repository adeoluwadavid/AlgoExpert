//Reduce the values of an array to a single value (going left-to-right)
// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
const numbers = [15.5, 2.3, 1.1, 4.7];

function getSum(total, num) {
   
  return total + Math.round(num);
}

let result = numbers.reduce(getSum)
console.log(result)