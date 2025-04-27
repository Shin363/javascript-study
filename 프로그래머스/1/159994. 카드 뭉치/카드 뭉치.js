function solution(cards1, cards2, goal) {
    var answer = '';
    let idx1=0;
    let idx2=0;
    for (word of goal){
        if(cards1[idx1]===word){
            idx1++;
        }
        else if(cards2[idx2]===word){
            idx2++;
        }
        else{
            return "No"
        }
    }
    return "Yes";
}