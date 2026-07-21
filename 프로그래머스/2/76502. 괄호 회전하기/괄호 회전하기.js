// 스택을 이용하여 푸는 문제
function solution(s) {
  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    const rotated = s.slice(i) + s.slice(0, i);

    if (isValid(rotated)) {
      answer++;
    }
  }

  return answer;
}

function isValid(str) {
  const stack = [];

  const pair = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (const bracket of str) {
    // 여는 괄호라면 스택에 저장
    if (bracket === "(" || bracket === "[" || bracket === "{") {
      stack.push(bracket);
      continue;
    }

    // 닫는 괄호인데 비교할 여는 괄호가 없는 경우
    if (stack.length === 0) {
      return false;
    }

    // 가장 최근에 들어온 여는 괄호와 짝이 맞는지 확인
    if (stack.pop() !== pair[bracket]) {
      return false;
    }
  }

  // 여는 괄호가 남아 있으면 올바른 괄호가 아님
  return stack.length === 0;
}