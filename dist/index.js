"use strict";
const BreakException = {};
function FirstNonConsecutive(arr) {
    let nonConsecutive = null;
    arr.forEach((num, idx) => {
        try {
            if (num + 1 !== arr[idx + 1] && idx + 1 < arr.length) {
                nonConsecutive = arr[idx + 1];
                throw BreakException;
            }
        }
        catch (error) {
            if (error !== BreakException)
                throw error;
        }
    });
    return nonConsecutive;
}
console.log(FirstNonConsecutive([9, 10, 12, 13, 14, 16, 17, 18]));
