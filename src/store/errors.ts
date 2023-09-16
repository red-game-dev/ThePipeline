interface State {
  errors: Record<string, Error[]>
}

interface AddErrorsActionArgs {
  errors: Error[]
  key: string
}

interface RemoveErrorActionArgs {
  error: Error
  key: string
}

export const useErrorsStore = defineStore('errors', {
  state: (): State => ({
    errors: {},
  }),
  getters: {
    getErrors: (state: State) => state.errors,
    hasErrors: (state: State) => (key: string) => (state.errors[key] || []).length > 0,
    latestError: (state: State) => (key: string) => (state.errors[key] || [])[(state.errors[key] || []).length - 1],
  },
  actions: {
    add({ errors, key }: AddErrorsActionArgs) {
      if (!this.errors[key])
        this.errors[key] = []

      this.errors[key].push(...errors)
    },
    remove({ error, key }: RemoveErrorActionArgs) {
      if (!this.errors[key])
        return

      if (this.errors[key].includes(error))
        this.errors[key].splice(this.errors[key].indexOf(error), 1)
    },
    clear() {
      this.errors = {}
    },
  },
})
