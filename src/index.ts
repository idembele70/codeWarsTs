function fakeBin(x: string): string {
  return x.replace(/[0-9]/g, (v) => (+v < 5 ? "0" : "1"));
}

console.log(fakeBin("45385593107843568"));
