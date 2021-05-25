exports.factorial = function(num) {
  let fact = BigInt(1);
  let bigNum = BigInt(num);

  if (num < 0) {
    return undefined;
  }
  
  if (fact === 0) {
    return 1;
  }

  while (bigNum > 0) {
    fact = fact * bigNum;
    bigNum = bigNum - BigInt(1);
 }

 return Number(fact);

};
