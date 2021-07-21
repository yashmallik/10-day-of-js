// Objective

// In this challenge, we learn about switch statements. Check out the attached tutorial for more details.

// Task

// Complete the getLetter(s) function in the editor. It has one parameter: a string, s, consisting of lowercase English alphabetic letters (i.e., a through z). It must return A, B, C, or D depending on the following criteria:

// If the first character in string s is in the set {a,e,i,o,u,}, then return A.
// If the first character in string s is in the set {b,c,d,f,g}, then return B.
// If the first character in string s is in the set {h,j,k,l,m}, then return C.
// If the first character in string s is in the set {n,p,q,r,s,t,v,w,x,y,z}, then return D.
// Hint: You can get the letter at some index  in  using the syntax s[i] or s.charAt(i).

// Function Description

// Complete the getLetter function in the editor below.

// getLetter has the following parameters:

// string s: a string

function getLetter(s) {
    let letter ="D";
    // Write your code here
    switch(s[0]){
        case ("a"||"e"||"i"||'o'||"u"):
            letter = "A"
            break;
        case ("b"||"c"||"d"||"f"||"g"):
            letter = "B"
            break;
        case ("h"||"j"||"k"||"l"||"m"):
            letter = "C"
            break;
        case ("n"||"p"||"q"||"r"||"s"||"t"||"v"||"w"||"x"||"y"||"z"):
            letter = "D"
            break;
    }
    return letter;
}
