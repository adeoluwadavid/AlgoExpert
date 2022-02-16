/**
 * Given a non-empty string of lowercase letters and a non-integer representing a key, write a function that returns a new string obtained by shifting every letter in the input string by k positions in the alphabet, where k is the key.
 * Note that letters should 'wrap' around the alphabet; in other words, the letter z shifted by one returns the letter a.
 */

function caesarCipherEncryptor(string: string, key: number) {
  // Write your code here.
  const alphabet: string[] = "abcdefghijklmnopqrstuvwxyz".split("");
  const newKey = key % 26;
  const newLetter = [];
  for (const letter of string) {
    newLetter.push(getNewLetter(letter, newKey, alphabet));
  }
  return newLetter.join('')
}
function getNewLetter(letter: string, key: number, alphabet: string[]) {
  const newLetter = alphabet.indexOf(letter) + key;
  
  return alphabet[newLetter % 26];
}
caesarCipherEncryptor("xyz", 2);
