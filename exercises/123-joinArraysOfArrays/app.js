function joinArrayOfArrays(arr) {
  // your code here
  let final = [];
  for (let i = 0; i < arr.length; i++) {
    final = final.concat(arr[i]);
  }
  return final;
}

let output = joinArrayOfArrays([
  [1, 4],
  [true, false],
  ['x', 'y'],
]);

console.log(output); // --> [1, 4, true, false, 'x', 'y']
