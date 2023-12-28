function getSmallestElementAtProperty(obj, key) {
    // your code here
    if (!obj[key] || Array.isArray(obj[key]) === false || obj[key].length === 0) return [];
    let arr = [];
    let smallest = obj[key][0];
    for (let i = 1; i < obj[key].length; i++) {
      if (obj[key][i] < smallest) {
        smallest = obj[key][i];
      }
    }
    return smallest;
}

let obj = {
  key: [2, 1, 5]
};
let output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1
