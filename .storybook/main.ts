import type { StorybookConfig } from "@storybook/vue3-vite";
import path from 'node:path'
import { mergeConfig } from "vite";
import Inspect from 'vite-plugin-inspect';
import unoCSS from 'unocss/vite';

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-coverage',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  core: {
    disableTelemetry: true,
  },
  staticDirs: ['../public'],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          '~': `${path.resolve(__dirname, 'src')}/`
        },
      },
      plugins: [
        unoCSS(),
        Inspect(),
      ],
    });
  }
};
export default config;
