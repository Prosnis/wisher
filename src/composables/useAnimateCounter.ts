import { ref } from 'vue'

export function useAnimateCounter(target: number, duration = 1000) {
  const current = ref(0)

  const animate = () => {
    const startTime = performance.now()
    const startValue = 0

    const update = (timestamp: number) => {
      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / duration, 11)
      current.value = startValue + (target - startValue) * progress
      if (progress < 1)
        requestAnimationFrame(update)
    }

    requestAnimationFrame(update)
  }

  return {
    current,
    animate,
  }
}
