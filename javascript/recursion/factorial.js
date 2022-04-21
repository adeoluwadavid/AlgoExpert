"use strict";
function factorial(number) {
    if (number === 0) {
        return 1;
    }
    else {
        let result = number * factorial(number - 1);
        return result;
    }
}
console.log(factorial(5));
