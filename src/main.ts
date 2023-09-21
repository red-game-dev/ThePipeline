import { createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages'
import { createHead } from '@unhead/vue'
import { ViteSSG } from 'vite-ssg'
import { type ViteSSGContext } from 'vite-ssg'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

const head = createHead()
export const app = ViteSSG(App,
  { routes, base: import.meta.env.BASE_URL, history: createWebHistory(import.meta.env.BASE_URL) },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.glob<{ install: (ctx: ViteSSGContext) => void }>('./modules/*.ts', { eager: true }))
      .forEach(i => i.install?.(ctx))

    ctx.app.use(head)
  },
)
