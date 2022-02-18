/**
 * Write a function that takes in an array of words and returns the smaller array of characters needed to form all of the words. The character don't need to be in any particualr order.
 *
 * For example, the characters ['y', 'r', 'o', 'u'] are needed to form the words ['your','you','or','yo'].
 * Note: the input words won't contain any spaces; however, they might contain punctuation and/or special characters.
 */

// function minimumCharactersForWords(words: string[]) {
//     // Write your code here.
//     let rs = [];
//     for (const arr of words){
//         for(const a of arr){

//             let r = freq(a,words)
//             rs.push(r)

//         }
//     }
//    console.log('Final: ',rs)
//   }
//   function freq(characters: string, document: string[]){
//     let countA: {[key: string]: number} = {};
//     let ans = [];
//     let rs = [];

//     let max: number = 1;
//     console.log(characters)
//     for(const doc of document){
//         console.log(doc)
//         const re = new RegExp(characters, 'g');
//         const count =  doc.match(re)?.length
//         if(count !== undefined){
//             ans.push(count)
//             max = Math.max(...ans)
//             countA[characters] = max

//         }

//     }
//     console.log('Ans: ',max)
//     for(let i = 1; i <= max; i++){
//         rs.push(characters)
//     }

//     console.log('rs: ', rs)
//     console.log('\n')
//     return rs
// }
interface CharacterFrequencies {
    [character: string]: number;
}
function minimumCharactersForWords(words: string[]) {
    const maximumCharacterFrequencies: CharacterFrequencies = {};
    for (const word of words) {
        const characterFrequencies = countCharacterFrequencies(word);
        updateMaximumFrequencies(characterFrequencies, maximumCharacterFrequencies);
    }
    return makeArrayFromCharacterFrequencies(maximumCharacterFrequencies);
}
function countCharacterFrequencies(string: string) {
    const characterFrequencies: CharacterFrequencies = {};
    for (const character of string) {
        if (!(character in characterFrequencies)) {
            characterFrequencies[character] = 0;
        }
        characterFrequencies[character] += 1;
    }
    return characterFrequencies;
}
function updateMaximumFrequencies(
    frequencies: CharacterFrequencies,
    maximumFrequencies: CharacterFrequencies
) {
    for (const character in frequencies) {
        const frequency = frequencies[character];

        if (character in maximumFrequencies) {
            maximumFrequencies[character] = Math.max(
                frequency,
                maximumFrequencies[character]
            );
        } else {
            maximumFrequencies[character] = frequency;
        }
    }
}

function makeArrayFromCharacterFrequencies(
    characterFrequencies: CharacterFrequencies
) {
    const characters: string[] = [];

    for (const character in characterFrequencies) {
        const frequency = characterFrequencies[character];

        for (let i = 0; i < frequency; i++) {
            characters.push(character);
        }
    }
    return characters;
}
minimumCharactersForWords(["this", "that", "did", "deed", "them!", "a"]);
