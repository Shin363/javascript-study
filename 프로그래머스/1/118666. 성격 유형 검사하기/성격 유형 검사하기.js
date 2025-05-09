function solution(survey, choices) {
    var answer = '';
    const selectScore = [3,2,1,0,1,2,3];
    const pairs = ["RT","CF","JM","AN"];
    const categories = Object.fromEntries([..."RTCFJMAN"].map((char)=>[char,0]));
    survey.forEach((pair,i)=>{
        const [disagree,agree] = pair;
        const choice = choices[i];
        const score = selectScore[choice-1];
        
        if(choice < 4) categories[disagree] += score;
        else if(choice > 4) categories[agree] += score;
    })
    
    return pairs
        .map(([a,b])=>
        (categories[a] >= categories[b]? a : b))
        .join("");
    
    // const category = ["R","T","C","F","J","M","A","N"];
    // const myCategory = {};
    // for (let i=0; i<category.length; i++){
    //     myCategory[category[i]]=0;
    // }
    // for(let i=0; i<survey.length; i++){
    //     const target = choices[i]<=3?survey[i][0]:survey[i][1];
    //     if(choices[i]!=4){
    //         myCategory[target] += selectScore[choices[i]-1];
    //     }
    //     else{
    //         continue;
    //     }
    // }
    // for(let j=0; j<4; j++){
    //     if(myCategory[category[2*j]]>=myCategory[category[2*j+1]]){
    //         answer+= category[2*j];
    //     }
    //     else {
    //         answer+= category[2*j+1];
    //     }
    // }
    
    
    //return answer;
}