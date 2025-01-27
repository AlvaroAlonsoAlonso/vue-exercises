import { ref, computed, watch } from 'vue'

export function useCounter() {
  const count = ref(1)
  const messageValue = ref('You are in the right parameters')

  const NUMBER_ZERO = 0
  const NUMBER_TEN = 10

  const increment = () => {
    count.value++
  }

  const decrement = () => {
    count.value--
  }
  const countNumber = computed(() => count.value)

  const isZero = computed(() => NUMBER_ZERO <= countNumber.value)
  const isTenOrMayor = computed(() => countNumber.value >= NUMBER_TEN)
  const isBetween = computed(
    () => NUMBER_ZERO < countNumber.value && countNumber.value < NUMBER_TEN,
  )

  watch(countNumber, () => {
    if (isZero.value) {
      messageValue.value = 'You are at the minimum value'
    }
    if (isBetween.value) {
      messageValue.value = 'You are in the right parameters'
    }
    if (isTenOrMayor.value) {
      messageValue.value = 'You are at the maximum value'
    }
  })

  return {
    count,
    isZero,
    isTenOrMayor,
    countNumber,
    messageValue,
    increment,
    decrement,
  }
}
