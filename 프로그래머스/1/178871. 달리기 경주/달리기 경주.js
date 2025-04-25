function solution(players, callings) {
    // callings를 돌면서 안에서는 players를 돌고
    // callings[n]===players[i]이면 players를[i]와 players를[i-1]를 바꿔준다.
    // for(i=0; i<callings.length; i++){
    //     for(j=0; j<players.length; j++){
    //         if(callings[i]===players[j]){
    //             temp=players[j];
    //             players[j]=players[j-1];
    //             players[j-1]=temp;
    //             break;
    //         }
    //     }
    // }
    
    //시간 복잡도 문제로 Map과 Set활용
    let newMaps = new Map();
    let temp;
    for(let i=0; i<players.length; i++){
        newMaps.set(players[i],i);
    }
    // console.log(newMaps);
    for(const name of callings){
        const idx = newMaps.get(name);
        temp=players[idx-1];
        players[idx-1]=name;
        players[idx]=temp;
        //Map도 업데이트 해줘야 함
        newMaps.set(name, idx-1);
        newMaps.set(temp, idx);
    }
    
    return players;
}