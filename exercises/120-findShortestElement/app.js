function findShortestElement(arr) {
    // your code here
    if (arr.length < 1) return "";
    let shortest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length < shortest) {
            shortest = arr[i];
        }
    }
    return shortest;
}

let output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'