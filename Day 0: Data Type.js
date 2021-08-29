// Objective

// Today, we're discussing data types. Check out the attached tutorial for more details.

// Task

// Variables named , , and  are declared for you in the editor below. You must use the  operator to perform the following sequence of operations:

// Convert  to an integer (Number type), then sum it with  and print the result on a new line using console.log.
// Convert  to a floating-point number (Number type), then sum it with  and print the result on a new line using console.log.
// Print the concatenation of  and  on a new line using console.log. Note that  must be printed first.

// Output Format

// Print the following three lines of output:

// On the first line, print the sum of  and the integer representation of .
// On the second line, print the sum of  and the floating-point representation of .
// On the third line, print  concatenated with . You must print  before .
// Sample Input 0

// 12
// 4.32
// // is the best place to learn and practice coding!
// Output Format

// Print the following three lines of output:

// On the first line, print the sum of  and the integer representation of .
// On the second line, print the sum of  and the floating-point representation of .
// On the third line, print  concatenated with . You must print  before .
// Sample Input 0

// 12
// 4.32
// is the best place to learn and practice coding!

-------------------X-----------------------------------X----------------------------------------------X--------------------------------------------------------------X-----------------------------------------X--------

function performOperation(secondInteger, secondDecimal, secondString) {

    const firstInteger = 4;
    let sum = firstInteger + parseInt(secondInteger)
    console.log(sum)
    

    const firstDecimal = 4.0;
    let sum = firstDecimal + parseFloat(secondDecimal)
    console.log(sum)

    
    const firstString = 'HackerRank ';
    console.log(firstString+secondString)
    
