function getLongestWordOfMixedElements(arr) {
    // your code here
    let stringArr = arr.filter(x => typeof x === 'string');
    if (arr.length < 1 || stringArr.length < 1) return '';
    let longest = stringArr[0];
    for (let i = 0; i < stringArr.length; i++) {
        if (stringArr[i].length > longest.length) {
            longest = stringArr[i];
        }
    }
    return longest;
}

let output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'
