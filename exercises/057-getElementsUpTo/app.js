function getElementsUpTo(array, n) {
  // your code here
  let sliced = array.slice(0, n);
  return sliced;
}

let output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3) 
console.log(output); // --> ['a', 'b', 'c']
