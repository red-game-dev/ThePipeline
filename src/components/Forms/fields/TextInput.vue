<script setup lang="ts">
const modelValue = defineModel()
</script>

<template>
  <input
    v-model="modelValue"
    type="text"
    v-bind="$attrs"
    w-full rounded-md bg-teal-500 px-3 py-2 text-white placeholder:text-gray-300
  >
</template>
