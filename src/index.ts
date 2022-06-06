const BreakException = {};
function FirstNonConsecutive(arr: number[]): null | number {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const nextElement = arr[i + 1];
    if (element + 1 !== nextElement) return nextElement;
  }
  return null;
}

console.log(FirstNonConsecutive([9, 10, 12, 13, 14, 16, 17, 18]));
