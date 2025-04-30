function solution(today, terms, privacies) {
    var answer = [];
    let tObj={};
    let [tYear,tMonth,tDay] = today.split(".");
    for(let i=0; i<terms.length; i++){
        const [key,value] = terms[i].split(' ');
        tObj[key]=value;
    }
    
    for(let i=0; i<privacies.length; i++){
        let [dateStr,code] = privacies[i].split(" ");
        let [year,month,day] = dateStr.split(".");
        month = Number(month)+Number(tObj[code]);
        if(toDays(tYear,tMonth,tDay)>=toDays(year,month,day)){
            answer.push(i+1);
        }
    }
    return answer;
}
function toDays(y, m, d) {
    return y * 12 * 28 + m * 28 + d;
}