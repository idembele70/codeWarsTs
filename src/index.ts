function createPhoneNumber(numbers: number[]): string {
  return numbers.join('').replace(/(.{3})(.{3})(.*)/, '($1) $2-$3')
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))