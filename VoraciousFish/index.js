function solution(A, B) {
  let stack = [];
  let survivors = 0;
  for (i = 0; i < A.length; i++) {
    let weight = A[i];
    if (B[i] === 1) {
      stack.push(weight);
    } else {
      let weightDown = stack.length === 0 ? -1 : stack.pop();
      while (weightDown !== -1 && weightDown < weight)
        weightDown = stack.length === 0 ? -1 : stack.pop();
      if (weightDown === -1)
        survivors += 1;
      else
        stack.push(weightDown);
    }
  }

  return survivors + stack.length;
}

console.log(solution([4, 8, 2, 6, 7], [0, 1, 1, 0, 0]));

console.log(solution([4, 3, 2, 1, 5], [0, 1, 0, 0, 0]));
