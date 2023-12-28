function getEvenElementsAtProperty(obj, key) {
    // your code here
    if (!obj[key] || Array.isArray(obj[key]) === false) {
      return [];
    }
    let arr = [];
    for (let i = 0; i < obj[key].length; i++) {
      if (obj[key][i]%2 === 0) {
        arr.push(obj[key][i]);
      }
    }
    return arr;
}

let obj = {
  key: [1000, 11, 50, 17]
};
let output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]
