function solution(id_list, report, k) {
    var answer = [];
    const complicateNum = {};
    const reportMap = {};
    id_list.forEach(id => {
        reportMap[id] = []; complicateNum[id] = 0;});
    const uniqueReports = [...new Set(report)];
    uniqueReports.forEach((v,i)=>{
        let [id,complained] = v.split(" "); //신고한 사람, 신고받은사람
        reportMap[complained].push(id);
        })
    for (let reported in reportMap){
        if(reportMap[reported].length>=k){
            reportMap[reported].forEach((v)=>{
                complicateNum[v]++;
            })
        }
    }
    
    id_list.forEach((id)=>{
        answer.push(complicateNum[id]);
    })
    return answer;
}