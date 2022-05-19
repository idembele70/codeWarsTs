"use strict";
function countPositivesSumNegatives(input) {
    let positiveSum = 0;
    let negativeSum = 0;
    if (input instanceof Array && input.length)
        input.forEach((num) => {
            if (num > 0)
                positiveSum += 1;
            else
                negativeSum += num;
        });
    else
        return [];
    return [positiveSum, negativeSum];
}
const result = countPositivesSumNegatives(null);
console.log(result);
