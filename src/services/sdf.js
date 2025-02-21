// const USERS_URL = 'https://jsonplaceholder.typicode.com/users'
// const USERS_POSTS = 'https://jsonplaceholder.typicode.com/posts'

// const getData = async (urls) => {
//     try {
//         const promises = urls.map(async (url) => {
//             const response = await fetch(url)
//             return response.json()
//         })

//         const data = await Promise.all(promises)
//         return data

//     } catch (err) {
//         console.log(err.code, 'Error while get data')
//     }
// }

// const newData = new Map()

// getData([USERS_URL, USERS_POSTS]).then(data => {
//     const [users, posts] = data

//     users.forEach((user) => {
//         newData.set(user.id, {name: user.name, posts: [] })
//     })
//     posts.forEach((post) => {
//         if (newData.has(post.userId)) {
//             newData.get(post.userId).posts.push(post)
//         }
//     })

//     const result = Array.from(newData.values())
//     creator(result)
//     console.log(result)

// })

// function creator(arr) {
//     const container = document.createElement('div');
//     container.style.width = '200px';
//     container.style.height = '200px';
//     container.style.backgroundColor = 'red';

//     arr.forEach(item => {
//         const el = document.createElement('div');
//         el.textContent = item.name;
//         container.appendChild(el);
//     });

//     // Добавляем контейнер в DOM
//     document.body.appendChild(container); // Вы можете добавить его в другой элемент, если хотите
// }

// const firstuniqChar  = (str) => {

//     const charMap = []
//     let result = null

//     for(let i = 0; i < str.length; i++) {
//         const char = str[i]
//         charMap[char] = (charMap[char] || 0) + 1;
//     }

//     for (let i = 0; i < str.length; i++) {
//         if (charMap[str[i]] === 1) {
//             result =  str[i];
//         }
//     }

//     return result ?? null
// }

// console.log(firstuniqChar('heettccoodde'))

// function strJoin(arr) {
//     const [key, ...chars] = arr
//     let res = '' +  key
//     for (const char of chars) {
//         res = res + char
//     }
//     return res
// }

// console.log(strJoin('.', 'a', 'b', 'c'))
// console.log('-', 'a', 'b', 'c', 'a', 'b', 'a', 'b',)

// const main = (a, b) => {
//     // Место для вашего кода
//     return [a, b] = [b, a];
//   };

// console.log(  main(1, 2))

// const mixedArray = [1, '1', { a: 1 }, { a: 1 }, 1, 'test', 'test']

// const countElements = (arr) => {
//   const res = {}
//   arr.reduce((acc, item) => {
//     const parsed = JSON.stringify(item)
//     if(!acc[parsed]){
//       acc[parsed] = {value: parsed, count: 1}
//     }  else {
//       acc[parsed].count++
//     }
//     return acc
//   }, res)

//   return res
// }

// const counts = countElements(mixedArray)
// console.log(counts)

// async function foo() {
//     console.log('a')
//     return  console.log('b')
// }

// Promise.resolve().then(foo).then(()=>{
//     console.log('c')
// })

// (async () => {
//     const promises = [
//         'posts',
//         'comments',
//         'users'
//     ].map(async (method) => (await fetch(`https://jsonplaceholder.typicode.com/${method}`)).json())

//     const [
//         posts,
//         comments,
//         users
//     ] = await Promise.all(promises)

//     const result = []

//     posts.forEach((item) => {
//         const currentUser = users.find(user => user.id === item.userId)
//         const totalComments = comments.reduce((acc, comment) => {
//             if (comment.postId === item.userId) acc++
//             return acc
//         }, 0)
//         return result.push({id: item.userId, title: item.title, userName: currentUser.name, commentsCount: totalComments })
//     })

//     return result

// })().then(console.log)

// function interesnayaIdeya(arr) {
//     const curr = new Set(arr)
//     return curr.size < arr.length
// }

// console.log(interesnayaIdeya([1,2,3,4,5]))

// const alphabet = new Set('ABCDEFGHIJKLMNOPQRSTUVWXYZ')

