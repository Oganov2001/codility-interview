function solution(N, A) {
  let counters = new Array(N).fill(0);
  let startLine = 0;
  let currentMax = 0;
  A.forEach(instruction => {
    let index = instruction - 1;
    if (instruction > N) startLine = currentMax;
    else if (counters[index] < startLine) counters[index] = startLine + 1;
    else counters[index] += 1;
    if (instruction <= N && counters[index] > currentMax) currentMax = counters[index];
  });
  for (let i = 0; i < counters.length; i++) {
    if (counters[i] < startLine) counters[i] = startLine;
  }
  return counters;
}

console.log(solution(5, [3, 4, 4, 6, 1, 4, 4]));
