// attacks[마지막][0]값 만큼 for loop 돌리는데 마지막 체력이 0보다 작으면 -1을 반환, current_health가 health보다 클 순 없다.
// 0초부터 1초마다 current_health+=bandage[1]인데, bandage[0] 시간동안 만약에 "현재 시간"이 attacks[0]이면 연속 성공은 다시 0으로 회귀, current_health -= attacks[1] 이다.
// 근데 만약 연속 성공이 bandage[0]이랑 같으면 current_health += bandage[2]로 추가 회복.

function solution(bandage, health, attacks) {
    let current_health = health; //현재 체력
    let num_success = 0; //성공 횟수
    let current_time = 1; //현재 시간
    let num = 0;
    for(; current_time<=attacks[attacks.length-1][0]; current_time++){
        //공격X
        if(current_time!==attacks[num][0]){
            current_health = current_health+bandage[1]<=health?
                current_health+bandage[1]:health;
            num_success++;
            //연속 성공
            if(num_success==bandage[0]){
                current_health = current_health+bandage[2]<=health? 
                    current_health+bandage[2]:health;
                num_success = 0;
            }
        }
        //공격O
        else{
            num_success = 0;
            current_health -= attacks[num][1];
            if (current_health <= 0) return -1; // 즉시 사망 처리
            num++;
        }
        
    }
    return current_health;
}