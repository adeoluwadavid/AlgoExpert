"use strict";
/**
 * Write a function that takes in a non-empty string and that returns a boolean representing whether the string is a palindrome
 *
 * A Palindrome is defined as a string that's written the same forward and backward. Note that single-charactrer strings are palindromes
 */
function isPalindrome(string) {
    string = string.replace(/\W/g, '').toLowerCase();
    let result = string === string.split('').reverse().join('');
    return result;
}
isPalindrome('abcdcba');
