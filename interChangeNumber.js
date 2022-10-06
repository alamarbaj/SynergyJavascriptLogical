// Write a Program to interchange first and last digit of a number.


let num = prompt("Please input a number");
let temp = "";
let answer = "";

for(let i = 0 ; i < num.length; i++) {
    if (i === 0) temp = num[i]; 
    else if (i === num.length - 1) {
       
        answer = answer + temp;
        answer = num[i] + answer;
    }
    else answer = answer + num[i];
}
document.write(answer);