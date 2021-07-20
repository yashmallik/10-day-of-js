function getSecondLargest(nums) {
    // Complete the function
    let max = nums[0];
    let secondMax = nums[1]
    if(nums[0] < nums[1]){
        max = nums[0];
        secondMax = nums[1] }
    for(let i = 0; i<nums.length;i++){
        if (max < nums[i]){
            secondMax = max;
            max = nums[i];
        }
    }
    return secondMax
}
