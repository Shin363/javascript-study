function solution(price, money, count) {
    //var answer = 0;
    const totalPrice = Array.from({length:count},(_,i) => price*(i+1))
    .reduce((acc,cur)=>acc+cur,0);
    //acc:누적값 cur:현재값
    //totalPrice.forEach((v)=>answer+=v)
    return Math.max(totalPrice-money,0);
}