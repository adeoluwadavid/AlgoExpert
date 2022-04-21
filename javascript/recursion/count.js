"use strict";
function countDownFrom(number) {
    if (number === 0) {
        return;
    }
    console.log(number);
    countDownFrom(number - 1);
}
countDownFrom(5);
