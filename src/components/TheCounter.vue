<script setup lang="ts">
import { computed, ref } from 'vue'
import TheTitle from '@/components/TheTitle.vue'
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
const isTenOrMayor = computed(() => count.value < NUMBER_TEN)

const countNumber = computed(() => count.value)
</script>
<template>
  <section class="counter">
    <TheTitle>
      <h2>Exercise 6</h2>
    </TheTitle>
    <article class="counter__info">
      <button
        class="counter__button"
        aria-label="It's a button that you press to increment a number."
        @click="increment"
        v-if="isTenOrMayor"
      >
        Increment
      </button>
      <button
        class="counter__button"
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
}
</style>
