const check = (a: Array<number | string>, x: number | string): boolean =>
  a.findIndex((value) => value === x) !== -1;

console.log(check([1, 2, 0], 0));
