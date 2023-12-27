function getElementsAfter(array, n) {
  // your code here
  let sliced = array.slice(n+1);
  return sliced;
}

let output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2); 
console.log(output); // --> ['d', 'e']
