import { ref, computed } from 'vue'

export function useCounter() {
  const count = ref(1)

  const NUMBER_ZERO = 0
  const NUMBER_TEN = 10

  const increment = () => {
    count.value++
  }

  const decrement = () => {
    count.value--
  }

  const isZero = computed(() => NUMBER_ZERO < count.value)
  const isTenOrMayor = computed(() => count.value >= NUMBER_TEN)
  const countNumber = computed(() => count.value)

  return {
    count,
    increment,
    decrement,
    isZero,
    isTenOrMayor,
    countNumber,
  }
}
