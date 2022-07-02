/* export class G964 {
  public static gcdi(x: number, y: number): number {
    const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
    return Math.abs(gcd(x, y));
  }
  public static lcmu(a: number, b: number): number {
    const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
    const lcm = (x: number, y: number) => {
      return !x || !y ? 0 : (x * y) / gcd(x, y);
    };
    return Math.abs(lcm(a, b));
  }
  public static som(a: number, b: number) {
    return a + b;
  }
  public static maxi(a: number, b: number) {
    return Math.max(a, b);
  }
  public static mini(a: number, b: number) {
    return Math.min(a, b);
  }
  public static operArray(fct: any, arr: number[], init: number) {
    let lastNum: number = 0;
    return arr.map((num, idx) => {
      if (!idx) lastNum = fct(num, init);
      else lastNum = fct(lastNum, num);
      return lastNum;
    });
  }
  }
 */ export class G964 {
  /**
   * gcdi
   */
  public static gcd = (a: number, b: number): number =>
    b === 0 ? a : this.gcd(b, a % b);
  public static gcdi(x: number, y: number): number {
    return y === 0 ? x : Math.abs(G964.gcd(y, x % y));
  }
  public static lcmu(a: number, b: number): number {
    const lcm = !a || !b ? 0 : (a * b) / G964.gcd(a, b);
    return Math.abs(lcm);
  }
  public static som(a: number, b: number) {
    return a + b;
  }
  public static maxi(a: number, b: number) {
    return Math.max(a, b);
  }
  public static mini(a: number, b: number) {
    return Math.min(a, b);
  }
  public static operArray(fct: any, arr: number[], init: number) {
    let lastNum: number = 0;
    return arr.map((num, idx) => {
      if (!idx) lastNum = fct(num, init);
      else lastNum = fct(lastNum, num);
      return lastNum;
    });
  }
}
const a = [18, 69, -90, -78, 65, 40];
console.log(G964.operArray(G964.gcdi, a, a[0]));
