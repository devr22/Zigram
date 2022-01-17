let arr = [1, 2, 3, [4, 5, [6, 7, 8], 9], [10, 11, 12,], [[[13, 14, 15]], 16], [17]]

// let flatArr = arr.reduce((acc, curVal) => acc.concat(curVal), [])

const flatArray =  (arr, depth) => {
    return depth>0 ? arr.reduce((acc, val) => 
        acc.concat(Array.isArray(val) ? flatArray(val, depth-1): val)
    , []) : arr.slice()
};

let flatArr = flatArray(arr, Infinity)

console.log(flatArr)


/**
 * Alternative one line approach
 */

// flatArr = arr.flat(Infinity)