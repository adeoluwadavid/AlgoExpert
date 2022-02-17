function reverseWordsInString(string: string) {
    // Write your code here.
  
  let splitString = split(string,' ')
  let finalStringArray: string[] = [];
  for(let i = splitString.length - 1; i >= 0; i--){
      finalStringArray.push(splitString[i]) 
    
  }
  
  return finalStringArray.join(' ')
}
function split(string: string, separator: string){
    var cache: string[] = [];
    var cacheInt = 0;
    var lastWord = '';
    
    for(let i =0; i < string.length; i++){
        if(string[i] === separator){
            cacheInt++
            lastWord = ''
            cache[cacheInt] = lastWord
        }else{
            lastWord = lastWord + string[i]
            cache[cacheInt] = lastWord
        }
    }
    return cache
}
reverseWordsInString('tim is great')
reverseWordsInString('AlgoExpert is the best!')
reverseWordsInString('whitespaces    4')