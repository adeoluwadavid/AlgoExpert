// Reduce the values of an array to a single value (going right-to-left)
const numbers = [175, 50, 25];
function myFunc(total, num) {
    return total - num;
  }

  numbers.reduceRight(myFunc);

  const array1 = [[0, 1], [2, 3], [4, 5]].reduceRight(
    (accumulator, currentValue) =>{ 
        return accumulator.concat(currentValue)
     }
  );

  console.log(array1)