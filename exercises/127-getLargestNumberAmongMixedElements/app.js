function getLargestNumberAmongMixedElements(arr) {
    // your code here
    let numbers = arr.filter(x => typeof x === 'number');
    if (arr.length < 1 || numbers.length <1) return 0;
    let largest = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }
    return largest;
}

let output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5
