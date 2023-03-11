function solution(array) {
    var answer = 0;
    array.sort(function(a,b){
        return a-b;
    });
    console.log(array);
    answer=Math.floor(array.length/2);
    return array[answer];
}