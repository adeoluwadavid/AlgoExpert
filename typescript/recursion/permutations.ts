/**
 * Write a function that takes in an array of unique integers and returns an array of all permutations of those integers in no particula order.
 * 
 * If the input array is empty, the function should return an empty array.
 */

 function getPermutations(array: number[]) {
    // Write your code here.
    const permutations: number[][] = [];
    permutationsHelper(array, [], permutations)
    return permutations
  }

  function permutationsHelper(array: number[], currentPermutations: number[], permutations: number[][]){
      if(!array.length && currentPermutations.length){
          permutations.push(currentPermutations);
      }else{
          for(let i = 0; i < array.length; i++){
              const newArray = array.slice(0,i).concat(array.slice(i+1));
              const newPermutations = currentPermutations.concat([array[i]])
              permutationsHelper(newArray, newPermutations, permutations)
          }
      }
  }