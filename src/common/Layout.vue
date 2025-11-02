<template>
  <div class="">
    <!-- Header -->
    <Header />

    <!-- Main Content -->
    <main class="flex-grow bg-gray-100 p-6">
      <slot />
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'

export default {
  name: 'LayoutDefault',
  components: { Header, Footer }
}
</script>
