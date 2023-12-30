function findSmallestNumberAmongMixedElements(arr) {
  // your code here
  let newArr = arr.filter((x) => typeof x === 'number');
  if (arr.length < 1 || newArr.length < 1) return 0;
  let smallest = newArr[0];
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] < smallest) {
      smallest = newArr[i];
    }
  }
  return smallest;
 }

let output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4
