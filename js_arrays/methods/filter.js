// Creates a new array with every element in an array that pass a test
/**
 * The filter() method creates a new array filled with elements that pass a test provided by a function.

The filter() method does not execute the function for empty elements.

The filter() method does not change the original array.
 */

// array.filter(function(currentValue, index, arr), thisValue)

const ages = [32, 33, 16, 40];
const result = ages.filter((age)=>{
    return age >= 18
});
//console.log(ages)

let words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present']

// const modifiedWords = words.filter( (word, index, arr) => {
//   let answer = arr[index+1] +=' extra'
//   return answer
//   //return word.length < 6
// })

//console.log(modifiedWords)

const appendedWords = words.filter( (word, index, arr) => {
  arr.push('new')
  return arr
})

console.log(appendedWords)