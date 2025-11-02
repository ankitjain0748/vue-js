<template>
  <div class="pb-[40px] md:pb-[40px] lg:pb-[60px]" :class="classess">
    <div
      v-if="faq && faq.length > 0"
      class="mx-auto container sm:container md:container lg:container xl:max-w-[1230px] px-4"
    >
      <h2 class="text-2xl font-bold mb-4">Frequently Asked Questions</h2>

      <div
        v-for="(item, index) in faq"
        :key="index"
        class="border-b border-[#C6C7C8]"
      >
        <button
          @click="toggleFaq(index)"
          class="block w-full text-left bg-white border-none py-3 md:py-5 -tracking-[0.04em] font-semibold text-base md:text-lg lg:text-xl cursor-pointer relative pr-20"
        >
          {{ item.question }}
          <span
            class="text-[#008F70] bg-[#C6E4DE] h-[32px] w-[32px] md:h-[38px] md:w-[38px] lg:h-[44px] lg:w-[44px] flex items-center justify-center rounded-full absolute right-0 top-1/2 -translate-y-1/2"
          >
            {{ openIndex === index ? '-' : '+' }}
          </span>
        </button>

        <div
          class="pb-5 transition-all duration-500 overflow-hidden"
          :class="{ block: openIndex === index, hidden: openIndex !== index }"
        >
          <p class="text-gray-700 leading-relaxed">
            {{ item.answer }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import Faq from "@/json/home.json"
import { ref } from 'vue'

const faq = ref(Faq?.data?.Faqrecord || [])

// onMounted(() => {
//   console.log('Faq Home Data:', Lessons.value)
// })

// Local state
const openIndex = ref(null)

// Toggle function
const toggleFaq = (index) => {
  openIndex.value = openIndex.value === index ? null : index
}
</script>
