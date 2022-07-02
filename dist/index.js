"use strict";
function splitAllEvenNumbers(numbers, way) {
    const newNumbers = [];
    numbers.forEach((num) => {
        if (num % 2 === 0) {
            const middle = num / 2;
            if (way === 0) {
                if (middle % 2 !== 0)
                    newNumbers.push(middle, middle);
                else
                    newNumbers.push(middle - 1, middle + 1);
            }
            else if (way === 1) {
                newNumbers.push(1, num - 1);
            }
            else if (way === 2) {
                let highestOddFromNum = middle;
                while (highestOddFromNum % 2 === 0) {
                    highestOddFromNum /= 2;
                }
                newNumbers.push(...Array(num / highestOddFromNum).fill(highestOddFromNum));
            }
            else
                newNumbers.push(...Array(num).fill(1));
        }
        else
            newNumbers.push(num);
    });
    return newNumbers;
}
console.log(splitAllEvenNumbers([1, 10, 1, 3], 3));
