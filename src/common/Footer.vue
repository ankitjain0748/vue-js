<template>
  <footer class="bg-[#EFD1D1] pt-[50px] md:pt-[60px] lg:pt-[90px] pb-[15px] md:pb-[20px]">
    <div class="mx-auto container sm:container md:container lg:container xl:max-w-[1230px] px-4">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div class="w-full md:w-[324px] px-4 mb-5 md:mb-0">
          <router-link to="/">
            <img class="block mx-auto md:mx-0" :src="FooterLogo" alt="Footer Logo" />
          </router-link>
        </div>

        <div class="w-full md:w-[324px] px-4 text-center md:text-left">
          <h3 class="text-[#CC2828] text-lg lg:text-xl -tracking-[0.04em] font-bold mb-3 md:mb-4">
            Quick Links
          </h3>
          <ul class="space-y-1">
            <li><router-link to="/" class="-tracking-[0.03em] text-base text-[#CC2828] hover:underline">Home</router-link></li>
            <li><router-link to="/find-teacher" class="-tracking-[0.03em] text-base text-[#CC2828] hover:underline">Find a Teacher</router-link></li>
            <li><router-link to="/#howitwork" class="-tracking-[0.03em] text-base text-[#CC2828] hover:underline">How It Works</router-link></li>
            <li><router-link to="/#faq" class="-tracking-[0.03em] text-base text-[#CC2828] hover:underline">FAQ</router-link></li>
            <li>
              <p class="-tracking-[0.03em] text-base text-[#CC2828] hover:underline">
                Contact: office@japaneseforme.com
              </p>
            </li>
          </ul>
        </div>

        <div class="w-full md:w-[324px] px-4">
          <ul class="space-y-1">
            <li><router-link to="/term-conditions" class="-tracking-[0.03em] text-base text-[#CC2828] hover:underline">Terms & Condition</router-link></li>
            <li><router-link to="/privacy-policy" class="-tracking-[0.03em] text-base text-[#CC2828] hover:underline">Privacy Policy</router-link></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="border-t border-[rgba(56,121,117,0.2)] pt-3.5 mt-10 md:mt-16 lg:mt-28 text-center">
      <div class="mx-auto container sm:container md:container lg:container xl:max-w-[1230px] px-4">
        <p class="text-[#CC2828] -tracking-[0.03em] text-sm lg:text-base m-0">
          © 2025 Japanese for Me. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import FooterLogo from '@/assets/Images/footer-logo.png';

export default {
  name: 'Footer',
  data() {
    return {
      FooterLogo,
    };
  },
};
</script>
