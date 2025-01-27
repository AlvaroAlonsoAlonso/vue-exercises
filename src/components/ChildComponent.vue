<script setup lang="ts">
import { defineEmits } from 'vue'

const emit = defineEmits(['buttonHello'])

const getGreet = () => {
  emit('buttonHello', 'Hello, from the child component')
}
</script>

<template>
  <button @click="getGreet">Click Me, for hello child</button>
</template>
