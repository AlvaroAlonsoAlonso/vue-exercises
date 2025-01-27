<script setup lang="ts">
import { ref, provide } from 'vue'
import ChildComponent from '@/components/ChildComponent.vue'

const messageChild = ref('')

function handleChild(child: string) {
  messageChild.value = child
}

const messageParent = ref('Hello, from parent component')
provide('messageParent', messageParent)
</script>
<template>
  <p v-if="messageChild">{{ messageChild }}</p>
  <ChildComponent @button-hello="handleChild" />
</template>
