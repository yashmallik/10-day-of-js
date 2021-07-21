// Objective

// In this challenge, we learn about Arrays. Check out the attached tutorial for more details.

// Function Description

// Complete the getSecondLargest function in the editor below.

// getSecondLargest has the following parameters:

// int nums[n]: an array of integers
 
// Returns

// int: the second largest number in nums


function getSecondLargest(nums) {
    // Complete the function
    let max = nums[0];
    let secondMax = nums[1]
    if(nums[0] < nums[1]){
        max = secondMax;
        secondMax = nums[0] }
    for(let i = 0; i<nums.length;i++){
        if (max < nums[i]){
            secondMax = max;
            max = nums[i];
        }
        if (secondMax < nums[i] && max != nums[i]){
            secondMax = nums[i]
        }
    }
    return secondMax
}
