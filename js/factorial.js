exports.factorial = function(num) {
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
