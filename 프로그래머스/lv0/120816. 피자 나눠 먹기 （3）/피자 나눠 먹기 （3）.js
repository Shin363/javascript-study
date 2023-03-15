function solution(slice, n) {
    var pan=1;
    while(slice*pan<n){pan++;}
    return pan;
}