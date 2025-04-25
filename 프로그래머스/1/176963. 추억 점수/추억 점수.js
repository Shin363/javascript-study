function solution(name, yearning, photo) {
    var answer = [];
    //객체에 저장
    const photoObj = {};
    name.forEach((value,index)=>{
        photoObj[value]=yearning[index];
    })
    for(let i=0;i<photo.length;i++){
        //초기화 필수
        answer[i]=0;
        for(let item of photo[i]){
            //photoObj[item]이 없으면 0넣기.
            answer[i] += photoObj[item] ?? 0;
        }
    }
    return answer;
}