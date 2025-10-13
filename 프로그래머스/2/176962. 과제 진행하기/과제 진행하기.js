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
    const stopped = []; 
    let currentTime = tasks[0][1];
    
    for (let i = 0; i < tasks.length; i++) {
        const [name, startTime, playTime] = tasks[i];
        const gap = startTime - currentTime;
        if (gap > 0) {
            let remainTime = gap;
            while (stopped.length > 0 && remainTime > 0) {
                const [stoppedName, stoppedRemain] = stopped.pop();
                if (stoppedRemain <= remainTime) {
                    answer.push(stoppedName);
                    remainTime -= stoppedRemain; 
                } else {
                    const newRemain = stoppedRemain - remainTime;
                    stopped.push([stoppedName, newRemain]); 
                    remainTime = 0; 
                }
            }
        }

        // 현재 시각 갱신: 새로운 과제 시작 시간으로 이동
        currentTime = startTime;
        const nextTask = tasks[i + 1];

        if (nextTask) {
            // 다음 과제가 있다면
            const nextStartTime = nextTask[1];
            const finishTime = currentTime + playTime;

            if (finishTime <= nextStartTime) {
                // 현재 과제를 다음 과제 시작 전에 완료 가능
                answer.push(name);
                currentTime = finishTime; 
            } else {
                const remainingPlayTime = finishTime - nextStartTime; 
                stopped.push([name, remainingPlayTime]); 
                currentTime = nextStartTime; 
            }
        } else {
            // 마지막 과제
            answer.push(name);
            currentTime += playTime; 
        }
    }
    while (stopped.length > 0) {
        const [stoppedName, _] = stopped.pop();
        answer.push(stoppedName);
    }

    return answer;
}