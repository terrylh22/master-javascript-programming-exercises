function getSumOfAllElementsAtProperty(obj, key) {
    // your code here
    let arr = obj[key];
    if (!arr || arr.legnth < 1 || !Array.isArray(arr)) return 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

let obj = {
    key: [4, 1, 8]
};
let output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13
