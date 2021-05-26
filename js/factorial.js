
exports.factorial = function(num) {
  var product = 1
  for (x = num; x > 0; x --) {
    product *= x
  }
return product
};
