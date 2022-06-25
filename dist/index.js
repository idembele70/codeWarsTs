"use strict";
function inArray(a1, a2) {
    const r = [];
    a1.forEach((str) => {
        if (a2.find((a2str) => a2str.indexOf(str) !== -1))
            r.push(str);
    });
    return r.sort();
}
var a2 = ["lively", "alive", "harp", "sharp", "armstrong"];
var a1 = ["arp", "live", "strong"];
console.log(inArray(a1, a2));
