// Objective

// In this challenge, we learn about iterating over objects. Check the attached tutorial for more details.

// Task

// Complete the function in the editor. It has one parameter: an array, a, of objects. Each object in the array has two integer properties denoted by x and y. The function must return a count of all such objects o in array a that satisfy o.x===o.y.

// Input Format

// The first line contains an integer denoting .
// Each of the n subsequent lines contains two space-separated integers describing the values of x and y.



function getCount(objects) {
    var count = 0;
    Object.keys(objects).forEach((key,index)=>{

    if(objects[key].x === objects[key].y){

    count++;}

})

    return count;
    
    
}
