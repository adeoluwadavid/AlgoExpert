/**
 * Write a function that takes in an array of words and returns the smaller array of characters needed to form all of the words. The character don't need to be in any particualr order.
 * 
 * For example, the characters ['y', 'r', 'o', 'u'] are needed to form the words ['your','you','or','yo'].
 * Nore: the input words won't contain any spaces; however, they might contain punctuation and/or special characters.
 */

function minimumCharactersForWords(words: string[]) {
    // Write your code here.
    //console.log(words.split(''))
    // let str: string = '';
    // for(const word of words){
    //     console.log(word)
    //     str += word;
    // }
    // console.log(str)
    // console.log( str.split('').sort())
    // return str.split('').sort()
    let count: number = 0
   

    for (const arr of words){
        for(const a of arr){
            console.log(a)
            freq(a,words)
        }
    }
  }
  function freq(characters: string, document: string[]){
    let freq = 0;
    let count: any = {};
    for(const doc of document){
        console.log(doc)

       for (const d of doc){
           if(characters === d){
               freq++
           }
       }
       console.log(freq)
    }
    return freq
}
minimumCharactersForWords(['this','that'])
//minimumCharactersForWords(['this','that','did','deed','them!','a'])