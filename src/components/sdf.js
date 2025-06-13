// const arr3 = [1, 2, 2, 3, 4, 4, 5, 3]
// const arr4 = [1, 2, 2, 3, 4, 5, 3]


// const findLostElement = (arr3, arr4) => {

//     const copy3 = [...arr3]
//     const copy4 = [...arr4]

//     for (let i = 0; i < copy3.length; i++) {
//         const index = arr4.indexOf(copy3[i])
//         if (index === -1) {
//             return copy3[i]
//         } else {
//             copy4.splice(index, 1)
//         }
//     }
//     return undefined
// }

// console.log(findLostElement(arr3,arr4))


// function _sum(a, b) {
//     return a + b
// }

// function spy(f) {

// }

// const sum = spy(_sum)


// console.log(sum(2, 2)) // 4
// console.log(sum(21, 21)) // 42
// console.log(sum.data.calls) // 2
// console.log(sum.data.args) // [[2,2], [21,21]]
// // console.log(sum.data.results) // [4, 42]


// function isSimilar(arr1, arr2) {
//     // ...
//     if(arr1.length !== arr2.length) return false

//     const map = new Map()

//     for (const item of arr1) {
//         if(!map.get(item)) {
//             map.set(item, 1)
//         } else {
//             map.set(item, map.get(item) + 1)
//         }
//     }

//     for (const item of arr2) {
//         if(!map.get(item)) {
//             return false
//         } else {
//             map.set(item, map.get(item) - 1)
//         }
//     }

//     return true
// }





// console.log(isSimilar([0,1,2], [2,1,0]) )
// console.log(isSimilar([0,1], [2,1,0]) )
// console.log(isSimilar([0,5,1], [0,1,5]))


// const arr1 = [1, 2, 3]
// const arr2 = [4, 5, 6]

// const bigNumber = (arr1, arr2) => {
//     let first = ''
//     let second = ''
//     for (const item of arr1) {
//         first += item
//     }
//     for (const item of arr2) {
//         second += item
//     }


//     return (Number(first) + Number(second)).toString().split('')
// }

// console.log(bigNumber(arr1,arr2))



// const merge = function(nums1, m, nums2, n) {
//     const first = nums1.slice(0, m)
//     const second = nums2.slice(0, n)

//     return [...first, ...second].sort((a,b) => a - b)
// };

// console.log(merge([0], 0, [1], 1))