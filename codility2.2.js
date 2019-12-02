function solution(A, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  for(var i = 0;i < K;i++) {
      A.splice(0, 0, A.pop());
  }
  return A;
}

function solution2(A, K) {
  if(A.length === 0) {
    return A
  }
  K = K % A.length;
  return A.slice(-K).concat(A.slice(0, -K))
}

var a = [3, 8, 9, 7, 6]

console.log(solution2(a, 3))