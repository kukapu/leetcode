/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
    let index = 0
    let maxUnique = 0
    let currentUnique = 0
    const uniqueSymbols = new Set()
    
    while(index < s.length) {
      if(uniqueSymbols.has(s[index])){
        currentUnique = 1
        const substring = s.substring(0,index)
        const newIndexAfterRepeatSymbol = substring.lastIndexOf(s[index]) + 1
        uniqueSymbols.clear()
        uniqueSymbols.add(s[newIndexAfterRepeatSymbol])
        index = newIndexAfterRepeatSymbol + 1
        continue
      }
      uniqueSymbols.add(s[index])
      currentUnique++
      index++
      if(currentUnique > maxUnique) maxUnique = currentUnique
    }
    
  
  return maxUnique
};
// @lc code=end


// MEJOR SOLUCION
// var lengthOfLongestSubstring = function (s) {
//     const n = s.length;
//     if (n === 0) return 0;

//     // nextSeen[code] = nearest index to the right where this char appears, or -1
//     const nextSeen = new Int16Array(128);
//     for (let i = 0; i < 128; i++) nextSeen[i] = -1;

//     let right = n - 1;   // current right boundary of the window
//     let maxLen = 0;

//     // Walk from end to start
//     for (let i = n - 1; i >= 0; i--) {
//         const code = s.charCodeAt(i);
//         const next = nextSeen[code];

//         // If this char appears again inside our current window [i, right],
//         // we must move the right boundary left of that duplicate.
//         if (next !== -1 && next <= right) {
//             right = next - 1;
//         }

//         // Update where we last saw this char (from the right's perspective)
//         nextSeen[code] = i;

//         const len = right - i + 1;
//         if (len > maxLen) maxLen = len;
//     }

//     return maxLen;
// };