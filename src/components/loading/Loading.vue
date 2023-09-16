<script setup lang="ts" generic="T extends any, O extends any">
interface Props {
  loading?: boolean
}

const props = defineProps<Props>()
</script>

<template>
  <div v-if="props.loading" w-full flex justify-around>
    <div relative h-8 w-8 overflow-hidden rounded bg-teal-500>
      <div absolute left-0 right-0 h-full w-full animate-spin bg-teal-700 />
    </div>
  </div>
</template>
