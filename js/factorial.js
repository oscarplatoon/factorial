exports.factorial = function(num) {
    let ans = 1;
    for(let i = num; i >= 1; i--){
        ans = ans * i
    }
    return ans
};
