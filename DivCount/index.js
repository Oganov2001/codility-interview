function solution(A, B, K) {
  let nStart = Math.ceil(A / K);
  let nEnd = Math.floor(B / K);
  return nEnd - nStart + 1;
}

console.log(solution(6, 11, 2));
