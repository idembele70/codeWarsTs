"use strict";
console.log((function isSquare(n) {
    return Number.isInteger(Math.sqrt(n)) && typeof (Math.pow(n, 2)) === "number";
})(4));
