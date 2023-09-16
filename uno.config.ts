import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetMini,
  presetUno,
  presetWebFonts,
} from 'unocss'

export default defineConfig({
  rules: [
    [/^gap-(\d+)$/, ([, d]) => ({ gap: `${Number(d) / 4}rem` })],
    [/^gap-x-(\d+)$/, ([, d]) => ({ columnGap: `${Number(d) / 4}rem` })],
    [/^gap-y-(\d+)$/, ([, d]) => ({ rowGap: `${Number(d) / 4}rem` })],
  ],
  shortcuts: [
    ['logo', 'bg-teal-500 text-white hover:bg-teal-600 px-4 py-4 text-lg font-bold rounded'],
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-500 text-white cursor-pointer hover:bg-teal-600 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-500 !outline-none'],
  ],
  theme: {
    colors: {
      'notblack-dark': '#111111',
      'notblack-med': '#161616',
      'notblack-light': '#1B1B1B',

      'grey-dark': '#424242',
      'grey-mid': '#969696',

      'green': '#42E496',
      'red': '#E46255',
      'yellow': '#F19648',
      'white': '#FFFFFF',
    },
    screens: {
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
    },
    breakpoints: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
    },
  },
  presets: [
    presetUno(),
    presetMini(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
})
