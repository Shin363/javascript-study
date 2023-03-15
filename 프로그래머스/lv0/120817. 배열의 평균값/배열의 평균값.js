function solution(numbers) {
    var hap=0; var result=0;
    for(var i=0; i<numbers.length; i++){
        hap=hap+numbers[i];
    }
    result=hap/numbers.length;
    return result;
}