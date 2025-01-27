<script setup lang="ts">
import { defineEmits, defineProps } from 'vue'

defineProps({
  messageParent: String,
})
const emit = defineEmits(['buttonHello'])

const getGreet = () => {
  emit('buttonHello', 'Hello, from the child component')
}
</script>

<template>
  <button @click="getGreet">Click Me, for hello child</button>
  <p v-if="messageParent">{{ messageParent }}</p>
</template>
