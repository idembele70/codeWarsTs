console.log(
  (function isSquare(n: number): boolean {
    return Number.isInteger(Math.sqrt(n)) && typeof (n ** 2) === "number";
  })(4)
);
