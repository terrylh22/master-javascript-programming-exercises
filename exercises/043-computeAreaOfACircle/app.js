function computeAreaOfACircle(radius) {
    // your code here
    let squaredRadius = Math.pow(radius, 2);
    return squaredRadius * Math.PI;
}

let output = computeAreaOfACircle(4);
console.log(output); // --> 50.26548245743669
