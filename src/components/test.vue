<script setup>
import { object } from 'zod'



const arr = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']
const arr2 = [1, 2, [3, 4], 5, [6, [7, [8]]]]

const arr3 = [1, 2, 2, 3, 4, 4, 5, 3]
const arr4 = [1, 2, 2, 3, 4, 5, 3]


const findLostElement = (arr3, arr4) => {

    const copy3 = [...arr3]
    const copy4 = [...arr4]

    for (let i = 0; i < copy3.length; i++) {
        const index = arr4.indexOf(copy3[i])
        if (index === -1) {
            return copy3[i]
        } else {
            copy4.splice(index, 1)
        }
    }
    return undefined
}

console.log(findLostElement(arr3,arr4))

</script>


<template>
    <div>

    </div>
</template>