// Write your function here
function select(arr, obj) {
    let newObj = {};
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) newObj[arr[i]] = obj[arr[i]] 
    }
    return newObj;
}