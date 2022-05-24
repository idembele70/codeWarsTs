"use strict";
const check = (a, x) => a.find((value) => value === x) === x;
console.log(check([1, 2, 0], 0));
