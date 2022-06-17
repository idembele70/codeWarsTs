console.log(
  (function validatePin(pin: string): boolean {
    const pinLength: number = pin.length;
    const isValidePin: boolean =
      pin.replace(/[^0-9]/, "").length === pin.length;
    return [4, 6].indexOf(pinLength) !== -1 && isValidePin;
  })("-12345")
);
