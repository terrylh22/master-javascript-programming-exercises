// Write your function here
function computeAverageOfNumbers(input) {
    if (input.length === 0) {
        return 0;
    }

    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        sum += input[i];
    }

    return (sum / input.length);
}