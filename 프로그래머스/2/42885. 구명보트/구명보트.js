function solution(people, limit) {
    people.sort((a,b)=>a-b);
    let answer = 0;
    let left = 0; //가장 가벼운
    let right = people.length-1; //가장 무거운
    
    while(left<=right){
        answer++;
        if(people[left]+people[right]<=limit){
            left++;
        }
        right--;
    }
    
    return answer;
}