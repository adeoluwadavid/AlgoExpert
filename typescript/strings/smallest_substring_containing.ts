/**
 * You're given two non-empty strings: a big string and a small string. Write a function that returns the
 * smallest substring in the big string that contains all of the small string's characters.
 *
 * Note that:
 *  * The substring can contain other characters not found in the small string.
 *  * The characters in the substring don't have to be in the same order as they appeaar in the small string.
 *  * If the small string has duplicate characters, the substring has to contain those duplicate characters (it can also contain more, but not fewer).
 *
 * You can assume that there will only be one relevant smallest substring.
 */
interface CharCounts {
    [key: string]: number;
}
type Bounds = [number, number];
function smallestSubstringContaining(bigString: string, smallString: string) {
    // Write your code here.
    const targetCharCounts = getCharCounts(smallString);
    const substringBounds = getSubstringBounds(bigString, targetCharCounts);
    return getStringFromBounds(bigString, substringBounds)
}

function getCharCounts(string: string) {
    const charCounts: CharCounts = {};
    for (const char of string) {
        increaseCharCount(char, charCounts);
    }
    return charCounts;
}

function getSubstringBounds(string: string, targetCharCounts: CharCounts) {
    let substringBounds: Bounds = [0, Infinity];
    const substringCharCounts: CharCounts = {};
    const numUniqueChars = Object.keys(targetCharCounts).length;
    let numUniqueCharsDone = 0;
    let leftIdx = 0;
    let rightIdx = 0;

    // Move the rightidx to the right in the string until you've counted
    // all of the target characters enough times

    while (rightIdx < string.length) {
        const rightChar = string[rightIdx];
        if (!(rightChar in targetCharCounts)) {
            rightIdx++;
            continue;
        }
        increaseCharCount(rightChar, substringCharCounts);
        if (substringCharCounts[rightChar] === targetCharCounts[rightChar]) {
            numUniqueCharsDone++;
        }

        // Move the leftIdx to the right in the string until you no longer
        // have enough of the target characters in between the leftidx and
        // the rightIdx. Uodate the substringBounds accordingly.

        while (numUniqueCharsDone === numUniqueChars && leftIdx <= rightIdx) {
            substringBounds = getCloserBounds(
                leftIdx,
                rightIdx,
                substringBounds[0],
                substringBounds[1]
            );
            const leftChar = string[leftIdx];
            if (!(leftChar in targetCharCounts)) {
                leftIdx++;
                continue;
            }
            if (substringCharCounts[leftChar] === targetCharCounts[leftChar]) {
                numUniqueCharsDone--;
            }
            decreaseCharCount(leftChar, substringCharCounts);
            leftIdx++;
        }
        rightIdx++;
    }
    return substringBounds;
}

function getCloserBounds(
    idx1: number,
    idx2: number,
    idx3: number,
    idx4: number
): Bounds {
    return idx2 - idx1 < idx4 - idx3 ? [idx1, idx2] : [idx3, idx4];
}

function getStringFromBounds(string: string, bounds: Bounds) {
    const [start, end] = bounds;
    if (end === Infinity) return "";
    return string.slice(start, end + 1);
}

function increaseCharCount(char: string, charCounts: CharCounts) {
    charCounts[char] = (charCounts[char] || 0) + 1;
}

function decreaseCharCount(char: string, charCouts: CharCounts) {
    charCouts[char]--;
}
smallestSubstringContaining("abcd$ef$axb$c$", "$$abf");
