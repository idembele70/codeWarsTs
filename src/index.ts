function isSumOfCubes(s: string): string {
  const arrayOfNumber = s.split(/\D/).filter((v) => v !== "");
  const tabsOfNumber: string[] = [];
  arrayOfNumber.map((v) =>
    v
      .replace(/\d{3}/gi, "$& ")
      .trim()
      .split(" ")
      .forEach((num) => tabsOfNumber.push(num.replace(/^00/, "")))
  );
  const cubicNumber = tabsOfNumber.filter(isCubic);
  const totalOfCubicNumber = cubicNumber.reduce((acc, cur) => {
    return acc + parseInt(cur);
  }, 0);
  if (cubicNumber.length)
    return `${cubicNumber.join(" ")} ${totalOfCubicNumber} Lucky`;
  return "Unlucky";
}
const isCubic = (s: string): boolean => {
  return (
    String(s)
      .split("")
      .reduce((acc, cur) => acc + parseInt(cur) ** 3, 0) === parseInt(s)
  );
};

console.log(isSumOfCubes(`153000153407000407`));
