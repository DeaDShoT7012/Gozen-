function findMissingNumber(arr) {
  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((acc, num) => acc + num, 0);

  return expectedSum - actualSum;
}

const inputArray1 = [1, 2, 3, 4, 6, 7, 8];
console.log(findMissingNumber(inputArray1));

const inputArray2 = [1, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(findMissingNumber(inputArray2));
