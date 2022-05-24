"use strict";
const check = (a, x) => a.findIndex((value) => value === x) !== -1;
console.log(check([1, 2, 0], 0));
