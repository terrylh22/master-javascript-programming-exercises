// Write your function here
let getElementsThatEqual10AtProperty = (obj, key) => {
    let newArr = [];
    if (!obj[key]) return [];
    for (let i = 0; i < obj[key].length; i++) {
        if (obj[key][i] === 10) {
            newArr.push(10);
        }
    }
    return newArr;
}