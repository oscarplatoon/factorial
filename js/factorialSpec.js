var fact = require("./factorial");

console.log(fact.factorial(-1) == null)
console.log(fact.factorial("donuts") == null)
console.log(fact.factorial(4.5) == null)
console.log(fact.factorial(0) == 1)
console.log(fact.factorial(1) == 1)
console.log(fact.factorial(3) == 6)
console.log(fact.factorial(8) == 40320)
console.log(fact.factorial(18) == 6402373705728000)
console.log(fact.factorial(24) == 620448401733239439360000)
console.log(fact.bigFactorial(BigInt(-3)) == null)
console.log(fact.bigFactorial(BigInt(45)) == 119622220865480194561963161495657715064383733760000000000n)
console.log(fact.factorial(50) == 30414093201713378043612608166064768844377641568960512000000000000)
// Test how high of a number your program can calculate. Can you push it further?
