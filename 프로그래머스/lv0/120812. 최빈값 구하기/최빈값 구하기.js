function solution(array) {
    var answer = 0;
    var max=0;
    //array 최댓값만큼 길이를 가진 배열 생성
    var count = new Array(Math.max(...array)+1).fill(0);
    for(var i=0;i<array.length;i++){
        count[array[i]]++; //array값을 인덱스로 하는 배열 채우기
    }
    //arrayList의 최댓값에 해당하는 인덱스 출력
    // 만약 indexOf와 lastIndexOf가 지칭하는 값이 같으면, -1 출력 (최빈값이 중복인 경우 확인)
    if (count.indexOf(Math.max(...count)) !== count.lastIndexOf(Math.max(...count))) {
        return -1;
    } else {
        return count.indexOf(Math.max(...count));
    };
}