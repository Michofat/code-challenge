function solution(N) {
  //convert N in decimal to binary
  const binaryConversion = N.toString(2);

  // create variable maximumGap to record the maxGap
  //create variable gapCounted to count the number of zeros between 1s
  let maximumGap = 0;
  let gapCounted = 0;

  for (let i = 0; i < binaryConversion.length; i++) {
    if (binaryConversion[i] == 1) {
      if (gapCounted > maximumGap) {
        maximumGap = gapCounted;
      }
      gapCounted = 0;
    } else if (binaryConversion[i] == 0) {
      gapCounted++;
    }
  }
  return maximumGap;
}

console.log(solution(561892));
