function factorial(num) {
    var a = num;
    //loop from num to 1, and mulitply them all
    var array=[];
    if (a===0){
      array.push(a);
      console.log(array);
      return 0;
    }

    for(var i = a; i > 0; i-- ){
      array.push(i);
      console.log(array);
    }
       
    return array.reduce( (a, b) => a * b ) ;
  
};

console.log(factorial(0));
