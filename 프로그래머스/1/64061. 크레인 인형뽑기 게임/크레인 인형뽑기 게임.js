function solution(board, moves) {
    var answer = 0;
    let stacks = [];
    moves.forEach((move)=>{
        for(let i=0; i<board.length; i++){
            if(board[i][move-1]!==0){
                let tmp = board[i][move-1];
                board[i][move-1]=0;
                if(stacks[stacks.length-1]==tmp){
                    stacks.pop(); answer+=2;
                }else{stacks.push(tmp)}
                break;
            }
        }
    })
    // let stacks = Array.from({length:board.length},(v)=>[]) 
    // let tmpStack = [];
    // for(let i=board.length-1; i>=0; i--){
    //     for(let j=0; j<board[0].length; j++){
    //         if(board[i][j]!==0){
    //             stacks[j].push(board[i][j])
    //         }
    //     }
    // }
    // for(let move of moves){
    //     let picked = stacks[move-1].pop();
    //     if(picked){
    //         if(tmpStack.length>0&&tmpStack[tmpStack.length-1]==picked){
    //             tmpStack.pop(); answer+=2;
    //         }else{
    //             tmpStack.push(picked);
    //         }
    //     }
    // }
    return answer;
}