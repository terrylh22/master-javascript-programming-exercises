function getLongestElement(arr) {
    // your code here
    if (arr.length < 1) return '';
    let longest = "";
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longest.length) {
            longest = arr[i];
        }
    }
    return longest;
}

let output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'
