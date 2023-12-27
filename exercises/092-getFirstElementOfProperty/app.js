// Write your function here
let getFirstElementOfProperty = (obj, key) => {
    if (!obj[key]) {
        return undefined;
    }
    return obj[key][0];
}