"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.G964 = void 0;
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
 */ class G964 {
    static gcdi(x, y) {
        return y === 0 ? x : Math.abs(G964.gcd(y, x % y));
    }
    static lcmu(a, b) {
        const lcm = !a || !b ? 0 : (a * b) / G964.gcd(a, b);
        return Math.abs(lcm);
    }
    static som(a, b) {
        return a + b;
    }
    static maxi(a, b) {
        return Math.max(a, b);
    }
    static mini(a, b) {
        return Math.min(a, b);
    }
    static operArray(fct, arr, init) {
        let lastNum = 0;
        return arr.map((num, idx) => {
            if (!idx)
                lastNum = fct(num, init);
            else
                lastNum = fct(lastNum, num);
            return lastNum;
        });
    }
}
exports.G964 = G964;
_a = G964;
/**
 * gcdi
 */
G964.gcd = (a, b) => b === 0 ? a : _a.gcd(b, a % b);
const a = [18, 69, -90, -78, 65, 40];
console.log(G964.operArray(G964.gcdi, a, a[0]));
