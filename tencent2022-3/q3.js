/**
 * 求第n个元素
 * 超时，通过率30%
 */

function getRes(a,b,n){
    if(a * n < b) return a*n
    if(b * n < a) return b*n
    
    let count = 0
    let res = Math.min(a,b)
    let i = 1
    let j = 1
    while(count++ < n) {
      let left = a * i
      let right = b * j
        if(left < right) {
            res = left
            i++
        }else if(left > right){
            res = right
            j++
        }else{
            res = left
            i++
            j++
        }
    }
    return res
}


let res = getRes(2,3,4)
console.log(res)