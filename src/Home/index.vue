<template>
  <div>
    <Layout>

      <Hero :heroData="homeData.data.record" />
      <Work />
      <Lesson />
      <Ready />
      <Faq :faq="homeData.data.Faqrecord"/>
    </Layout>
  </div>
</template>

<script>
import Layout from '@/common/Layout.vue';
import Hero from './Hero.vue'
import HomeJson from '@/json/home.json'
import Work from './Work.vue';
import Lesson from './Lesson.vue';
import LessonJson from "@/json/lesson.json"
import Ready from './Ready.vue';
import Faq from './Faq.vue';

export default {
  name: 'Home',
  components: { Hero, Layout, Work, Lesson ,Ready , Faq},
  data() {
    return {
      homeData: HomeJson,
      LessonData: LessonJson
    }
  },
  // mounted() {
  //   console.log('Parent Home Data:', this.LessonData)
  // }
}
</script>
