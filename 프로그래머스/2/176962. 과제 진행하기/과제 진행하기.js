function changeHoursToMinutes(nF){
    const hours = Number(nF.slice(0,2))
    const minutes = Number(nF.slice(-2));
    return (hours*60)+minutes;
}
function solution(plans) {
    const tasks = plans.map(([name, start, playTime]) => [
        name,
        changeHoursToMinutes(start),
        Number(playTime)
    ]);
    //정렬
    tasks.sort((a, b) => a[1] - b[1]);

    const answer = [];
    const stopped = []; //멈춘 작업 스택
    let currentTime = tasks[0][1]; //현재 시간
    
    for(let i=0; i<tasks.length; i++){
        const [name,startTime,playTime] = tasks[i];
        const gap = startTime - currentTime;
        // 유휴 시간이 남는 경우
        if(gap>0){
            let remainTime = gap;
            //멈춘 과제가 있고,남은 시간이 소진될 때까지 처리
            while(stopped.length>0&&remainTime>0){
                let [stoppedName,stoppedRemain] = stopped.pop();
                if(stoppedRemain<=remainTime){
                    //더 과제 할 수 있음
                    answer.push(stoppedName);
                    remainTime -= stoppedRemain;
                }else{
                    //과제할 시간이 부족
                    const newReamin = stoppedRemain - remainTime;
                    stopped.push([stoppedName,newReamin]);
                    remainTime = 0;
                }
            }
        }
        currentTime = startTime;
        
        const nextTask = tasks[i+1];
        if(nextTask){
            const nextStartTime = nextTask[1];
            const finishTime = currentTime + playTime;
            
            if(nextStartTime < finishTime){
                //작업을 멈추고, stopped에 푸시해야 함
                const remainPlayingTime = finishTime - nextStartTime;
                stopped.push([name,remainPlayingTime]);
                currentTime = nextStartTime;
                
            }else{
                //작업을 끝까지 다 마치고, currentTime을 업데이트해줌
                answer.push(name);
                currentTime = finishTime;
            }
        }else{
            //마지막 과제
            answer.push(name);
            currentTime += playTime;
        }
    }
    while(stopped.length>0){
        const [stoppedName, _] = stopped.pop();
        answer.push(stoppedName);
    }
    return answer;
}