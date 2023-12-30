function findShortestWordAmongMixedElements(arr) {
    // your code here
    if (arr.length < 1) return '';
    let newArr = arr.filter((x) => typeof x === 'string');
    if (newArr.length < 1) return '';
    let shortest = newArr[0];
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] < shortest.length) {
            shortest = newArr[i];
        }
    }
    return shortest;
}

let output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'
