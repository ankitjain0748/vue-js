<template>
  <div class="hero_bg pt-[118px] lg:pt-[128px] pb-[50px] lg:pb-[98px]">
    <div class="mx-auto container xl:max-w-[1230px] px-4">
      <div class="flex flex-col lg:flex-row justify-between items-center -mx-4">
        
        <!-- Left Side: Images -->
        <div class="w-full lg:w-7/12 px-4">
          <div class="flex flex-col gap-[44px] lg:pr-[50px]">
            <div class="flex justify-start relative h-[434px] w-full max-w-[540px]">
              <img
                v-if="heroData.hero_img_first"
                :src="heroData.hero_img_first"
                alt="Hero Banner 1"
                class="object-cover rounded-lg shadow-lg"
              />
              <div
                class="border-[10px] border-[#16C7F8] w-[76px] h-[76px] absolute right-56 bottom-1 rounded-full"
              ></div>
            </div>

            <div class="flex justify-end relative">
              <img
                v-if="heroData.hero_img_second"
                :src="heroData.hero_img_second"
                alt="Hero Banner 2"
                class="rounded-lg shadow-lg w-[480px] h-auto"
              />
              <div
                class="border-[10px] border-[#CC2828] w-[66px] h-[66px] absolute left-5 -top-5 rounded-full"
              ></div>
              <div
                class="border-[10px] border-[#FF5816] w-[48px] h-[48px] absolute left-56 -bottom-6 lg:-bottom-15 rounded-full"
              ></div>
            </div>
          </div>
        </div>

        <!-- Right Side: Heading & Button -->
        <div class="w-full lg:w-5/12 px-4 mt-8 lg:mt-0 text-center lg:text-left">
          <h1
            class="text-[#CC2828] font-inter text-[24px] sm:text-[32px] lg:text-[36px] xl:text-[55px] font-extrabold leading-[30px] sm:leading-[42px] md:leading-[44px] lg:leading-[44px] xl:leading-[60px] mb-4 lg:mb-6 xl:mb-8 -tracking-[0.04em] max-w-[500px] mx-auto"
          >
            {{ heroData.hero_heading }}
          </h1>

          <p class="text-lg text-gray-700 mb-6">
            {{ heroData.best_teacher }}
          </p>

          <div class="w-full flex justify-center lg:justify-start">
            <a
              href="/#lesson"
              class="text-center font-medium cursor-pointer rounded-full py-2.5 px-4 bg-[#CC2828] hover:bg-[#ad0e0e] text-base lg:text-lg xl:text-xl lg:py-3 xl:py-3.5 text-white max-w-[438px] w-full"
            >
              Book a lesson
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    heroData: {
      type: Object,
      required: true
    }
  },
  // mounted() {
  //   console.log('Hero Component Props:', this.heroData)
  // }
}
</script>
