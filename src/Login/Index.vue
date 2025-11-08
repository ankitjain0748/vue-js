<script setup>
import Layout from '@/common/Layout.vue'
import { reactive } from 'vue'

const formData = reactive({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const handsubmit = async () => {
  alert('Form Submitted!')
  console.log(formData)
}
</script>

<template>
  <Layout>
    <div class="mx-auto container xl:max-w-[1230px] px-4 py-10 mb-4">
      <h1 class="text-center text-3xl font-bold text-red-600 mt-5 mb-2">Login Us</h1>
      <p class="text-gray-600 text-center max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus natus praesentium excepturi non
        temporibus quam minima hic beatae magni quasi asperiores ipsum ducimus quibusdam numquam, aliquam,
        aperiam ipsa vero veniam.
      </p>

      <div class="mt-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <img
              src="@/assets/Images/learning.png"
              alt="Contact Us Image"
              class="w-full h-auto rounded-lg shadow-md"
            />
          </div>

          <div>
            <form @submit.prevent="handsubmit">
              <div class="mb-4">
                <label for="name" class="block mb-1 font-semibold">Name</label>
                <input
                  type="text"
                  id="name"
                  v-model="formData.name"
                  name="name"
                  class="w-full border border-gray-300 p-2 rounded"
                />
              </div>

              <div class="mb-4">
                <label for="email" class="block mb-1 font-semibold">Email</label>
                <input
                  type="email"
                  id="email"
                  v-model="formData.email"
                  name="email"
                  class="w-full border border-gray-300 p-2 rounded"
                />
              </div>

              <div class="mb-4">
                <label for="phone" class="block mb-1 font-semibold">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  v-model="formData.phone"
                  class="w-full border border-gray-300 p-2 rounded"
                />
              </div>

              <div class="mb-4">
                <label for="message" class="block mb-1 font-semibold">Message</label>
                <textarea
                  rows="6"
                  id="message"
                  name="message"
                  v-model="formData.message"
                  class="w-full border border-gray-300 p-2 rounded"
                ></textarea>
              </div>

              <button
                type="submit"
                class="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
