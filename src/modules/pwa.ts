import { type ViteSSGContext } from 'vite-ssg'

// https://github.com/antfu/vite-plugin-pwa#automatic-reload-when-new-content-available
export const install: (ctx: ViteSSGContext) => void = ({ isClient, router }) => {
  if (!isClient)
    return

  router.isReady()
    .then(async () => {
      const { registerSW } = await import('virtual:pwa-register')
      registerSW({ immediate: true })
    })
    .catch(() => {})
}
