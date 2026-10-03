// 필요한 변수: 동영상 현재 재생 위치 x
// commands만큼 for loop
    // 시작한 후 항상 현재 재생 위치가 op_start<= x <=op_end인지 체크 => 오프닝 구간이므로 op_end로 건너뛰기
    // commands[i] 가 prev면 10초 전으로, x가 10초 미만이면 0분 0초로 재생 위치 이동
    // commands[i] 가 next면 10초 후로, 비디오 길이-현재 재생 위치 <10초면 마지막 위치로 이동(비디오 길이)
function solution(video_len, pos, op_start, op_end, commands) {
    const video_len2 = changeMinutesSeconds(video_len,'s');
    const pos2 = changeMinutesSeconds(pos,'s');
    const op_start2 = changeMinutesSeconds(op_start,'s');
    const op_end2 = changeMinutesSeconds(op_end,'s');
    
    let current=pos2;
    for(let i=0; i<commands.length; i++){
        if(op_start2<=current && current<=op_end2){current=op_end2}
        if(commands[i]=="prev"){
            current = current-10<10?0:current-10;
        }else if(commands[i]=="next"){
            current = video_len2-current<10?video_len2:current+10;
        }
    }
    if(op_start2<=current && current<=op_end2){current=op_end2}
    return changeMinutesSeconds(current,"m");
}
//필요한 함수: 분<->초 변환 함수
function changeMinutesSeconds(str,changing) {
    let result="";
    if(changing=='m'){
        result += Math.floor(str/60)<10?"0"+Math.floor(str/60)+":":Math.floor(str/60)+":";
        result += (str%60)<10?"0"+(str%60):(str%60);
    }else if(changing == 's'){
        result = Number(str[0]+str[1])*60 + Number(str[3]+str[4])
    }else{
        console.log('result에 m/s가 들어가지 않았음')
    }
    return result;
}