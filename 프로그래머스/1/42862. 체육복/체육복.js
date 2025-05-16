function solution(n, lost, reserve) {
    const realLost = lost.filter((l)=> !reserve.includes(l));
    const realReserve = reserve.filter((r)=> !lost.includes(r));
    realReserve.sort((a,b)=>a-b);
    let lostSet = new Set(realLost);
    
    for(let r of realReserve){
        if(lostSet.has(r-1)){
            lostSet.delete(r-1);
        }else if(lostSet.has(r+1)){
            lostSet.delete(r+1);
        }
    }
    // realReserve.sort((a, b) => a - b);
    // for(let i=0; i<realReserve.length; i++){
    //     if(realLost.length==0) break;
    //     else{
    //         if(realLost.includes(realReserve[i]-1)||
    //                 realLost.includes(realReserve[i]+1)){
    //             let left = realLost.indexOf(realReserve[i] - 1);
    //             let right = realLost.indexOf(realReserve[i] + 1);
    //             let idx2 = left !== -1 ? left : right !== -1 ? right : -1;
    //             if (idx2 !== -1) {realLost.splice(idx2, 1);}
    //         }
    //     }
    // }
    
    
    return n-lostSet.size;
}