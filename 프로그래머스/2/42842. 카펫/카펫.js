function solution(brown, yellow) {
    var answer = [0,0];
    let max = 0;
    for(let i=1; i<=Math.floor(Math.sqrt(yellow)); i++){
        if(yellow%i==0){
            let width = yellow/i;
            let height = i;
            let totalWidth = width + 2;
            let totalHeight = height + 2;
            if((totalWidth*totalHeight-yellow)== brown){
                return [totalWidth,totalHeight]}
        }
    }
}