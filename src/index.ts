function nextBigger(n: number): number {
  const nToArrayReversed = `${n}`.split('').reverse()
  let itemsToReverse: string[] = []
  let notReversedPart: string[] = []
  for (let i = 0; i < nToArrayReversed.length - 1; i++) {
    const currentItem = nToArrayReversed[i];
    const nextItem = nToArrayReversed[i + 1];
    if (currentItem > nextItem) {
      itemsToReverse = nToArrayReversed.slice(0, i + 2)
      notReversedPart = nToArrayReversed.slice(i + 2)
      break;
    }
  }
  if (itemsToReverse.length === 0)
    return -1
  return stringToNumber(notReversedPart,nextBigInt(itemsToReverse))
}

console.log(nextBigger(59884848459853)) // 83559
// console.log(nextBigger(123456789), 123456798);
// console.log(nextBigger(1234567890), 1234567908);
// console.log(nextBigger(9876543210), -1);
// console.log(nextBigger(9999999999), -1);
// console.log(nextBigger(59884848459853), 59884848483559);

// console.log(nextBigger(12), 21);
// console.log(nextBigger(513), 531);
// console.log(nextBigger(2017), 2071);
// console.log(nextBigger(414), 441);
// console.log(nextBigger(144), 414);

function stringToNumber(a1:string[], a2: string[]):number {
  return parseInt(`${a1.reverse().join('')}${a2.join('')}`)
}
function nextBigInt(array:string[]):string[] {
  let lastNumber = array.reverse()[0]
  let currentNumber
  for (let i = 1; i < array.length; i++) {
    currentNumber = array.sort()[i];
    if(currentNumber > lastNumber) {
      array.splice(i,1)
      break
    }
    continue
  }
  console.log(`${currentNumber}${[...array].sort().join('')}`.split(''))
  return `${currentNumber}${[...array].sort().join('')}`.split('')
}