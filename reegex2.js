function solution(a) {
  let sorted = a.sort(function(a, b){return a-b});
  var last = sorted[sorted.length - 1];
  for(var i=last; i > 0; i--) {
    // console.log(i);
    if(!a.includes(i)) {
      return i
    }
  }
  return last+1 > 0 ? last+1 : 1
}

function range(start, end) {
  if(start === end) return [start];
  return [start, ...range(start + 1, end)];
}

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

var arr1 =  [1, 3, 6, 4, 1, 2];
var arr2 = [1, 2, 3];
let arr3 = [-1, -3];


let arr4 = range(102, 200);
// console.log(arr4);
// console.log(arr4[arr4.length - 1])
console.log(solution(shuffle(arr4)))