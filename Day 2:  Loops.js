// Objective

// In this challenge, we practice looping over the characters of string. Check out the attached tutorial for more details.

// Task

// First, print each vowel in s on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in s.
// Second, print each consonant (i.e., non-vowel) in s on a new line in the same order as it appeared in s.
// Function Description

// Complete the vowelsAndConsonants function in the editor below.

// vowelsAndConsonants has the following parameters:

// string s: the string to process

function vowelsAndConsonants(s) {
    let cons = ""
    for(let i=0;i<s.length;i++){
      // here we are using regex
        if(s[i].match(/[aeiou]/gi)){
            console.log(s[i])
     
        }else{
            cons += s[i] + '\n';
        }
