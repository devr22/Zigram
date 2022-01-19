const A=[2,5,33,26,79]
let max = A[0]
for(let i = 1; i < A.length; i++) {
    if(A[i] > max){
        max = A[i]
    }
}
console.log(max)

/**
 * Alternative way
 */

console.log(Math.max(...A))