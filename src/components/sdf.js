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


// const obj = {
//     a: {
//         b: {
//             c: 'd'
//         },
//         e: 'f'
//     }
// }


// function get(obj, path) {
//     return path.split('.').reduce((acc, item) => {
//         acc = acc[item]
//         return acc
//     }, obj)
// }


// console.log(get(obj, 'a.b'))
// console.log(get(obj, 'a.b.c'))
// console.log(get(obj, 'a.e'))



// const numbers = [3, 8, 2, 1, 5, 6, 4, 9, 7]

// function sortEvenNumbers(arr) {
//     const evenSorted = arr.filter((item) => item % 2 === 0).sort((a, b) => a - b)
//     const res = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 !== 0) {
//             res.push(arr[i])
//         } else {
//             res.push(evenSorted[0])
//             evenSorted.shift()
//         }
//     }

//     return res
// }



// console.log(sortEvenNumbers(numbers))



// const foo = (arr) => {
//     const sorted = arr.sort((a, b) => a - b)

//     for (let i = 0; i < sorted.length; i++) {
//         const map = {}

//     }
// }

// console.log(foo([1, 3, 5, 2, 3, 9, 8, 11, 0])) // 0-5, 8-9,11
// console.log(foo([1, 4, 3, 2])) // 1-4
// console.log(foo([1, 4])) // 1,4


// var i = 10
// var array = []

// while (i--) {
//     array.push(function () {
//         return i + i
//     })
// }

// console.log(
//     [
//         array[0](),
//         array[1](),
//     ])



//     [promise, promise,promise]

//     function promiseAny(promises){

//     }