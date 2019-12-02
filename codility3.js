// A non-empty zero-indexed array A consisting of N integers is given. The array contains an odd number of elements, and each element of the array can be paired with another element that has the same value, except for one element that is left unpaired.
// For example, in array A such that:
// A[0] = 9 A[1] = 3 A[2] = 9 A[3] = 3 A[4] = 9 A[5] = 7 A[6] = 9
// the elements at indexes 0 and 2 have value 9,
// the elements at indexes 1 and 3 have value 3,
// the elements at indexes 4 and 6 have value 9,
// the element at index 5 has value 7 and is unpaired.

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  var p = A.pop();
  if (A.includes(p)) {
    delete A[A.indexOf(p)]
    return solution(A)
  } else {
    if (A.length === 1) {
      return A[0];
    }
    return p;
  }

}

function solution2(A) {
  var result = 0;
  for(var i of A) {
    result ^= i;
  }
  return result;
}

var a = [90,7,9,7,9,3,9,3,9]
var b = [9,3,9,3,9,7,9]

console.log(solution2(b))