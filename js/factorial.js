exports.factorial = function(num) {
    let answer = 1
  for(let i = num; i > 0; i--){
    answer = answer * i;
  }
  console.log(answer)
};
