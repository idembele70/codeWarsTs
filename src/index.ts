function inArray(a1: string[], a2: string[]): Array<string> {
  const r: string[] = [];
  a1.forEach((str) => {
    if (a2.find((a2str) => a2str.indexOf(str) !== -1)) r.push(str);
  });
  return r.sort();
}
var a2: string[] = ["lively", "alive", "harp", "sharp", "armstrong"];

var a1: string[] = ["arp", "live", "strong"];
console.log(inArray(a1, a2));
