/**
 * You're given two non-empty strings. The first one is a pattern consisting of only 'x's and / or 'y's; the other one is normal string of alphanumeric characters. Write a function that checks whether the normal string matches the pattern.
 * 
 * A string S0 is said to match a pattern if replacing all 'x's in he pattern with some non-empty substring S1 of S0 and replacing all 'y's in the pattern with some non-empty substring S2 of S0 yields the same string S0.
 * 
 * If the input string doesn't match the input pattern, the function should return an empty array; otherwise, it should return an array holding the strings S1 and S2 that represent 'x' and 'y' in the normal string, in that order. If the pattern doesn't contain any 'x's or 'y's, the respective letter should be represented by an empty string in the final array array that you return.
 * 
 * You can assume that there will never be more than one pair of strings S1 and S2 that appropriately represent 'x' and 'y' in the normal string.
 */

interface Counts{
    [key: string] : number;
}

function patternMatcher(pattern: string, string: string){
    if(pattern.length > string.length) return [];
    const newPattern = getNewPattern(pattern);
    const didSwitch = newPattern[0] !== pattern[0];
    const counts: Counts ={x : 0, y: 0};
    const firstYPos = getCountsAndFirstYPos(newPattern, counts);
    if(counts['y'] !== 0){
        for(let lenOfX = 1; lenOfX < string.length; lenOfX++){
            const lenOfY = (string.length  - lenOfX * counts['x']) / counts['y'];
            if(lenOfX <= 0 || lenOfY % 1 !== 0) continue;
            const yIdx = firstYPos! * lenOfX;
            const x = string.slice(0, lenOfX);
            const y = string.slice(yIdx, yIdx + lenOfY)
            const potentialMatch = newPattern.map(char => (char === 'x' ? x : y))
            if(string === potentialMatch.join('')){
                return !didSwitch ? [x,y] : [y,x]
            }
        }
    }else{
        const lenOfX = string.length / counts['x'];
        if(lenOfX % 1 === 0){
            const x = string.slice(0, lenOfX)
            const potentialMatch = newPattern.map( char => (char === 'x' ? x : ''))
            if(string === potentialMatch.join('')){
                return !didSwitch ? [x, ''] : ['',x]
            }
        }
    }
    return []
}

function getNewPattern(pattern: string){
    const patternLetters = pattern.split('');
    if(pattern[0] === 'x'){
        return patternLetters;
    }else{
        return patternLetters.map(char => (char === 'y' ? 'x' : 'y'))
    }
}
function getCountsAndFirstYPos(pattern: string[], counts: Counts){
    let firstYPos: number | null = null;
    for(let i = 0; i < pattern.length; i++){
        const char = pattern[i];
        counts[char]++
        if(char === 'y' && firstYPos === null ) firstYPos = i;
    }
    return firstYPos;
}
patternMatcher('xxyxxy','gogopowerrangergogopowerranger')