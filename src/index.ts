function longestConsec(strarr: string[], k: number): string {
  const strarrSorted = strarr.slice().sort((a, b) => b.length - a.length);
  const longestArr = strarrSorted.slice(0, k);
  const isSameLength = longestArr
    .map((word) => word.length)
    .filter((w, i) => w !== longestArr[i + 1]?.length || 0);
  console.log(isSameLength);
  // if (isSameLength === 0)
  //   return ''
  // else if (strarrSorted[1].length === strarrSorted[2].length)
  //   return longestArr[0]
  return longestArr.join('');
}

console.log(longestConsec(['toto', 'titi', 'tata', 'mimi'], 2)); //  abigailtheta