// const checkEntries = (str) => {
//     const strSet = new Set(str.toUpperCase())
//     for (const char of alphabet) {
//         if (!strSet.has(char)) {
//             return false
//         }
//     }
//     return true
// }

// console.log(checkEntries('ABCDEFGHIJKLMNOPQRuTUVWXYZ'))

// const walidateBrackets = (str) => {
//     const openBrackets = []

//     const brackets = {
//         '}': '{',
//         ']': '[',
//         ')': '('
//     }

//     for (const char of str) {
//         if (char === '{' || char === '[' || char === '(') {
//             openBrackets.push(char)
//         } else if (char === '}' || char === ']' || char === ')') {
//             if (openBrackets.pop() !== brackets[char] ) return false
//         }
//     }

//     return openBrackets.length === 0

// };

// console.log(walidateBrackets("([{}])"));   // true
// console.log(walidateBrackets("({[}])"));   // false
// console.log(walidateBrackets("({[]})"));   // true
// console.log(walidateBrackets("({[})"));    // false

// const tree = {
//     value: 1,
//     children: [
//         {
//             value: 2,
//             children: [
//                 {
//                     value: 3,
//                     children: []
//                 }
//             ]
//         },
//         {
//             value: 4,
//             children: []
//         }
//     ]
// }

// let acc = 0
// const count = (tree) => {

//     for(const key in tree) {
//         if(!Array.isArray(tree[key])){
//            acc = acc + tree[key]
//         } else {
//             for(const item of tree[key]) {
//                 count(item)
//             }
//         }
//     }

//     return acc

// }
// console.log(count(tree))

// Напиши функцию, которая принимает число и возвращает его строковое представление с пробелами между тысячами.
// пример
// console.log(formatNumber(1234567.89)); // "1 234 567.89"

// Оставь в массиве только числа, у которых ровно N знаков после запятой
// пример
// console.log(filterByDecimals([1.23, 3.456, 78.9, 4.00, 5.6789], 2)); // [1.23, 78.9, 4.00]

// const filterByDecimals = (arr, point) => {
//     return arr.reduce((acc, item) => {
//         const curr = String(item)
//         const sliced = curr.slice(curr.indexOf('.') + 1)
//         if (sliced.length === point) {
//             acc.push(item)
//         }
//         return acc
//     },
//         [])
// }

// console.log(filterByDecimals([1.23, 3.456, 78.9, 4.00, 5.6789], 2))

// function sum(a) {
//     let curr = a
//     function inner(b) {
//         curr += b
//         return inner
//     }

//     return a === undefined ? 0 : inner
// }
// console.log(sum(1)(2)(5))   додумать

// const poli = (str) => {
//     let left = 0
//     let rigth = str.length - 1

//     while (left < rigth) {
//         if (str[left] !== str[rigth]) {
//             return false
//         }

//         left++
//         rigth--
//     }

//     return true
// }

// console.log(poli('aba'))

// function cFilter(cb, arr, value) {
//     const result = []
//     for(let i = 0; i < arr.length; i++) {
//         if(cb(arr[i], value)){
//             result.push(arr[i])
//         }
//     }
//     return result
// }

// const arr = [1,2,3,4,5]
// const cb = (item, item2)=>{
//     return item === item2
// }

// console.log(cFilter(cb, arr, 5))

// const data = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "Charlie", age: 25 }
//   ];

//   const groupByProperty = (arr, str) => {
//       return arr.reduce((acc, item) => {

//           if(!acc[item[str]]){
//               acc[item[str]] = [item]
//           }else {
//               acc[item[str]].push(item)
//             }
//             return acc;
//       }, {})
//   }

//   console.log(groupByProperty(data, "age"))

// const atrimac = (arr, arr2) => {
//     const res = [];
//     const length = Math.max(arr.length, arr2.length);
//     for (let i = 0; i < length; i++) {
//         if (i < arr.length) {
//             res.push(arr[i]);
//         }
//         if (i < arr2.length) {
//             res.push(arr2[i]);
//         }
//     }
//     return res;
// }

// console.log(atrimac([1, 2, 3], ['a', 'b', 'c', 'd', 'e', 'f']));
