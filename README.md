# ThePipeline

Welcome to ThePipeline, a dynamic and user-friendly application designed to provide a seamless user experience from login to dashboard navigation. With a clean and modern UI, ThePipeline aims to make your workflow as smooth as possible.

## 🛠 Installation

To get started with ThePipeline, follow these simple installation steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/red-game-dev/ThePipeline.git
    ```

2. Move into the project directory:

    ```bash
    cd ThePipeline
    ```

3. Install dependencies and run the development server:

    ```bash
    pnpm i && pnpm dev
    ```

## 🌟 Features

Here's what makes ThePipeline awesome:

1. **Login Page**: Easily login using `john@mail.com` and `changeme` as credentials. The backend API is powered by [`https://fakeapi.platzi.com/en/rest/auth-jwt#get-user-with-session`](https://fakeapi.platzi.com/en/rest/auth-jwt#get-user-with-session). Any other credentials will result in an "Unauthorized" message.

2. **Dashboard**: Once logged in, you'll be redirected to a user dashboard that showcases your profile details like name, avatar, and email.

3. **Landing Page**: A sleek and simple landing page that provides a warm welcome to all users.

4. **General Layout**: With a consistent design including a header and footer, the general layout is both visually pleasing and easy to navigate.

Absolutely, you can extend the **Improvements** section with these additional details. Here's the updated Markdown content for that part:

---

## 🚀 Improvements

Here are some improvements that would have been implemented in reality

1. **@tankstack/vue-query Integration**: This will drastically reduce the boilerplate code for client-state and cache management, streamlining the codebase for greater efficiency.

2. **Better UI**: The existing UI was built for test purposes, therefore a better design UI/UX would have been implemented.

3. **Testing**: Implementing different types of tests like integration tests, unit tests, and end-to-end tests will solidify the codebase, making it less prone to bugs as we scale and add more features.

4. **SEO & Lighthouse Score**: Optimizing for search engines and aiming for a high Lighthouse score for better user experience and accessibility.

5. **Performance Monitoring**: Adding tracking for all actions in the app will provide insights into performance bottlenecks, leading to a smoother user experience.

6. **UnoCSS Configuration**: More shortcuts similar to Tailwind's utility classes for easier management and more efficient rendering.

7. **Auth Token**: Update the access token before expires automatically. This could be done through `beforeFetch` on fetching instance.

8. **Api Error Handling**: Api fetcher instance could have automatically handling the errors going to the error store, therefore would not require to configure anything from your end and just call with a specific key.

Furthermore can discussed

## Original built using the boilerplate from <a href="https://github.com/antfu/vitesse">Vitesse</a>

- ⚡️ [Vue 3](https://github.com/vuejs/core), [Vite 3](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/), [ESBuild](https://github.com/evanw/esbuild) - born with fastness

- 🗂 [File based routing](./src/pages)

- 📦 [Components auto importing](./src/components)

- 🎨 [UnoCSS](https://github.com/antfu/unocss) - The instant on-demand atomic CSS engine.

- 😃 Use icons from any icon sets in [Pure CSS](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

- 🔥 Use the [new `<script setup>` style](https://github.com/vuejs/rfcs/pull/227)

- ✅ Use [Vitest](http://vitest.dev/) for unit and components testing

- 🦾 TypeScript, of course

- ☁️ Deploy on Netlify, zero-config
