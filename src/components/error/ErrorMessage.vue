<script setup lang="ts" generic="T extends Error, O extends Error">
interface Props {
  error?: Error | null
}

const props = withDefaults(defineProps<Props>(), {
  error: null,
})
</script>

<template>
  <div border-red bg-red p-3 text-white>
    <span v-if="isError(props.error)">
      {{ props.error?.message || props.error }}
    </span>
    <span v-else>
      An unexpected error occurred.
    </span>
  </div>
</template>
