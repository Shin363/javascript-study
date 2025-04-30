function solution(s, skip, index) {
    var answer = '';
    const base = [...'abcdefghijklmnopqrstuvwxyz'].filter(ch=> !skip.includes(ch));
    for (ch of s){
        let pos = base.indexOf(ch);
        answer += base[(pos+index)%base.length];
    }
    return answer;
}