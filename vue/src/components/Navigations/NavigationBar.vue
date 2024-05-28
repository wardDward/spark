<template>
    <nav
        class="fixed top-0 left-0 right-0 flex justify-normal md:justify-between items-center py-3 px-2 md:px-10 md:py-3  bg-white md:space-x-6 shadow-lg">
        <div class="w-auto md:w-[100px] lg:w-[150px] mr-3 lg:mr-0 shrink-0">
            <a href="#" class="text-2xl font-bold">Logo</a>
        </div>
        <div class="flex-grow">
            <form action="">
                <div class="relative flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="self-center ml-[2px] md:ml-0 w-5 h-5 absolute left-3 text-gray-600">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    <input type="text"
                        class="w-[50px] md:w-3/5 py-2 px-0 md:px-9 border md:border-none placeholder:font-semibold rounded-full md:rounded-none placeholder:text-transparent md:placeholder:text-gray-600 outline-gray-500"
                        placeholder="Filter by Keyword">
                </div>
            </form>
        </div>
        <div class="w-5/12 md:w-3/12 lg:w-2/12 flex justify-end items-center space-x-3 md:space-x-6 shrink-0">
            <router-link :to="{name: 'CreateBlog'}">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 md:w-6 h-5 md:h-6 cursor-pointer hover:text-orange-500 hover:fill-current">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </router-link>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 md:w-6 h-5 md:h-6 cursor-pointer hover:text-orange-500 hover:fill-current">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                </svg>
            </div>
            <div class="cursor-pointer" @click.prevent="dropDownSettings = !dropDownSettings">
                <img src="https://images.unsplash.com/photo-1642649149963-0ef6779df6c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                    alt="" class="w-10 h-9 md:w-10 md:h-9 lg:w-9 lg:h-8 rounded-md">
            </div>
        </div>
        <div class="bg-white p-2 absolute top-full right-0 w-full sm:w-[280px] flex flex-col shadow-sm mt-[.5px] z-20"
            v-if="dropDownSettings">
            <a href="#" class="w-full hover:bg-gray-100/60 rounded-md p-2 inline-flex items-center ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6 mr-2 text-gray-600">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span class="text-gray-600 font-normal">Profile</span>
            </a>
            <a href="#" class="w-full hover:bg-gray-100/60 rounded-md p-2 inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6 text-gray-600 mr-2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>

                <span class="text-gray-600 font-normal">Settings</span>
            </a>
            <a href="#" @click.prevent="authStore.logout"
                class="w-full hover:bg-gray-100/60 rounded-md p-2 inline-flex items-center ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6 text-gray-600 mr-2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                </svg>

                <span class="text-gray-600 font-normal">Logout</span>
            </a>
        </div>
    </nav>
    <CreateBlogModal v-if="toggleCreateModal" @toggleModal="toggleModal"/>
</template>

<script setup>
import { defineAsyncComponent, ref } from 'vue';
import { useAuthStore } from '../../stores/auth';


const CreateBlogModal = defineAsyncComponent(() =>
    import('../modal/CreateBlogModal.vue')
)

const authStore = useAuthStore()

console.log(authStore.user.userInfo);

const dropDownSettings = ref(false)
const toggleCreateModal = ref(false)

const toggleModal = () => {
    toggleCreateModal.value = !toggleCreateModal.value
}


</script>