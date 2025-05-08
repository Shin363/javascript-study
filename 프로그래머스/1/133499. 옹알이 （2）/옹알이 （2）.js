function solution(babbling) {
    var answer = 0;
    const words=['aya','ye','woo','ma'];
    for (str of babbling){
        let i=0; let prev; let isValid=true;
        while(i<str.length){
            let matched = false;
            for(word of words){
                if(str.slice(i,word.length+i)==word&&word!==prev){
                    prev=word;
                    i+=word.length;
                    matched=true;
                    break;
                }
            }
            if(!matched){
                isValid=false;
                break;
            }
        }
        if(isValid)answer++;
    }
    return answer;
}