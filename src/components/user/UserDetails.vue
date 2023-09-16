<script setup lang="ts">
interface Props {
  name: string
  email: string
  avatar: string
}

const props = defineProps<Props>()
</script>

<template>
  <div w-64 rounded-lg p-8 shadow-teal-500>
    <div flex flex-col items-center>
      <img mb-4 h-24 w-24 rounded-full :src="avatar" alt="User Profile Image">
      <h2 mb-1 text-2xl font-semibold>
        {{ props.name }}
      </h2>
      <p text-sm text-teal-500>
        {{ props.email }}
      </p>
    </div>
  </div>
</template>
