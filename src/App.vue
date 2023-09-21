<script setup lang="ts">
import { useHead } from '@unhead/vue'

useHead({
  title: 'ThePipeline',
  meta: [
    { name: 'description', content: 'Deploy with peace of mind' },
    {
      name: 'theme-color',
      content: () => isDark.value ? '#00aba9' : '#ffffff',
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: () => preferredDark.value ? '/favicon-dark.svg' : '/favicon.svg',
    },
  ],
})
</script>

<template>
  <main relative m-0 overflow-hidden text-center font-sans before:pointer-events-none before:z="12">
    <Navigation />
    <RouterView v-slot="{ Component }">
      <template v-if="Component">
        <KeepAlive>
          <Suspense>
            <component :is="Component" />

            <template #fallback>
              <Loading :loading="true" />
            </template>
          </Suspense>
        </KeepAlive>
      </template>
    </RouterView>
    <Footer />
  </main>
</template>
