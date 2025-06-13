import { useMouseInElement } from '@vueuse/core'
import { type MaybeRef,ref, watch, } from 'vue'



export function useAnimation(target: MaybeRef<HTMLElement | null>,) {
const { elementX, elementY, isOutside, elementHeight, elementWidth } = useMouseInElement(target)

const hasTransformed = ref(false)
const transformValue = ref('')

watch([elementX, elementY, isOutside], () => {
  if (isOutside.value) {
    hasTransformed.value = false
    transformValue.value = ''
    return
  }

  if (!hasTransformed.value) {
    const MAX_ROTATION = 6

    const rX = (MAX_ROTATION / 2 - (elementY.value / elementHeight.value) * MAX_ROTATION).toFixed(2)
    const rY = ((elementX.value / elementWidth.value) * MAX_ROTATION - MAX_ROTATION / 2).toFixed(2)

    transformValue.value = `perspective(${elementWidth.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`
    hasTransformed.value = true
  }
})

  return {
    transformValue,
    hasTransformed
  }
}