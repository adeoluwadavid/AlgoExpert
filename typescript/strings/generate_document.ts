/**
 * You're given a string of available characters and a string representing a document that you need to generate.
 * Write a function that determines if you can generate the document using the available characters. If you can generate the document, your function should return true;
 * otherwise, it should return false.
 * 
 * You're only able to generate the document of the frequency of unique characters in the characters string is greater than or equal to the frequency of unique characters in the document string.
 * For exmapl, if you're given characters = "abcabc" docuement = "aabbccc" you cannot generate the document because you're missing one c.
 *
 *  The document that you need to create may contain any characters, including special characters,
 * capital letters, numbers, and spaces.
 */
 function generateDocument(characters: string, document: string) {
    // Write your code here.
    for( const c of document){
        const documentFreq =  frequency(c, document);
        const characterFreq =  frequency(c, characters)
        if(documentFreq > characterFreq) return false
      }
      return true
  }
  function frequency(characters: string, document: string){
      let freq = 0;
      for(const doc of document){
          if(doc === characters) freq++
      }
      return freq
  }
generateDocument('Bste!hetsi ogEAxpelrt x ','AlgoExpert is the Best!')