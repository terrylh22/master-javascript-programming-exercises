function repeatString(string, num) {
    // your code here
    let repeat = "";
    for (let i = num; i > 0; i--) {
        repeat += string;
    }
    return repeat;
}

let output = repeatString('code', 3);
console.log(output); // --> 'codecodecode'
