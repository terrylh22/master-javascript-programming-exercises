function joinThreeArrays(arr1, arr2, arr3) {
  // your code here
  let secondChunk = arr2.concat(arr3);
  let finalArr = arr1.concat(secondChunk);

  return finalArr;
}