"use strict";
function inArray(a1, a2) {
    const r = [];
    const a2ToStr = a2.join(" ");
    a1.forEach((str) => {
        const strRegex = new RegExp(str, "ig");
        if (strRegex.test(a2ToStr))
            r.push(str);
    });
    return r.sort();
}
var a2 = ["lively", "alive", "harp", "sharp", "armstrong"];
var a1 = ["arp", "live", "strong"];
console.log(inArray(a1, a2));
