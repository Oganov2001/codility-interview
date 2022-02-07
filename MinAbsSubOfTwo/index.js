function solution(A) {
  let minAbsSumOfTwo = Number.MAX_SAFE_INTEGER;
  A.sort(function(a, b) {return a - b});
  let head = 0;
  let tail = A.length - 1;
  while (head <= tail) {
    minAbsSumOfTwo = Math.min(minAbsSumOfTwo, Math.abs(A[head] + A[tail]));
    if (A[head] + A[tail] < 0) head++;
    else tail--;
  }
  return minAbsSumOfTwo
}

console.log(solution([-7, 3, -1, 5, -11, 4, -9, 14, 17, -2]));
console.log(solution([8, 3, 5, 16, 11]));
console.log(solution([-7, -5, -6, -2, -9]));
console.log(solution([-7, 3, -6, 1, 0, -9]));
console.log(solution([-22, 3, 4, 5]));
