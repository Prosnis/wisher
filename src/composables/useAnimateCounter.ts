import { ref } from 'vue'

export function useAnimateCounter(target: number, duration = 2000) {
  const current = ref(0)

  const animate = () => {
    const startTime = performance.now()
    const startValue = 0


    const update = (timestamp: number) => {
      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / duration, 1)
      current.value = startValue + (target - startValue) * (progress * (2- progress))
      if (progress < 1) requestAnimationFrame(update)
    }

    requestAnimationFrame(update)
  }

  return {
    current,
    animate,
  }
}