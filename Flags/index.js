function solution(A) {
  let peaks = new Array(A.length);
  let nextPeak = A.length;
  peaks[A.length - 1] = nextPeak;
  for (let i = A.length - 2; i > 0; i--) {
    if (A[i-1] < A[i] && A[i+1] < A[i]) {
      nextPeak = i;
    }
    peaks[i] = nextPeak;
  }
  peaks[0] = nextPeak;

  let currentGuess = 0;
  let nextGuess = 0;
  while (canPlaceFlags(peaks, nextGuess)) {
    currentGuess = nextGuess;
    nextGuess += 1;
  }
  return currentGuess;
}

function canPlaceFlags(peaks, flagsToPlace) {
  let currentPosition = 1 - flagsToPlace;
  for (let i = 0; i < flagsToPlace; i++) {
    if (currentPosition + flagsToPlace > peaks.length - 1) {
       return false;
    }
    currentPosition = peaks[currentPosition + flagsToPlace];
  }
  return currentPosition < peaks.length;
}

console.log(solution([1, 5, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2]));
