"use strict";
/**
 * Write a function that takes in a string of lowercase English-alphabet letters and returns the index of the string's first non-repeating character.
 *
 * The first non-repeating character is the first character in a string that occurs only once.
 *
 * If the input string doesn't have any non-repeating characters, your function should return -1.
 */
function firstNonRepeatingCharacter(string) {
    // Write your code here.
    for (let i = 0; i < string.length; i++) {
        let foundDuplicate = false;
        for (let j = 0; j < string.length; j++) {
            if (string[i] === string[j] && i !== j)
                foundDuplicate = true;
        }
        if (!foundDuplicate)
            return i;
    }
    return -1;
}
firstNonRepeatingCharacter('abcdcaf');
