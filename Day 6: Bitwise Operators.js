// Objective

// Today, we're practicing bitwise operations. Check the attached tutorial for more details.

// Task

// We define  to be a sequence of distinct sequential integers from  to ; in other words, . We want to know the maximum bitwise AND value of any two integers,  and  (where ), in sequence  that is also less than a given integer, .

// Complete the function in the editor so that given  and , it returns the maximum .

// Note: The  symbol represents the bitwise AND operator.



const getMaxLessThanK = (n,k)=>{
    let ret = 0
    for(let a = n;a>0;a--){
        for(let b= a-1 ; b>0; b--){
            ((a&b)<k && (a&b)>ret) &&(ret = a&b)
        }
    }
    return ret
}
