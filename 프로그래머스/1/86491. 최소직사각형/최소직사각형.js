function solution(sizes) {
    var answer = 0;
    // let big = [];
    // let small = [];
    // for (let [w,h] of sizes){
    //     big.push(Math.max(w,h));
    //     small.push(Math.min(w,h)); 
    // }
    // answer = Math.max(...big) * Math.max(...small);
    //구조분해할당 신경쓰기
    const rotated = sizes.map(([w,h])=> w>h ? [w,h] : [h,w]);
    
    const widths = rotated.map(([w,h]) => w);
    const heights = rotated.map(([w,h]) => h);
    
    const maxWidth = Math.max(...widths);
    const maxHeight = Math.max(...heights);
    answer = maxWidth * maxHeight;
    
    return answer;
}