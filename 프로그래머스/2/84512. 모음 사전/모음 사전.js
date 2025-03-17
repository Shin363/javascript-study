function solution(word) {
    //DFS이용, 모든 단어 탐색 후 일치하는 단어가 있으면 빠져나오기
    let answer = 0;
    let alpha = ["A","E","I","O","U"];
    let count =0; //사전 순서
    let flg = false;
    
    const DFS = (str) => {
        if (str.length>5 ||flg) return;
        
        if(str==word){
            answer=count;
            flg=true;
            return;
        }
        count+=1;
        
        for(let i=0; i<5; i++){
            DFS(str+alpha[i]);
        }
    };
    DFS("");
    return answer;
}