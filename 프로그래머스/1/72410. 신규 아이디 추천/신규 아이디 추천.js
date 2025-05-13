function solution(new_id) {
    // 소문자로 변경
    new_id = new_id.toLowerCase();
    // 특정한 특수문자는 제거
    new_id = new_id.replace(/[^a-z0-9\-_.]/g,"");
    // .. 2이상이면 .1로 변경
    new_id = new_id.replace(/\.{2,}/g,".");
    // 처음,마지막에 위치하는 .을 제거
    new_id = new_id.replace(/^\.|\.$/g,"");
    // 빈 문자열이면 a 치환
    if(new_id.length==0){
        new_id = "a"
    }
    // 길이가 16 이상이면 처음 15까지만 남기고 제거, 마지막이 마침표면 지움
    if(new_id.length>=16){
        new_id = new_id.slice(0,15);
        new_id = new_id.replace(/\.$/g,"");
    }
    // 2자 이하이면 길이가 3일때일까지 마지막 문자를 연속해서 붙이기
    if(new_id.length<=2){
        const lastWord = new_id.slice(-1);
        while(new_id.length<3){
            new_id+=lastWord;
        }
    }
    return new_id;
}