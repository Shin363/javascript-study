function solution(n) {
    var pan=1;
    /*while(((n*pan)%6!=0)&&((pan*6)%n!=0)){
        pan++;
    }*/
    while((pan*6)%n!=0){
        pan++;
    }
    return pan;
}