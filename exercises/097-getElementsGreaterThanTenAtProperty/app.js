// Write your function here
function getElementsGreaterThan10AtProperty(obj, key) {
    if (!obj[key]) return [];
    let arr = [];
    for (let i = 0; i < obj[key].length; i++) {
        if (obj[key][i] > 10) {
            arr.push(obj[key][i]);
        }
    }
    return arr;
}