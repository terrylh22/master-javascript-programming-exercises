// Write your function here
let getNthElementOfProperty = (obj, key, num) => {
    if(!obj[key]) {
        return undefined;
    }
    return obj[key][num];
}