import type { UserProfile } from '@/@types'
import { useErrorsStore } from '@/store'

interface State {
  profile?: UserProfile | null
}

export const useUserStore = defineStore('user', {
  state: (): State => ({
    profile: null,
  }),
  getters: {
    getProfile: (state: State) => state.profile,
  },
  actions: {
    async fetchProfile() {
      const errorStore = useErrorsStore()

      const { abort, canAbort, error, data } = await profileRequest()

      if (error.value) {
        errorStore.add({ errors: [error.value], key: 'userProfile' })

        return
      }

      const { password: _password = null, ...profile } = data?.value || {}

      this.$patch({
        profile,
      })

      return {
        abort,
        canAbort,
        data,
      }
    },
  },
})
