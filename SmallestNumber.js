
// Write a program to Find the smallest and second smallest element in an array

var arr = [45,34,53,55,64,76,23,88,76,38,89,98,99,43,42,65,68];
var min = Infinity, secondMin = Infinity;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
        secondMin = min;
        min = arr[i];
    } else if (arr[i] < secondMin) {
        secondMin = arr[i];
    }
}
console.log(`Smallest number : ${min}`)
console.log(`Second smallest number: ${secondMin}`)

