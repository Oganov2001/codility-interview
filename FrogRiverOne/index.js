function solution(X, A) {
  let river_positions = new Array(X + 1).fill(false);
  for (let time = 0; time < A.length; time++) {
    let pos = A[time];
    if (!river_positions[pos]) {
      river_positions[pos] = true;
      X -= 1;
      if (X === 0) return time;
    }
  }
  return -1;
}

console.log(solution(5, [1, 3, 1, 4, 2, 3, 5, 4]));

console.log(solution(1, [1, 1, 1]));

console.log(solution(3, [1, 2, 1]));
