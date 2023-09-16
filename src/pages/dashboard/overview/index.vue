<script setup lang="ts" generic="T extends any, O extends any">
import { useAuthStore, useErrorsStore, useUserStore } from '~/store'

defineOptions({
  name: 'DashboardOverview',
})

const authState = useAuthStore()
const userState = useUserStore()
const errorState = useErrorsStore()
const router = useRouter()

const isLoading = ref(true)

function logout() {
  authState.logout()

  router.push('/')
}

onMounted(async () => {
  await userState.fetchProfile()

  isLoading.value = false
})
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center">
    <ErrorMessage v-if="errorState.hasErrors('authProfile')" :error="errorState.latestError('authProfile')" />

    <Loading v-if="isLoading" :is-loading="isLoading" />
    <UserDetails
      v-else
      :name="userState.getProfile?.name || ''"
      :email="userState.getProfile?.email || ''"
      :avatar="userState.getProfile?.avatar || ''"
    />
    <Button aria-label="Sign out" @click.prevent="logout">
      Sign out
    </Button>
  </div>
</template>
