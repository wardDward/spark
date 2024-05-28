<template>
    <div class="w-full h-screen flex  justify-center p-5 md:p-10 xl:p-32">
        <div class="w-full flex justify-center md:justify-between items-center">
            <div class="w-full min-h-full lg:w-[49%] flex flex-col justify-center p-10">
                <form @submit.prevent="login" class="w-full flex flex-col items-center">
                    <div class="text-center mt-16">
                        <h1
                            class="text-[25px] bg-gradient-to-r from-indigo-700 to-orange-500 bg-clip-text text-transparent font-bold tracking-wider">
                            Welcome to Spark</h1>
                        <p class="text-sm my-2 italic font-semibold text-gray-600">
                            "Lorem ipsum dolor sit."
                        </p>
                    </div>
                    <div class="mt-[30px] md:mt-[60px] flex flex-col items-center w-full md:w-3/5">
                        <div class="flex flex-col space-y-1 w-full">
                            <label for="email" class="text-gray-700 font-semibold text-sm">Email</label>
                            <input type="text" v-model="credentials.email"
                                class="py-2 px-3 border border-gray-400 rounded-full outline-none focus:border-indigo-500 focus:ring-2 w-full"
                                placeholder="Enter your email">
                            <p class="text-red-600 text-sm" v-if="errorMessage.email">{{
                                errorMessage.email[0] }}</p>
                        </div>
                    </div>
                    <div class="mt-5 mb-4 flex flex-col items-center w-full md:w-3/5">
                        <div class="flex flex-col space-y-1 w-full">
                            <label for="email" class="text-gray-700 font-semibold text-sm">Password</label>
                            <input type="password" v-model="credentials.password"
                                class="py-2 px-3 border border-gray-400 rounded-full outline-none focus:border-indigo-500 focus:ring-2 w-full"
                                placeholder="Enter your password">
                            <p class="text-red-600 text-sm" v-if="errorMessage.password">{{
                                errorMessage.password[0] }}</p>
                        </div>
                    </div>
                    <div class="my-3">
                        <a href="#" class="text-gray-700 font-semibold hover:text-orange-600">Forgot Password?</a>
                    </div>
                    <div class="w-full md:w-3/5 mt-3">
                        <button type="submit" :disabled="loading"
                            class="w-full bg-gradient-to-r from-indigo-500 to-orange-500 text-white py-2 rounded-full font-semibold tracking-wider hover:from-indigo-600 hover:to-orange-600 transition duration-300 ease-in-out inline-flex justify-center items-center">
                            <svg v-if="loading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4">
                                </circle>
                                <path class="opacity-75" fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                </path>
                            </svg>Log
                            In</button>
                    </div>

                </form>
                <div class="flex justify-center items-center flex-col">
                    <p class="text-sm mt-10 text-gray-800">Dont have an account? <a href="/register"
                            class="text-green-500 font-medium tracking-wide hover:text-green-700 hover:underline">Register
                            Now.</a></p>

                    <div
                        class="w-full md:w-3/5 my-6 border border-gray-300 bg-white shadow-lg p-4 flex justify-center items-center space-x-3 cursor-pointer hover:bg-slate-100">
                        <img src="@/assets/image/google_logo.png" class="w-6 h-6" alt="">
                        <span class="font-semibold tracking-wide text-gray-800">Sign up with Google</span>
                    </div>
                </div>
            </div>
            <div class="hidden h-full lg:block w-[50%] relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1685342412273-abce53dd187e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                    class="w-full h-full object-fill transform shadow-lg rounded-md" alt="">
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { useAuthStore } from '../../stores/auth';
import { useRouter } from 'vue-router';

const authStore = useAuthStore()
const router = useRouter()

const errorMessage = ref([])
const loading = ref(false)
const credentials = reactive({
    email: '',
    password: '',
})

const login = () => {
    loading.value = true
    authStore.handleLogin(credentials).then(() => {
        router.push('/')
    }).catch(error => {
        errorMessage.value = error.response.data.errors
    }).finally(() => {
        loading.value = false
        credentials.password = ''
    })
}


</script>


