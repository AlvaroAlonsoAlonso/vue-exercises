<script setup lang="ts">
import { ref } from 'vue'
import ChildComponent from '@/components/ChildComponent.vue'

const messageChild = ref('')
const messageParent = ref('')
function handleChild(child: string) {
  messageChild.value = child
}

function handleParent() {
  messageParent.value = 'Hello, from parent component'
}
</script>
<template>
  <p v-if="messageChild">{{ messageChild }}</p>
  <ChildComponent @button-hello="handleChild" :message-parent="messageParent" />
  <button @click="handleParent">Click Me, for hello for parent</button>
</template>
