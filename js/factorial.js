exports.factorial = function(num) {
  let answer = 1;
  for(i=1;i<num+1;i++){
    answer *= i;
  }
  return(answer);
};
