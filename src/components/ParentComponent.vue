<script setup lang="ts">
import { ref } from 'vue'
import ChildComponent from '@/components/ChildComponent.vue'

const message = ref('')
function handleChild(child: string) {
  message.value = child
}
</script>
<template>
  <ChildComponent @button-hello="handleChild" />
  <p v-if="message">{{ message }}</p>
</template>
