/* https://leetcode.com/problems/minimum-deletions-to-make-string-balanced/
* 1653. Minimum Deletions to Make String Balanced
*/
/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function(s) {
    let countA = 0
    let countB = 0
    let res = Infinity
    
    // 문자열 내의 'a'의 개수 세기
    let pos = s.indexOf('a')
    
    while(pos !== -1){
        countA++
        pos = s.indexOf('a', pos + 1)
    }
    
    for(let ch of s){
        if(ch === 'a'){
            countA--
            res = Math.min(res, countA + countB)
        }
        else if(ch === 'b'){
            countB++
            res = Math.min(res, countA + countB - 1)
        }
    }
    
    return res
    
};
