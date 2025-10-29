<template>
  <Layout>

    <HomePage />
  </Layout>
</template>

<script>
import Layout from '@/common/Layout.vue';
import HomePage from './HomePage.vue'

export default {
  name: 'HelloWorld',
  components: {
    HomePage   ,
    Layout
  },
  props: {
    msg: String
  }
}
</script>
