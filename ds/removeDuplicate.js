const removeDuplicates = (arr) => {
    if (arr.length === 0) return 0;
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
      if (arr[j] !== arr[i]) {
        i++;
        arr[i] = arr[j];
      }
    }
    return i + 1;
  };
  
  const arr = [1, 1, 2, 2, 3, 4, 4, 5];
  const length = removeDuplicates(arr);
  console.log(length);
  console.log(arr.slice(0, length));

  const arr2 = [1, 1, 1, 2, 2, 3, 3, 3, 4, 5];
  const length2 = removeDuplicates(arr2);
  console.log(length2);
  console.log(arr2.slice(0, length2));