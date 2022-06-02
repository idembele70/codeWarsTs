"use strict";
function fakeBin(x) {
    return x.replace(/[0-9]/g, (v) => (+v < 5 ? "0" : "1"));
}
console.log(fakeBin("45385593107843568"));
