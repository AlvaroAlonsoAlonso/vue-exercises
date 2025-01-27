<script setup lang="ts">
import { defineEmits, inject } from 'vue'

const messageParent = inject('messageParent')
const emit = defineEmits(['buttonHello'])

const getGreet = () => {
  emit('buttonHello', 'Hello, from the child component')
}
</script>

<template>
  <button @click="getGreet">Click Me, for hello child</button>
  <p v-if="messageParent">{{ messageParent }}</p>
</template>
