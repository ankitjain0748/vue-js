<template>
  <div className="py-[40px] md:py-[60px] lg:py-[80px] xl:py-[100px] ">
    <div className="mx-auto container sm:container md:container lg:container xl:max-w-[1230px] px-4">
      <h2
        className="text-[#CC2828] font-inter text-[24px] sm:text-[32px] lg:text-[36px] xl:text-[45px] font-extrabold leading-[30px] sm:leading-[42px] md:leading-[44px] lg:leading-[44px] xl:leading-[55px] mb-4 lg:mb-6 xl:mb-8 -tracking-[0.04em]">
        Meet Our Best Teachers
      </h2>
      <div className="space-y-3">
        <Swiper :modules="[Autoplay]" :spaceBetween="10" :autoplay="{
          delay: 2500,
          disableOnInteraction: false
        }" :breakpoints="{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1260: { slidesPerView: 3 }
        }">
          <SwiperSlide v-for="(item, index) in Lessons.data" :key="index">
            <div class="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">

              <!-- Video or Image -->
              <div class="w-full h-[250px] md:h-[300px] lg:h-[350px] overflow-hidden">
                <video v-if="item.intro_video" controls class="w-full h-full object-cover">
                  <source :src="item.intro_video" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <img v-else :src="item.profile_photo" :alt="item.alt || item.userId.name"
                  class="w-full h-full object-cover" />
              </div>

              <!-- Card Content -->
              <div class="p-4">
                <h3 class="font-semibold text-base lg:text-lg text-[#000] mb-1 truncate">
                  {{ item.userId?.name }}
                </h3>
                <p class="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {{ item.description }}
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'

// Swiper styles
import 'swiper/css'
import 'swiper/css/autoplay'

// Import JSON
import Lesson from "@/json/lesson.json"
import { ref, onMounted } from 'vue'

const Lessons = ref(Lesson)

onMounted(() => {
  console.log('Lesson Home Data:', Lessons.value)
})
</script>



<style scoped>
/* Optional styling */
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>