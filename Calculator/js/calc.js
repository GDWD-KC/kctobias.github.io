//log as a canary 
console.log("calc JS loaded :D");

// global variable to set the result output:
const a = document.getElementById("result");

// used as a demo to log a number and assign a variable uand calling a function.
function aAssign() {
    num = 3 + 5 + 50 + 500 + 87 + 2
    a.innerHTML = num;
    console.log("Variable num represents the number: " + num);
}

// functions for the worlds worst calculator:
function aAddTwoPlusTwo() {
    a.innerHTML = 2 + 2;
}

function aTenDividedByFive() {
    var result = 10 / 5;
    console.log("Ten Divided By Five Is: " + result);
    a.innerHTML = result;
}

function aBigOlNumber(n1, n2) {
    var result = n1 * n2;
    a.innerHTML = result;
}

// functions for second worst calculator:
function multiplyTwoNumbers() {
    var firstNumber = document.getElementById("FirstNumber");
    var secondNumber = document.getElementById("SecondNumber");
    var result = firstNumber.value * secondNumber.value;
    a.innerHTML = result;
    console.log("The product of " + firstNumber.value + " and " + secondNumber.value + " is " + result + "!");
}




