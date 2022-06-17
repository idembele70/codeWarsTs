console.log(
  (function validatePin(pin: string): boolean {
    return /\D/.test(pin) === false && (pin.length === 4 || pin.length === 6);
  })("-12345")
);
