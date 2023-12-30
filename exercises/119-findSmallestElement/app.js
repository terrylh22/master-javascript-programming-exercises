function findSmallestElement(arr) {
    // your code here
    if (arr.length < 1) return 0;
    let smallest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    return smallest;
}

let output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1