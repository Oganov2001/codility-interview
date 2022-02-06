function solution(N, M) {
  return N / findGCD(N, M);
}

function findGCD(a, b) {
  if (b === 0) {
    return a
  } else {
    return findGCD(b, a % b);
  }
}

console.log(solution(10, 4));
console.log(solution(9, 6));
console.log(solution(10, 11));
