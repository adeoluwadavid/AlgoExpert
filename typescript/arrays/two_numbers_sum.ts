/**
 * Write a function that takes in an non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order. If no two numbers sum up to the target sum, the function should return an empty array.
 * 
 * Note that the target sum has to be obtained by summing two different integers in the array; you can't add a single integer to itself in order to obtain the target sum.
 * 
 * You can assume that there will be at most one pair of numbers summing up to the target sum.
 */

function twoNumberSum(array: number[], targetSum: number) {
    // Write your code here.
   
    let finalResult: number[] = [];
    for (let i = 0; i< array.length ; i++){

        for(let j = i + 1; j < array.length; j++){
           if((array[i] + array[j]) === targetSum){
            finalResult.push(array[i],array[j])
           }
        }
        
    }
    return finalResult;
  }

  twoNumberSum([3,5,-4,8,11,1,-1,6],10)