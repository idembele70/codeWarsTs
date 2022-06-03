class Kata {
  static getCount(str: string): number {
    return [...str].filter((char) => /[aeiou]/i.test(char)).length;
  }
}
console.log(Kata.getCount("Hello World"));
