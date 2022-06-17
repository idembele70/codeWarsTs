"use strict";
console.log((function validatePin(pin) {
    const pinLength = pin.length;
    const isValidePin = pin.replace(/[^0-9]/, "").length === pin.length;
    return [4, 6].indexOf(pinLength) !== -1 && isValidePin;
})("-12345"));
