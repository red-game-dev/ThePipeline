<template>
  <main relative m-0 overflow-hidden text-center font-sans before:pointer-events-none before:z="12">
    <Navigation />
    <RouterView v-slot="{ Component }">
      <template v-if="Component">
        <KeepAlive>
          <Suspense>
            <component :is="Component" />

            <template #fallback>
              <Loading :loading="true" />
            </template>
          </Suspense>
        </KeepAlive>
      </template>
    </RouterView>
    <Footer />
  </main>
</template>
