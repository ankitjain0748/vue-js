<script setup>
import { reactive } from 'vue'
import Layout from '@/common/Layout.vue'

// Step 1: Define your form fields dynamically
const formFields = [
  { label: 'Name', type: 'text', model: 'name', placeholder: 'Enter your name' },
  { label: 'Email', type: 'email', model: 'email', placeholder: 'Enter your email' },
  { label: 'Phone', type: 'tel', model: 'phone', placeholder: 'Enter your phone number' },
  { label: 'Message', type: 'textarea', model: 'message', placeholder: 'Write your message' }
]

// Step 2: Create reactive form data object
const formData = reactive({
  name: '',
  email: '',
  phone: '',
  message: ''
})

// Step 3: Handle form submit
const handleSubmit = () => {
  console.log('Form Data:', formData)
  alert(`Form Submitted!\nName: ${formData.name}\nEmail: ${formData.email}`)
}
</script>

<template>
  <Layout>
    <div class="mx-auto container xl:max-w-[1230px] px-4 py-10 mb-4">
      <h1 class="text-center text-4xl text-red-600 mt-5 mb-2">Contact Us</h1>

      <p class="!max-w-[400px] mx-auto text-center text-gray-500 text-lg mt-3 mb-8">
        Feel free to contact us by filling out the form below.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Left Image -->
        <div>
          <img
            src="@/assets/Images/learning.png"
            alt="Contact Us"
            class="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <!-- Right Form -->
        <div>
          <form @submit.prevent="handleSubmit">
            <div v-for="field in formFields" :key="field.model" class="mb-4">
              <label class="block mb-1 font-medium">{{ field.label }}</label>

              <!-- If not textarea -->
              <input
                v-if="field.type !== 'textarea'"
                :type="field.type"
                :placeholder="field.placeholder"
                v-model="formData[field.model]"
                class="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-red-400"
              />

              <!-- If textarea -->
              <textarea
                v-else
                :placeholder="field.placeholder"
                rows="5"
                v-model="formData[field.model]"
                class="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-red-400"
              ></textarea>
            </div>

            <button
              type="submit"
              class="bg-red-600 text-white px-5 py-2 rounded hover:bg-red-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </Layout>
</template>
