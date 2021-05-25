function factorial(num) {
    var a = num;
    //loop from num to 1, and mulitply them all
    var array=[];
    for(var i = a; i > 0; i-- ){
        array.push(i);
        console.log(array);
    }
       
    return array.reduce( (a, b) => a * b ) ;
  
};

console.log(factorial(4));
