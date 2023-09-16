import { useErrorsStore } from '~/store'

interface State {
  accessToken: string | null
  refreshToken: string | null
}

interface LoginActionArgs {
  email: string
  password: string
}

export const useAuthStore = defineStore('auth', {
  state: (): State => ({
    accessToken: useLocalStorage<string | null>('accessToken', null).value,
    refreshToken: useLocalStorage<string | null>('refreshToken', null).value,
  }),
  getters: {
    isAuthenticated: (state: State) => state.accessToken !== null && state.refreshToken !== null,
  },
  actions: {
    async login({ email, password }: LoginActionArgs) {
      const errorStore = useErrorsStore()

      const { abort, canAbort, error, data } = await loginRequest({
        email,
        password,
      })

      if (error.value) {
        errorStore.add({ errors: [error.value], key: 'authLogin' })

        return
      }

      const { access_token = null, refresh_token = null } = data?.value || {}

      this.$patch({
        accessToken: access_token,
        refreshToken: refresh_token,
      })

      useLocalStorage<string | null>('accessToken', null).value = access_token
      useLocalStorage<string | null>('refreshToken', null).value = refresh_token

      return {
        abort,
        canAbort,
        data,
      }
    },
    logout() {
      this.$patch({
        accessToken: null,
        refreshToken: null,
      })

      useLocalStorage<string | null>('accessToken', null).value = null
      useLocalStorage<string | null>('refreshToken', null).value = null
    },
    async fetchRefreshToken() {
      const errorStore = useErrorsStore()

      if (!this.refreshToken)
        return

      const { abort, canAbort, error, data } = await authTokenRequest({
        refreshToken: this.refreshToken,
      })

      if (error.value) {
        errorStore.add({ errors: [error.value], key: 'authRefreshToken' })

        return
      }

      const { access_token = null, refresh_token = null } = data?.value || {}

      this.$patch({
        accessToken: access_token,
        refreshToken: refresh_token,
      })

      useLocalStorage<string | null>('accessToken', null).value = access_token
      useLocalStorage<string | null>('refreshToken', null).value = refresh_token

      return {
        abort,
        canAbort,
        data,
      }
    },
  },
})
