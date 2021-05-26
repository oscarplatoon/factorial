exports.factorial = function(num) {
  if(num == 0) {
    return 1
  }
  let i = BigInt(num);
  let multiply = 1n;
  //console.log(multiply);
  while (i > 1) {
   multiply *= i;
    i--;
    // console.log(multiply);
  }
 
  return Number(multiply);
  };
