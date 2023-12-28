function getAverageOfElementsAtProperty(obj, key) {
  // your code here
  if (!obj[key] || obj[key].length === 0 || Array.isArray(obj[key]) === false) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < obj[key].length; i++) {
    sum += obj[key][i];
  }
  return (sum / obj[key].length);
}