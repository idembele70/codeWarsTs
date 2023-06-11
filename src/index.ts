function squareSum(numbers: number[]): number {
  return numbers.reduce(
    (acc,cur)=> acc + cur ** 2,0
  );
}
console.log(squareSum([1,2,2]))