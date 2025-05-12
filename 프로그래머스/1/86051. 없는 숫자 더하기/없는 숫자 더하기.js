function solution(numbers) {
    const numbersArr = [0,1,2,3,4,5,6,7,8,9];
    let sumNum = 0;
    const sumArr = numbersArr.map((v)=>sumNum+=v)
    for (let i of numbers){
        sumNum -= i;
    }
    return sumNum;
}