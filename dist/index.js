"use strict";
function solution(roman) {
    const numeralToNumber = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    const total = roman.split("").reduce((acc, cur, idx, array) => {
        if (numeralToNumber[`${cur}`] < numeralToNumber[`${array[idx + 1]}`])
            return acc - numeralToNumber[`${cur}`];
        return acc + numeralToNumber[`${cur}`];
    }, 0);
    return total;
}
console.log(solution("MMVIII"));
