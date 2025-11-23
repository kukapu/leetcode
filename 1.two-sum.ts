/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
    const numMap: Map<number, number> = new Map();
    for(let i = 0; i < nums.length; i++) {
        if(numMap.has(nums[i])){
            if(numMap.get(nums[i]) !== i) return [numMap.get(nums[i])!, i]
        }
        numMap.set(target - nums[i], i)
    }
    return []
};



// FASTER SOLUTION
function twoSumFAST(nums: number[], target: number): number[] {
    const hashMap = {}

    for(let i = 0; i < nums.length; i += 1) {
        const currentNumber = nums[i];
        const pair = target - currentNumber;

        if (hashMap[pair] !== undefined) {
            return [hashMap[pair], i];
        }

        hashMap[currentNumber] = i;
    }
    return []
};