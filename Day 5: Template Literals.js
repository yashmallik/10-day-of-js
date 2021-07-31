// Objective

// In this challenge, we practice using JavaScript Template Literals. Check the attached tutorial for more details.

// Task

// The code in the editor has a tagged template literal that passes the area and perimeter of a rectangle to a tag function named sides. Recall that the first argument of a tag function is an array of string literals from the template, and the subsequent values are the template's respective expression values.

// Complete the function in the editor so that it does the following:

// Finds the initial values of  and  by plugging the area and perimeter values into the formula:
// where  is the rectangle's area and  is its perimeter.
// Creates an array consisting of  and  and sorts it in ascending order.
// Returns the sorted array.


function sides(literals, ...expressions) {
    let [a,p] = expressions;
    let root = Math.sqrt(p**2 - 16*a)
    return [(p-root)/4, (p+root)/4]
}

