<template>
  <h1
    v-bind="$attrs"
    mb-4 border-b-2 border-teal-500 p-4 text-center text-4xl font-bold text-teal-500
  >
    <slot />
  </h1>
</template>
