// Write your function here
function getIndexOf(character, string) {
    for (let i = 0; i < string.length; i++) {
        if (character === string[i]) {
            return i;
        }
    }
    return -1;
}