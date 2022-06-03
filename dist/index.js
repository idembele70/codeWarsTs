"use strict";
class Kata {
    static getCount(str) {
        return [...str].filter((char) => /[aeiou]/i.test(char)).length;
    }
}
console.log(Kata.getCount("Hello World"));
