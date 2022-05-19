type Res = [number, number] | [];
function countPositivesSumNegatives(input: any): Res {
  let positiveSum: number = 0;
  let negativeSum: number = 0;
  if (input instanceof Array && input.length)
    input.forEach((num: number) => {
      if (num > 0) positiveSum += 1;
      else negativeSum += num;
    });
  else return [];
  return [positiveSum, negativeSum];
}

const result = countPositivesSumNegatives(null);
console.log(result);
