<template>
    <div class="w-full h-screen flex justify-center items-center p-0 md:p-10 xl:p-12">
        <div
            class="flex flex-col justify-center items-center bg-white w-full md:w-11/12 lg:w-9/12 rounded-md shadow-none md:shadow-2xl p-10 lg:p-20">
            <div class="flex flex-col items-center justify-center mt-[20px] md:my-6">
                <h1 class="text-lg md:text-2xl mt-6 md:mt-0 text-center md:text-start">Create your <span
                        class="bg-gradient-to-r from-indigo-700 to-orange-500 bg-clip-text text-transparent">Spark</span>
                    account</h1>
                <p class="my-2 text-sm text-gray-600">Already have an account? <a href="/login"
                        class="text-green-500 font-medium tracking-wide hover:text-green-700 hover:underline">Log In</a>
                </p>
            </div>
            <div
                class="my-3 w-full md:w-3/4 lg:w-1/2 bg-white shadow-lg p-2 md:p-4 flex justify-center items-center space-x-3 cursor-pointer hover:bg-slate-100">
                <img src="@/assets/image/google_logo.png" class="w-6 h-6" alt="">
                <span class="text-sm text-center font-semibold tracking-wide text-gray-800">Sign up with Google</span>
            </div>
            <div class="w-full">
                <form @submit.prevent="register" class="w-full flex flex-col justify-center items-center">
                    <div class="flex justify-between w-full flex-wrap">
                        <div class="w-full md:w-[49%] my-2 flex flex-col ">
                            <label for="firstname" class="text-md font-medium text-gray-600">Firstname <span
                                    class="text-red-600">*</span></label>
                            <input type="text" v-model="formData.firstname" name="firstname"
                                class="border border-gray-400 rounded-md w-full py-1 px-3">
                            <p class="text-red-500 text-sm" v-if="errorMessage.firstname">
                                {{ errorMessage.firstname[0] }}</p>

                        </div>
                        <div class="w-full md:w-[49%] my-2 flex flex-col ">
                            <label for="lastname" class="text-md font-medium text-gray-600">Lastname <span
                                    class="text-red-600">*</span></label>
                            <input type="text" v-model="formData.lastname" name="lastname"
                                class="border border-gray-400 rounded-md w-full py-1 px-3">
                            <p class="text-red-500 text-sm" v-if="errorMessage.lastname">
                                {{ errorMessage.lastname[0] }}</p>
                        </div>
                    </div>
                    <div class="flex justify-between w-full flex-wrap">
                        <div class="w-full my-2 flex flex-col ">
                            <label for="email" class="text-md font-medium text-gray-600">Email <span
                                    class="text-red-600">*</span></label>
                            <input type="email" v-model="formData.email" name="email"
                                class="border border-gray-400 rounded-md w-full py-1 px-3">
                            <p class="text-red-500 text-sm" v-if="errorMessage.email">
                                {{ errorMessage.email[0] }}</p>
                        </div>
                    </div>
                    <div class="flex justify-between w-full flex-wrap">
                        <div class="w-full md:w-[49%] my-2 flex flex-col ">
                            <label for="password" class="text-md font-medium text-gray-600">Password <span
                                    class="text-red-600">*</span></label>
                            <input type="password" v-model="formData.password" name="password"
                                class="border border-gray-400 rounded-md w-full py-1 px-3">
                            <p class="text-red-500 text-sm" v-if="errorMessage.password">
                                {{ errorMessage.password[0] }}</p>
                        </div>
                        <div class="w-full md:w-[49%] my-2 flex flex-col ">
                            <label for="" class="text-md font-medium text-gray-600">Confirm Password <span
                                    class="text-red-600">*</span></label>
                            <input type="password" v-model="formData.password_confirmation"
                                class="border border-gray-400 rounded-md w-full py-1 px-3">
                        </div>
                    </div>
                    <div class="w-full mt-10">
                        <button type="submit" :disabled="loading"
                            class="w-full py-2 bg-green-600 rounded-md text-white font-semibold tracking-widest hover:bg-green-800">Register</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <LoadingModal v-if="loading" :message="loadingMessage"/>
</template>

<script setup>
import { defineAsyncComponent, reactive, ref } from 'vue';
import { useAuthStore } from '../../stores/auth';
import { useRouter } from 'vue-router';

const LoadingModal = defineAsyncComponent(() =>
    import('../../components/modal/LoadingModal.vue')
)

const authStore = useAuthStore()
const router = useRouter()
const errorMessage = ref([])
const loading = ref(false)
const loadingMessage = ref('Checking your crendentials...')

const formData = reactive({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    password_confirmation: ''
})

const register = () => {
    loading.value = true
    authStore.handleRegistration(formData).then(() => {
        router.push('/')
    }).catch(error => {
        errorMessage.value = error.response.data.errors
    }).finally(() => {
        loading.value = false
    })
}



</script>

