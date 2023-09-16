import { createFetch } from '@vueuse/core'
import { useAuthStore } from '@/store'

// In case of 3rd parties in reality we would move this as 3rd party api fetcher for specific provider
export const useApiFetch = createFetch({
  baseUrl: 'https://api.escuelajs.co',
  combination: 'overwrite',
  options: {
    async beforeFetch({ options }) {
      const auth = useAuthStore()

      if (auth.isAuthenticated) {
        options.headers = {
          Authorization: `Bearer ${auth.accessToken}`,
        }
      }

      // Further notes
      // You can use await auth.fetchRefreshToken({ refreshToken }) and then retry the request

      return {
        options,
      }
    },
    async afterFetch(ctx) {
      return ctx
    },
    onFetchError(ctx) {
      // Here can include the store for errors, although few changes might be required for `key` to be unique
      return ctx
    },
  },
  fetchOptions: {
    headers: { 'Content-Type': 'application/json' },
  },
})
