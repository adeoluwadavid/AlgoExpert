"use strict";
/**
 * Write a function that takes in an array of words and returns the smaller array of characters needed to form all of the words. The character don't need to be in any particualr order.
 *
 * For example, the characters ['y', 'r', 'o', 'u'] are needed to form the words ['your','you','or','yo'].
 * Note: the input words won't contain any spaces; however, they might contain punctuation and/or special characters.
 */
function minimumCharactersForWords(words) {
    const maximumCharacterFrequencies = {};
    for (const word of words) {
        const characterFrequencies = countCharacterFrequencies(word);
        updateMaximumFrequencies(characterFrequencies, maximumCharacterFrequencies);
    }
    return makeArrayFromCharacterFrequencies(maximumCharacterFrequencies);
}
function countCharacterFrequencies(string) {
    const characterFrequencies = {};
    for (const character of string) {
        if (!(character in characterFrequencies)) {
            characterFrequencies[character] = 0;
        }
        characterFrequencies[character] += 1;
    }
    return characterFrequencies;
}
function updateMaximumFrequencies(frequencies, maximumFrequencies) {
    for (const character in frequencies) {
        const frequency = frequencies[character];
        if (character in maximumFrequencies) {
            maximumFrequencies[character] = Math.max(frequency, maximumFrequencies[character]);
        }
        else {
            maximumFrequencies[character] = frequency;
        }
    }
}
function makeArrayFromCharacterFrequencies(characterFrequencies) {
    const characters = [];
    for (const character in characterFrequencies) {
        const frequency = characterFrequencies[character];
        for (let i = 0; i < frequency; i++) {
            characters.push(character);
        }
    }
    return characters;
}
minimumCharactersForWords(["this", "that", "did", "deed", "them!", "a"]);
