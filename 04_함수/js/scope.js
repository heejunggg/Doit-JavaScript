function addSum(n) {
  let sum = 0;
  for (var i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

let num = 3;
console.log(`1부터 ${num}까지 더하면 : ${addSum(num)}`);
