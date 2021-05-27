exports.factorial = function(num) {
  if (typeof(num) !== 'number') {
    return null
  }
  if (num % 1 !== 0) {
    return null
  }
  if (num < 0) {
    return null
  }

  let product = 1
  for (let i = 2; i <= num; i++) {
    product *= i
  }

  return product
};

exports.bigFactorial = function(num) {
  if (typeof(num) !== 'bigint') {
    return null
  }
  if (num % 1n !== 0n) {
    return null
  }
  if (num < 0n) {
    return null
  }
  
  let product = BigInt(1)
  for (let i = num; i > BigInt(1); i--) {
    product *= i
  }

  console.log(product)
  return product
};
