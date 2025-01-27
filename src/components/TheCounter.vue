<script setup lang="ts">
import { computed } from 'vue'
import TheTitle from '@/components/TheTitle.vue'
import { useCounter } from '@/composables/useCounter'

const { countNumber, increment, decrement, isTenOrMayor, isZero } = useCounter()

const multiplique = computed(() => {
  return countNumber.value * 2
})
</script>
<template>
  <section class="counter">
    <TheTitle v-if="countNumber">
      <h2>Count: {{ countNumber }}</h2>
    </TheTitle>
    <TheTitle v-if="multiplique">
      <h2>multiplique: {{ multiplique }}</h2>
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
