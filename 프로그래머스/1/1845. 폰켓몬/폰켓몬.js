function solution(nums) {
    var answer = 0;
    let newSet = new Set(nums);
    return Math.min(nums.length/2,newSet.size);
    // let newMap = new Map();
    // for(let num of nums){
    //     if(newMap.has(num)){
    //         newMap.set(num,newMap.get(num)+1);
    //     }else{
    //         newMap.set(num,1);
    //     }
    // }
    // answer = newMap.size>=nums.length/2? nums.length/2 : newMap.size;
    // return answer;
}