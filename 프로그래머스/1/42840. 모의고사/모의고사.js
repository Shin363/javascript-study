function solution(answers) {
    var answer = [];
    const len = answers.length;
    let num1 = len<=5?'12345':'12345'.repeat(Math.ceil(len/5));
    let num2 = len<=8?'21232425':'21232425'.repeat(Math.ceil(len/8));
    let num3 = len<=10?'3311224455':'3311224455'.repeat(Math.ceil(len/10));
    let cnt1 = 0; let cnt2 = 0; let cnt3 = 0; let cnt =[]
    for(let i=0; i<answers.length; i++){
        if(answers[i]==num1[i]){cnt1++;}
        if(answers[i]==num2[i]){cnt2++;}
        if(answers[i]==num3[i]){cnt3++;}
    }
    cnt.push(cnt1); cnt.push(cnt2); cnt.push(cnt3);
    cnt.forEach((v,i)=>{
        if(v==Math.max(cnt1,cnt2,cnt3)){answer.push(i+1)}
    })
    return answer;
}