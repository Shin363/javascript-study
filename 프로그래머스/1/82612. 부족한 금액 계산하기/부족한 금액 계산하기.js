function solution(price, money, count) {
    var answer = 0;
    const totalPrice = Array.from({length:count},(v,i) => price*i+price );
    totalPrice.map((v)=>answer+=v)
    answer = (answer-money>0)? answer-money : 0 ;
    return answer;
}