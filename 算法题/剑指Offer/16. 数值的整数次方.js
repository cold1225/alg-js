/**
 * 1.递归
 * @param {*} x
 * @param {*} n
 * @returns
 */
var myPow = function (x, n) {
  if (n === 0) return 1;
  if (n < 0) return 1 / myPow(x, -n);
  if (n % 2 === 1) return x * myPow(x, n - 1);
  else return myPow(x * x, n / 2);
};
/**
 * 2.迭代
 * @param {*} x
 * @param {*} n
 */
var myPow1 = function (x, n) {
  if (n === 0) return 1;
  if (n < 0) {
    n = -n;
    x = 1 / x;
  }
  let r = 1;
  while (n > 0) {
    if (n % 2 === 1) {
      r = r * x;
      n = n - 1;
    } else {
      x = x * x;
      n = n / 2;
    }
  }
  return r;
};
console.log(myPow1(4, -10));
console.log(myPow(4, -10));
