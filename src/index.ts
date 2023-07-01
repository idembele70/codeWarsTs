function longestConsec(strarr: string[], k: number): string {
  const strarrWTDuplicate: string[] = []
  strarr.forEach(el => {
    const currentDuplicate =
      strarrWTDuplicate.find(strarrEl => strarrEl.length === el.length)
    if (currentDuplicate) {
      const idx =
        strarrWTDuplicate.findIndex(strarrEl => strarrEl.length === el.length)
      if (idx >= 0)
        strarrWTDuplicate[idx] = el

    } else
      strarrWTDuplicate.push(el)
  })
  const sortedWord = strarrWTDuplicate.slice().sort(
    (a, b) => b.length - a.length
  ).slice(0, k)
  console.log(sortedWord)
  const longestWord = []
  for (const item of strarrWTDuplicate) {
    if (sortedWord.includes(item))
      longestWord.push(item)
  }
  return longestWord.join('')
}
const result0 = ["zone", "abigail", "theta", "form", "libe", "zas"]
const nbr0 = 2
const result1 = ["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"]
const nbr1 = 1
const result2 = [
  'itvayloxrp',
  'wkppqsztdkmvcuwvereiupccauycnjutlv',
  'vweqilsfytihvrzlaodfixoyxvyuyvgpck'
]
const nbr2 = 2

console.log(longestConsec(result2, nbr2)); //  abigailtheta
