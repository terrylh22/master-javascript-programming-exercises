// Write your function here
let getOddLengthWordsAtProperty = (obj, key) => {
    if (!obj[key]) return [];
    let arr = [];
    for (i = 0; i < obj[key].length; i++) {
        if ((obj[key][i].length)%2 !== 0) {
            arr.push(obj[key][i]);
        }
    }
    return arr;
}