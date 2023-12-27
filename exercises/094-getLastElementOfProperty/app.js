// Write your function here
let getLastElementOfProperty = (obj, key) => {
    if (!obj[key]) {
        return undefined;
    }
    return obj[key][obj[key].length-1]
}