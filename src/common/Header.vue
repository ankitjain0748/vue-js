  <template>
    <nav :class="[
      'fixed w-full top-0 z-50 transition-all duration-300 ease-in-out',
      scrolled ? 'bg-white py-1 lg:py-4 shadow-md' : 'bg-transparent py-3 lg:py-6' // Added shadow for 'scrolled' state
    ]">


      <div class="mx-auto container xl:max-w-[1230px] px-4">
        <div class="relative flex items-center justify-between">
          <div class="flex-shrink-0">
            <router-link to="/">
              <img class="w-[100px] h-[85px]" :src="logo" alt="japanese for me logo" />
            </router-link>
          </div>

          <div :class="[
            'absolute flex-col lg:flex-row top-full lg:top-auto lg:relative left-0 right-0 bg-white lg:bg-transparent lg:ml-2 w-full lg:w-auto transition-all duration-300',
            menuOpen ? 'flex' : 'hidden lg:flex',
          ]">
            <ul class="flex flex-col lg:flex-row flex-wrap lg:space-x-8 xl:space-x-10 w-full lg:w-auto">
              <li class="w-full lg:w-auto relative cursor-pointer border-b lg:border-none border-[#ddd]">
                <router-link to="/"
                  class="py-3 lg:py-0 inline-block px-4 lg:px-0 capitalize text-base xl:text-lg tracking-[-0.04em] font-medium text-[#CC2828] hover:text-[#ad0e0e]">
                  Home
                </router-link>
              </li>
              <li class="w-full lg:w-auto relative cursor-pointer border-b lg:border-none border-[#ddd]">
                <router-link to="/find-teacher"
                  class="py-3 lg:py-0 inline-block px-4 lg:px-0 capitalize text-base xl:text-lg tracking-[-0.04em] font-medium text-[#CC2828] hover:text-[#ad0e0e]">
                  Find a Teacher
                </router-link>
              </li>
              <li class="w-full lg:w-auto relative cursor-pointer border-b lg:border-none border-[#ddd]">
                <router-link to="/become-teacher"
                  class="py-3 lg:py-0 inline-block px-4 lg:px-0 capitalize text-base xl:text-lg tracking-[-0.04em] font-medium text-[#CC2828] hover:text-[#ad0e0e]">
                  Become a Teacher
                </router-link>
              </li>
            </ul>

            <div v-if="user && user.role" class="flex flex-col lg:hidden w-full">
              <router-link
                :to="user.role === 'student' ? '/student' : user.role === 'teacher' ? '/teacher-dashboard' : '/admin'"
                class="text-[#CC2828] hover:text-[#ad0e0e] border-t border-b border-[#ddd] text-base py-3 px-4 font-medium cursor-pointer">
                View Dashboard
              </router-link>
              <button @click="handleLogout"
                class="text-[#CC2828] hover:text-[#ad0e0e] border-t border-[#ddd] text-base py-3 px-4 font-medium cursor-pointer text-left bg-transparent border-none">
                Logout
              </button>
            </div>

            <div v-else class="flex flex-col lg:hidden w-full">
              <router-link to="/login"
                class="text-[#CC2828] hover:text-[#ad0e0e] border-t border-[#ddd] text-base py-3 px-4 font-medium cursor-pointer">
                Log In
              </router-link>
              <router-link to="/student/register"
                class="text-[#CC2828] hover:text-[#ad0e0e] border-t border-[#ddd] text-base py-3 px-4 font-medium cursor-pointer">
                Sign Up
              </router-link>
            </div>
          </div>

          <div class="flex flex-wrap space-x-4 items-center ml-auto lg:ml-0 mr-2 lg:mr-0">
            <div v-if="route.path === '/become-teacher'" class="group relative mr-0 lg:mr-4 xl:mr-5">
              <div @click="toggleDropdown"
                class="relative cursor-pointer border border-[#CC2828] text-base tracking-[-0.03em] rounded-[6px] text-[#CC2828] py-1.5 pl-4 pr-8 min-w-[126px] text-center">
                {{ language === 'en' ? 'English' : 'Japanese' }}
                <i class="absolute right-2 top-1/2 -translate-y-1/2">
                  ▼
                </i>
              </div>

              <div v-if="dropdownOpen"
                class="absolute border border-[#ddd] border-t-0 bg-white top-full left-0 rounded-b shadow-lg z-50">
                <button @click="selectLanguage('en')"
                  class="w-full text-left py-2 px-2 border-b border-[#ddd] hover:text-[#CC2828]">
                  English
                </button>
                <button @click="selectLanguage('ja')" class="w-full text-left py-2 px-2 hover:text-[#CC2828]">
                  Japanese
                </button>
              </div>
            </div>

            <template v-if="user && user.role">
              <router-link
                :to="user.role === 'student' ? '/student' : user.role === 'teacher' ? '/teacher-dashboard' : '/admin'"
                class="hidden lg:block bg-[#CC2828] hover:bg-[#ad0e0e] text-white text-base py-3.5 px-8 xl:px-10 font-medium cursor-pointer rounded-full">
                View Dashboard
              </router-link>
              <button @click="handleLogout"
                class="hidden lg:block bg-[#CC2828] hover:bg-[#ad0e0e] text-white text-base py-3.5 px-8 xl:px-10 font-medium cursor-pointer rounded-full">
                Logout
              </button>
            </template>
            <template v-else>
              <router-link to="/student/register"
                class="hidden lg:block bg-[#CC2828] hover:bg-[#ad0e0e] text-white text-base py-3.5 px-8 xl:px-10 font-medium cursor-pointer rounded-full">
                Sign Up
              </router-link>
              <router-link to="/login"
                class="hidden lg:block bg-[#CC2828] hover:bg-[#ad0e0e] text-white text-base py-3.5 px-8 xl:px-10 font-medium cursor-pointer rounded-full">
                Log In
              </router-link>
            </template>
          </div>

          <div class="flex lg:hidden">
            <button type="button"
              class="relative inline-flex items-center justify-center rounded-md py-2 px-2.5 text-[#CC2828] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#CC2828]"
              @click="toggleMenu">
              <svg v-if="!menuOpen" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              <svg v-else class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  </template>

<script>
import { ref, onMounted, onBeforeUnmount } from "vue";
import logo from "../assets/logo.png";
import { useRoute, useRouter } from "vue-router";

export default {
  setup() {
    const user = ref(null);
    const language = ref("en");
    const router = useRouter();
    const route = useRoute();

    const menuOpen = ref(false);
    const dropdownOpen = ref(false);
    const scrolled = ref(false);

    // Function to toggle the mobile menu state
    const toggleMenu = () => {
      menuOpen.value = !menuOpen.value;
    };

    const toggleDropdown = () => {
      dropdownOpen.value = !dropdownOpen.value;
    };

    const selectLanguage = (lang) => {
      language.value = lang;
      dropdownOpen.value = false;
    };

    const handleLogout = () => {
      localStorage.removeItem("token");
      user.value = null;
      router.push("/login");
      alert("Logout Successfully");
    };

    const handleScroll = () => {
      scrolled.value = window.scrollY > 5;
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
      // Simulating user data for demonstration
      // user.value = { role: 'student' }; 
    });

    onBeforeUnmount(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    return { // <-- Return statement from setup() is all you need
      logo,
      user,
      language,
      router,
      route,
      menuOpen,
      dropdownOpen,
      scrolled,
      toggleMenu,
      toggleDropdown,
      selectLanguage,
      handleLogout,
    };
  },
};
</script>