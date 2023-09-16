<script setup lang="ts" generic="T extends any, O extends any">
import type { Rules } from 'async-validator'
import { useAsyncValidator } from '@vueuse/integrations/useAsyncValidator'
import type { UseFetchReturn } from '@vueuse/core'
import type { LoginResponse } from '~/@types'
import { useAuthStore, useErrorsStore } from '~/store'

defineOptions({
  name: 'AuthSignIn',
})

const errorState = useErrorsStore()
const authState = useAuthStore()
const router = useRouter()

const loginResponse: Ref<Pick<UseFetchReturn<LoginResponse>, 'canAbort' | 'abort' | 'data'> | undefined> = ref()
const isLoading = ref(false)
const isButtonDisabled = ref(true)
const formState = reactive({ email: '', password: '' })
const rules = ref<Rules>({
  email: {
    type: 'email',
    required: true,
    transform: (value: string) => value.trim(),
  },
  password:
  {
    type: 'string',
    min: 32,
    required: true,
  },
})

// Missing from the docs details for immediate, execute https://github.com/vueuse/vueuse/pull/2899
const { errorFields, errors, execute: validate } = useAsyncValidator(formState, rules, { immediate: false })

// Apparently there is a bug on `pass` during reactivity. Initial value is always true.
watch(errors, () => {
  isButtonDisabled.value = (errors.value || [])?.length > 0
}, { deep: true })

async function onLogin() {
  isLoading.value = true
  isButtonDisabled.value = true

  if (loginResponse.value?.canAbort)
    loginResponse.value.abort()

  loginResponse.value = undefined

  const { pass: canProceed } = await validate()

  if (canProceed) {
    loginResponse.value = await authState.login({
      email: formState.email,
      password: formState.password,
    })
  }

  isLoading.value = false
  isButtonDisabled.value = false

  if (loginResponse.value?.data)
    router.push('/dashboard/overview')
}
</script>

<template>
  <div mx-auto mt-5 max-w-md w-full>
    <div i-carbon-campsite inline-block text-4xl />
    <div py-4 />

    <FormTitle mb-4 text-center>
      Welcome | Sign In
    </FormTitle>
    <ErrorMessage
      v-if="errorState.hasErrors('authLogin')"
      :error="errorState.latestError('authLogin')"
    />
    <Loading :loading="isLoading" />
    <form @submit.prevent="onLogin">
      <div mb-4 flex flex-col>
        <Label for="email">Email</Label>
        <TextInput
          id="email"
          v-model="formState.email"
          type="email"
          placeholder="Email"
          autocomplete="email"
          aria-label="Email"
          :class="{ '!border-red border-b-2': errorFields?.email?.length }"
        />
        <FieldError v-if="errorFields?.email?.length">
          {{ errorFields.email[0].message }}
        </FieldError>
      </div>
      <div mb-4 flex flex-col>
        <Label for="password">Password</Label>
        <TextInput
          id="password"
          v-model="formState.password"
          :class="{ '!border-red  border-b-2': errorFields?.password?.length }"
          type="password" placeholder="Password"
          autocomplete="current-password"
          aria-label="Password"
          w-full border-gray-300 rounded-md
        />
        <FieldError v-if="errorFields?.password?.length">
          {{ errorFields.password[0].message }}
        </FieldError>
      </div>
      <Button
        type="submit" :disabled="isButtonDisabled"
        aria-label="Sign In"
      >
        Sign In
      </Button>
    </form>
  </div>
</template>
