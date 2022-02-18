"use strict";
/**
 * Write a function that takes in a string made up of parenthesis ( ( and ) ). The function should return an integer representing the length of the longest balanced substring with regards to parentheses.
 *
 * A string is said to be balanced if it has an many opening parenthesis as it has closing parenthesis and if no parenthesis is unmathced.
 * Note that an opening parenthesis can't match a closing parenthesis that comes before it, and similary, a closing parenthesis can't match an opening parenthesis that comes after it.
 *
 */
function longestBalancedSubstring(string) {
    // Write your code here.
    let maxLength = 0;
    const idxStack = [];
    idxStack.push(-1);
    for (let i = 0; i < string.length; i++) {
        if (string[i] === "(") {
            idxStack.push(i);
        }
        else {
            idxStack.pop();
            if (idxStack.length === 0) {
                idxStack.push(i);
            }
            else {
                const balancedSubstringStartIdx = idxStack[idxStack.length - 1];
                const currentLength = i - balancedSubstringStartIdx;
                maxLength = Math.max(maxLength, currentLength);
            }
        }
    }
    return maxLength;
}
longestBalancedSubstring("(()))(");
