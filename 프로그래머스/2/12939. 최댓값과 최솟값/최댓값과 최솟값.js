function solution(s) {
    let answer = '';
    let arr = s.split(" ");
    arr.sort((a,b)=>a-b);
    answer=arr[0].toString().concat(" ",arr[arr.length-1].toString());
    console.log(arr[0],arr[arr.length-1]);
    return answer;
}