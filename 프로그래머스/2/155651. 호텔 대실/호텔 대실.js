function timeToMinutes(time) {
  const [hour, minute] = time.split(":").map(Number);
  return hour * 60 + minute;
}

function solution(book_time) {
  const converted = book_time.map(([start, end]) => [timeToMinutes(start), timeToMinutes(end)]);

  converted.sort((a, b) => a[0] - b[0]);

  const rooms = []; // 각 방의 퇴실 시간 (청소 포함)

  for (let [start, end] of converted) {
    // 가장 먼저 퇴실한 방 중 재사용 가능한 방 찾기
    let assigned = false;
    for (let i = 0; i < rooms.length; i++) {
      if (rooms[i] <= start) {
        // 해당 방 재사용 (퇴실시간 갱신)
        rooms[i] = end + 10; 
        assigned = true;
        break;
      }
    }

    if (!assigned) {
      rooms.push(end + 10);
    }
    rooms.sort((a, b) => a - b);
  }

  return rooms.length;
}
