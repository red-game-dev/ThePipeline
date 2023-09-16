<script setup lang="ts" generic="T extends any, O extends any">
import type { RouterLinkProps } from 'vue-router'

const props = defineProps<RouterLinkProps>()
</script>

<template>
  <router-link :to="props.to" v-bind="$attrs" text-md p-4 font-bold no-underline hover:text-teal-500>
    <slot />
  </router-link>
</template>
