function getSquaredElementsAtProperty(obj, key) {
    // your code here
    if (!obj[key] || Array.isArray(obj[key]) === false) return [];
    let arr = obj[key];
    let newArr = arr.map((index) => Math.pow(index, 2));
    return newArr;
}

let obj = {
  key: [2, 1, 5]
};
let output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]
