function solution(sizes) {
    var answer = 0;
    let big = [];
    let small = [];
    for (let [w,h] of sizes){
        big.push(Math.max(w,h));
        small.push(Math.min(w,h)); 
    }
    answer = Math.max(...big) * Math.max(...small);
    return answer;
}