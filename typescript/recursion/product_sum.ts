/**
 * Write a function that takes in a "special" array and returns its product sum.
 * 
 * A "special" array is a non-empty array that contains either integers or other "special"
 * arrays. The product sum of a "special" array is the sum of its elements, where "special"
*   arrays inside it are summed themselves and then multiplied by their level of depth.

The depth of a "special" array is how far nested it is. For instance, the depth of [] is 1; the depth
of the inner array in [[]] is 2; the depth of the innermost array in [[[]]] is 3.

Therefore, the product sum of [x,y] is x + y; the product sum of [x,[y,z]] is x + 2 * (y + z); the product
sum of [x, [y, [z]]] is x + * (y + 3z)


*/

type SpecialArray = Array<number | SpecialArray>;

// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.
function productSum(array: SpecialArray, multiplier = 1) {
    // Write your code here.
   let sum = 0;
      for(const element of array){
          if(Array.isArray(element)){
              sum += productSum(element, multiplier + 1)
          }else{
              sum += element
          }
      }

      return sum * multiplier
  }

console.log(productSum([5,2,[7,-1],3,[6,[-13,8],4]]))
