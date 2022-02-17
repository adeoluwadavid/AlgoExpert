"use strict";
/**
 * Write a function that, given a string, returns its longest palindrome substring
 *
 * A palindrome is defined as a string that's written the same forward and backward. Note that single-character strings are palindromes.
 *
 * You can assume that there will only be one longest palindromic substring.
 *
 */
function longestPalindromicSubstring(string) {
    // Write your code here.
    let longest = '';
    for (let i = 0; i < string.length; i++) {
        //console.log(i)
        for (let j = i; j < string.length; j++) {
            const substring = string.slice(i, j + 1);
            if (substring.length > longest.length && isPalindromes(substring)) {
                longest = substring;
            }
        }
    }
    return longest;
}
function isPalindromes(string) {
    // console.log(string)
    let start = 0;
    let end = string.length - 1;
    while (start < end) {
        if (string[start] !== string[end])
            return false;
        start++;
        end--;
    }
    return true;
}
longestPalindromicSubstring("abaxyzzyxf");
