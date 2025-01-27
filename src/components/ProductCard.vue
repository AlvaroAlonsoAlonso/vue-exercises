<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  image: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  price: {
    type: String,
    default: '',
  },
  button: {
    type: String,
    default: '',
  },
})
</script>
<template>
  <section class="product-card">
    <article class="product-card__image">
      <img v-if="image" :src="image" alt="product image" />
    </article>
    <article class="product-card__info">
      <h2 v-if="title">{{ title }}</h2>
      <p v-if="description">{{ description }}</p>
      <p v-if="price">{{ price }}</p>
      <button v-if="button">{{ button }}</button>
    </article>
  </section>
</template>

<style lang="scss" scoped>
.product-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 20em;
  margin: 1em;
  border: 1em solid var(--black-color);
  padding: 1em;

  &__info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0 1em;
  }
}
</style>
