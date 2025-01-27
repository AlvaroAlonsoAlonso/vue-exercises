<script lang="ts" setup>
import { defineProps } from 'vue'

defineProps({
  propTitle: String,
})
</script>
<template>
  <h2>{{ propTitle }}</h2>
</template>
