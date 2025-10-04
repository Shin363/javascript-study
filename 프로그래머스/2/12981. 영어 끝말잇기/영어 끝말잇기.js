function solution(n, words) {
    let newSet = new Set();
    let prevWord = "";
    for(let i=0; i<words.length; i++){
        let currentWord = words[i];
        if(i>0){
            let prevWordChar = prevWord[prevWord.length-1];
            let currentWordChar = currentWord[0];
            
            if(prevWordChar!==currentWordChar){
                return answer=[(i%n)+1,Math.floor(i/n)+1];
            }
        }
        if(newSet.has(words[i])){
            return answer=[(i%n)+1,Math.floor(i/n)+1];
        }
        prevWord=currentWord;
        newSet.add(currentWord);
    }
    
    return [0,0];
}