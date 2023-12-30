// Write your function here
function countAllCharacters(string) {
    let obj = {};
    for (let i = 0; i < string.length; i++) {
        if (obj[string[i]]) obj[string[i]] += 1;
        else obj[string[i]] = 1;
    }
    return obj;
}