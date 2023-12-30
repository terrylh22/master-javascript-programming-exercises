function getLengthOfLongestElement(arr) {
    // Your code here
    if (arr.length === 0) return 0;

    let longest = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longest) {
            longest = arr[i].length;
        }
    }
    return longest;
}

let output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5
