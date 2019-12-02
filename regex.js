function solution(n) {
  // write your code in JavaScript (Node.js 8.9.4)
  let bin = n.toString(2);
  let group = bin.match(/1?(0+)1/g);
  if(bin && group) {
    let final = group.map(e => e.replace(/1/g, "").length);
    return Math.max(...final);
  }
  return 0;
}

console.log(solution(529));
