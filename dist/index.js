"use strict";
const longest = (s1, s2) => {
    return s1
        .concat(s2)
        .split("")
        .filter((letter, idx, arr) => idx === arr.indexOf(letter))
        .sort()
        .join("");
};
const a = "xyaabbbccccdefww";
const b = "xxxxyyyyabklmopq";
console.log(longest(a, b));
