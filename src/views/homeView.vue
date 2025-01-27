<script setup lang="ts">
import TheCounter from '@/components/TheCounter.vue'
import ParentComponent from '@/components/ParentComponent.vue'
</script>

<template>
  <section class="home">
    <RouterLink class="home__link" to="/catalogo">Go to catalogo</RouterLink>
    <TheCounter class="home__counter" />
    <ParentComponent />
  </section>
</template>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1em;

  &__link {
    padding: 1em;
    background-color: var(--black-color);
    color: var(--secondary-color);

    &:hover {
      background-color: var(--primary-color);
      color: var(--black-color);
    }
  }

  &__counter {
    width: 10em;
  }
}
</style>
