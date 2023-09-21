<script setup lang="ts" generic="T extends any, O extends any">
const authState = useAuthStore()

const NAVIGATION_ITEMS = ref({
  logged: {
    '/dashboard/overview': 'Overview',
  },
  guest: {
    '/': 'Home',
  },
  authLinks: {
    '/auth/signin': 'Login',
  },
})

const navigationLinks = computed(() => authState.isAuthenticated
  ? {
      ...NAVIGATION_ITEMS.value.logged,
      ...NAVIGATION_ITEMS.value.guest,
    }
  : {
      ...NAVIGATION_ITEMS.value.guest,
      ...NAVIGATION_ITEMS.value.authLinks,
    })
</script>

<template>
  <header class="mx-auto flex justify-between px-4 py-5 lg:py-7 lg:py-8">
    <Logo />
    <div class="flex flex-row">
      <NavLink
        v-for="([route, label], index) in Object.entries(navigationLinks)"
        :key="`navigation-${index}`"
        :to="route"
      >
        {{ label }}
      </NavLink>
    </div>
  </header>
</template>
