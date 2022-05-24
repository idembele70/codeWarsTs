const check = (a: Array<number | string>, x: number | string): boolean =>
  a.find((value) => value === x) === x;

console.log(check([1, 2, 0], 0));
