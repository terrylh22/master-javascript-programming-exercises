function removeArrayValues(obj) {
    // your code here
    for (key in obj) {
        if (Array.isArray(obj[key])) {
            delete obj[key];
        }
    }
}