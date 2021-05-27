 
exports.factorial = function(num) {

  // let bigInt = BigInt(num);
  // let output = 1n;
  // for (let i = 0n; i < bigInt ; i++) {
  //   output *= bigInt -i;
  // }
  // console.log(output);
  // return output;
  
//}

  var output= num;
  
  if (num===0){
    return 1;
  }
  while (num >= 2) {
    output *= (num-1);
    num--;  
  }    
  
  //let answer= BigInt(output);
  console.log (output);
  return output;
};
