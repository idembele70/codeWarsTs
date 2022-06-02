"use strict";
function fakeBin(x) {
    const res = [];
    for (let i = 0; i < x.length; i++) {
        const element = x[i];
        if (parseInt(element) < 5)
            res.push("0");
        else
            res.push("1");
    }
    return res.join("");
}
console.log(fakeBin("45385593107843568"));
