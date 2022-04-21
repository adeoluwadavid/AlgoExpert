/**
 * Write a function that takes in an array of unique integers and returns it s powerset.
 * The powerset P(X) of a set X is the set of all subsets of X. For example, the powerset of
 * [1,2] is [[],[1],[2],[1,2]]
 * 
 * Note that the sets in the powerset do not need to be in any particular order.
 * 
*/
function powerset(array: number[], id: number | null = null):number[][]{
   
    if(id === null){
        id = array.length -1
    }
    if(id < 0){
        return [[]]
    }
    const ele = array[id]
    const subsets = powerset(array, id -1)
    const length = subsets.length;
    for(let i = 0; i < length; i++){
        const currentSubset = subsets[i]
        subsets.push(currentSubset.concat(ele))
    }
    // Write your code here.
    return subsets
  }
  console.log(powerset([1,2,3]))