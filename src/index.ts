function fakeBin(x: string): string {
  return x
    .split("")
    .map(Number)
    .map((x) => (x < 5 ? 0 : 1))
    .join(``);
}

console.log(fakeBin("45385593107843568"));
