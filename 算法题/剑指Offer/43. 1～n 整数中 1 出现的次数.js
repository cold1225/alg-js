var countDigitOne = function (n) {
  let num = 0;
  for (let i = 1; i <= n; i++) {
    let findIndex = i.toString().indexOf("1");
    let t = i.toString();
    while (findIndex !== -1) {
      t = t.substring(0, findIndex) + t.substr(findIndex + 1);
      num++;
      findIndex = t.indexOf("1");
    }
  }
  return num;
};
console.log(countDigitOne(12));
