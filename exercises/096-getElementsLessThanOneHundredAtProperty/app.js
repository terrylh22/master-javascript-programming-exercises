// Write your function here
let getElementsLessThan100AtProperty = (obj, key) => {
    if (!obj[key]) return [];
    let newArr = [];
    for (let i = 0; i < obj[key].length; i++) {
        if (obj[key][i] < 100) {
            newArr.push(obj[key][i]);
        }
    }
    return newArr;
}