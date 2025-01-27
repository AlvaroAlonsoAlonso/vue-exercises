<script setup lang="ts">
import TheTitle from '@/components/TheTitle.vue'
import { useCounter } from '@/composables/useCounter'

const { countNumber, increment, decrement, isTenOrMayor, isZero } = useCounter()
</script>
<template>
  <section class="counter">
    <TheTitle>
      <h2>Exercise 6</h2>
    </TheTitle>
    <article class="counter__info">
      <button
        aria-label="It's a button that you press to increment a number."
        @click="increment"
        :class="{ 'counter__button-green': isTenOrMayor }"
      >
        Increment
      </button>
      <button
        aria-label="A button that decreases a number when pressed to zero."
        @click="decrement"
        v-if="isZero"
      >
        Decrement
      </button>
      <p>Count: {{ countNumber }}</p>
    </article>
  </section>
</template>
<style lang="scss" scoped>
.counter {
  display: flex;
  flex-direction: column;
  justify-content: center;

  &__info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }

  &__button-green {
    background-color: green;
    color: white;
  }
}
</style>
