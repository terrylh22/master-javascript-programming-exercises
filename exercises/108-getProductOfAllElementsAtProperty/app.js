function getProductOfAllElementsAtProperty(obj, key) {
    // your code here
    if (!obj[key] || !Array.isArray(obj[key]) || obj[key].length < 1) return 0;
    let product = 1;
    for (i in obj[key]) {
      product *= obj[key][i];
    }
    return product;
}

let obj = {
  key: [1, 2, 3, 4]
};
let output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24
