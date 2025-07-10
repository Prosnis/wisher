// Написать функцию, которая принимает массив строк и возвращает массив массивов, где каждый вложенный массив состоит из анаграмм.
// Для анаграмм можно считать, что все строки состоят из строчных букв и не содержат пробелов.
// const arr = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];

// const groupAnagrams = (arr) => {
//     const map = {}

//     arr.forEach(item => {
//         const sortedItem = item.split('').sort().join('')
//         if (!map[sortedItem]) {
//             map[sortedItem] = [item]
//         } else {
//             map[sortedItem].push(item)
//         }
//     })

//     return [...Object.values(map)]

// }
// Ожидаемый результат: [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]






// Написать функцию, которая преобразует многомерный массив в одномерный без использования flat() и concat().
// const arr2 = [1, 2, [3, 4], 5, [6, [7, [8]]]]

// const flattenArray = (arr2) => {
//     return arr2.reduce((acc, item) => {
//         if (!Array.isArray(item)) {
//             acc.push(item)
//         } else {
//             acc.push(...flattenArray(item))
//         }
//         return acc
//     }, [])
// }
// Ожидаемый результат: [1, 2, 3, 4, 5, 6, 7, 8]


// Написать функцию, которая находит элемент, присутствующий в первом массиве, но отсутствующий во втором (с учётом дубликатов).
// Для поиска отсутствующего элемента гарантируется, что массивы отличаются ровно на один элемент (дубликаты учитываются).
// const arr3 = [1, 2, 2, 3, 4, 4, 5, 3]
// const arr4 = [1, 2, 2, 3, 4, 5, 3]

// const findMissingElement = (arr3, arr4) => {
//     const map = {}

//     arr3.forEach(item => {
//         map[item] = (map[item] || 0) + 1
//     })

//     arr4.forEach(item => {
//         if (map[item]) {
//             map[item]--
//         }
//     })

//     for (const key in map) {
//         if (map[key] > 0) return key
//     }

// }
// // Ожидаемый результат: 4 


// const getNumberCharacters = (str) => {
//     const map = {}

//     for(const char of str) {
//         map[char] = (map[char] | 0) + 1
//     }

//     let result = ''

//     for(const char in map) {
//         result += `${char + map[char]}`
//     }

//     return result
// }


// console.log(getNumberCharacters('dddfffeeessfgggg'))


// const arr3 = [2, 3, 4, 5, 6, 7]
// const arr4 = [1, 2, 3, 4, 5, 8]


// const task = (arr1, arr2) => {

//     let first = 0
//     let second = 0
//     const res = []

//     while (arr1.length > first) {
//         if (arr1[first] > arr2[second]) {
//             second++
//         } else if (arr1[first] === arr2[second]) {
//             res.push(arr1[first])
//             first++
//             second++
//         } else if (arr1[first] < arr2[second]) {
//             first++
//         }
//     }

//     return res
// }

// console.log(task(arr3, arr4))


// const arr = [{year:2020,month:2,day:23},{year:2020,month:2,day:24}]  [[2020,2,23],[2020,2,24]]


interface UserType {
    id: number
    name: string
    isAdmin: boolean
}

const user: UserType = {
    id: 1,
    name: "Alice",
    isAdmin: false
};

const greetUser = (obj: UserType): string => {
    return `Hello, ${obj.name}! You are an admin.`
}


const users: Array<UserType> = [
    { id: 1, name: "Alice", isAdmin: false },
    { id: 2, name: "Bob", isAdmin: true },
    { id: 3, name: "Charlie", isAdmin: false },
];

const getAdmins = (users: UserType[]): UserType[] => {
    return users.filter(item => item.isAdmin
    )
}


function printValue(value: string | number) {
    if (typeof (value) === 'string') return value.toUpperCase()
    if (typeof (value) === 'number') return value** 2
}


// Варианты: "up" | "down" | "left" | "right"

type Direction = "up" | "down" | "left" | "right"

function move(direction : Direction) : void  {
  return console.log(`Moving ${direction}`)
}


