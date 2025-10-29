<template>
  <footer class="bg-gray-900 text-gray-300 py-10">
    <div class="container mx-auto px-6 grid grid-cols-3 gap-8">
      <!-- Contact -->
      <div>
        <h2 class="text-lg font-semibold text-white mb-3">Contact</h2>
        <ul class="space-y-2">
          <li><span class="font-medium">Email:</span> support@myvueapp.com</li>
          <li><span class="font-medium">Phone:</span> +91 98765 43210</li>
          <li><span class="font-medium">Address:</span> Jaipur, Rajasthan</li>
        </ul>
      </div>

      <!-- Social Links -->
      <div>
        <h2 class="text-lg font-semibold text-white mb-3">Follow Us</h2>
        <ul class="flex flex-col space-y-2 text-gray-400">
          <li>
            <a href="#" class="hover:text-blue-500 flex items-center space-x-2">
              <i class="fab fa-facebook-f"></i>
              <span>Facebook</span>
            </a>
          </li>
          <li>
            <a href="#" class="hover:text-pink-500 flex items-center space-x-2">
              <i class="fab fa-instagram"></i>
              <span>Instagram</span>
            </a>
          </li>
          <li>
            <a href="#" class="hover:text-sky-400 flex items-center space-x-2">
              <i class="fab fa-twitter"></i>
              <span>Twitter</span>
            </a>
          </li>
        </ul>
      </div>

      <!-- About -->
      <div>
        <h2 class="text-lg font-semibold text-white mb-3">About</h2>
        <p class="text-gray-400 text-sm leading-relaxed">
          My Vue App is a modern web platform built with Vue.js and Tailwind CSS, 
          focused on providing a seamless and fast user experience.
        </p>
      </div>
    </div>

    <!-- Bottom Section -->
    <div class="border-t border-gray-700 mt-10 pt-4 text-center text-gray-400 text-sm">
      © 2025 My Vue App. All rights reserved.
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>
