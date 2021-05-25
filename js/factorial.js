//exports.factorial = 

function factorial(num) {

  if (num == 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};

console.log(factorial(0));
// if input is 0 return 1

// set workingNum equal to num
// multiply workingNum by workingNum - 1
// recursion with workingNum
// when workingNum == 0 return factorial