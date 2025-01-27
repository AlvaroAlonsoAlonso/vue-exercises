<script setup lang="ts">
import { computed, ref } from 'vue'
import TheTitle from '@/components/TheTitle.vue'
const count = ref(0)

const isLessZero = computed(() => count.value <= 0)
const increment = () => {
  count.value++
}

const decrement = () => {
  if (isLessZero.value) return
  count.value--
}

const countNumber = computed(() => count.value)
</script>
<template>
  <section class="counter">
    <TheTitle>
      <h2>Exercise 5</h2>
    </TheTitle>
    <button
      class="counter__button"
      aria-label="It's a button that you press to increment a number."
      @click="increment"
    >
      Increment
    </button>
    <button
      class="counter__button"
      aria-label="A button that decreases a number when pressed to zero."
      @click="decrement"
    >
      Decrement
    </button>
    <p>Count: {{ countNumber }}</p>
  </section>
</template>
<style lang="scss" scoped>
.counter {
  &__button {
    margin: 0 0.5rem;
  }
}
</style>
