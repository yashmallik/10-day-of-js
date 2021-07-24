// Objective

// In this challenge, we practice using throw and catch statements to work with custom error messages.

// Task

// Complete the isPositive function below. It has one integer parameter, . If the value of  is positive, it must return the string YES. Otherwise, it must throw an Error according to the following rules:

// If  is , throw an Error with  Zero Error.
// If  is negative, throw an Error with  Negative Error.
// Input Format

// Locked stub code in the editor reads the following input from stdin and passes each value of  to the function as an argument:
// The first line is an integer, , denoting the number of times the function will be called with some .
// Each line  of the  subsequent lines contains an integer denoting some .

// Constraints



function isPositive(a) {
    if(a<0){
        throw Error("Negative Error")
    }
    else if(a==0){
            throw Error('Zero Error')
    }else{
            return "YES"
    }
    
}
