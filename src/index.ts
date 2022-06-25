function inArray(a1: string[], a2: string[]): Array<string> {
  const r: string[] = [];
  const a2ToStr: string = a2.join(" ");
  a1.forEach((str) => {
    const strRegex: RegExp = new RegExp(str, "ig");
    if (strRegex.test(a2ToStr)) r.push(str);
  });
  return r.sort();
}
var a2: string[] = ["lively", "alive", "harp", "sharp", "armstrong"];

var a1: string[] = ["arp", "live", "strong"];
console.log(inArray(a1, a2));
