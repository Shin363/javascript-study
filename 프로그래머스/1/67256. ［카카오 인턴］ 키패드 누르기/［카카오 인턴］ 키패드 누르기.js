function getAbs(x1,x2,y1,y2){
    return Math.abs(x1-y1)+Math.abs(x2-y2);
}
function solution(numbers, hand) {
    var answer = '';
    const keypads = {"1":[0,0],"2":[0,1],"3":[0,2],
                    "4":[1,0],"5":[1,1],"6":[1,2],
                    "7":[2,0],"8":[2,1],"9":[2,2],
                    "*":[3,0],"0":[3,1],"#":[3,2],};
    let leftCur = [3,0];
    let rightCur = [3,2];
    
    numbers.forEach((number,i)=>{
        number = String(number);
        let [x,y] = keypads[number];
        if(y==0){leftCur=[x,y]; answer+="L"}
        else if(y==2){rightCur=[x,y]; answer+="R"}
        else if(y==1){
            let leftDistance = getAbs(leftCur[0],leftCur[1],x,y);
            let rightDistance = getAbs(rightCur[0],rightCur[1],x,y);
            if(leftDistance==rightDistance){
                if(hand=="right"){
                    rightCur=[x,y]; answer+="R"
                }else{
                    leftCur=[x,y]; answer+="L"
                }
            }
            else if(leftDistance>rightDistance){
                rightCur=[x,y]; answer+="R"
            }
            else{
                leftCur=[x,y]; answer+="L"
            }
        }
    })
    return answer;
}