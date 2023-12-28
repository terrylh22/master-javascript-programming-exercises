function getLargestElementAtProperty(obj, key) {
    // your code here
    if (!obj[key] || obj[key].length === 0 || Array.isArray(obj[key]) === false) {
      return [];
    } 
    let arr = obj[key];
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > largest) {
        largest = arr[i];
      }
    }
    return largest;
}

let obj = {
  key: [1, 2, 4]
};
let output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4
