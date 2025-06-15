function solution(phone_number) {
    var answer = '';
    for(let i=0; i<phone_number.length; i++){
        answer += i<phone_number.length-4?"*":phone_number[i];
    }
    
    return answer;
}