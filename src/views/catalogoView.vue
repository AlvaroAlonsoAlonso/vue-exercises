<script setup lang="ts">
import ProductCard from '@/components/ProductCard.vue'
import { productData } from '@/data/mock.ts'
</script>
<template>
  <section class="catalogo">
    <RouterLink to="/" class="catalogo__link">Go to Home</RouterLink>
    <article class="catalogo__all-cards">
      <ProductCard
        v-for="product in productData"
        :key="product.id"
        v-bind="product"
      ></ProductCard>
    </article>
  </section>
</template>

<style lang="scss" scoped>
.catalogo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1em;

  &__all-cards {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }

  &__link {
    align-self: center;
    padding: 1em;
    background-color: var(--black-color);
    color: var(--secondary-color);

    &:hover {
      background-color: var(--primary-color);
      color: var(--black-color);
    }
  }
}
</style>
