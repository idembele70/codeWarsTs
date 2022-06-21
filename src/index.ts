const longest = (s1: string, s2: string): string => {
  return s1
    .concat(s2)
    .split("")
    .filter((letter, idx, arr) => idx === arr.indexOf(letter))
    .sort()
    .join("");
};
const a: string = "xyaabbbccccdefww";
const b: string = "xxxxyyyyabklmopq";
console.log(longest(a, b));
