"use strict";
console.log((function isTriangle(a, b, c) {
    const biggestSide = Math.max(a, b, c);
    const sumOfSmaller = [a, b, c]
        .sort((a, b) => a - b)
        .slice(0, -1)
        .reduce((acc, cur) => acc + cur, 0);
    return biggestSide < sumOfSmaller;
})(1, 10, 9));
