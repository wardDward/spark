<template>
    <NavigationBar />
    <main class="main mt-[65px] min-h-full w-full flex" id="main">
        <Sidebar class="shrink-0 " :style="{ width: wSide }" @toggleSidebar="toggleSidebar" :toggle="toggle" />
        <RouterView class="flex-grow main_content" :style="{ marginLeft: marginL }" />
    </main>
</template>

<script setup>
import NavigationBar from '../Navigations/NavigationBar.vue';
import Sidebar from '../Navigations/Sidebar.vue';

import { onMounted, ref, watch } from 'vue';
import { useAuthStore } from '../../stores/auth';

const wSide = ref('80px')
const marginL = ref('80px')
const toggle = ref(false)


const authStore = useAuthStore()

const toggleSidebar = () => {
    toggle.value = !toggle.value
}

watch(toggle, (val) => {
    if (val) {
        wSide.value = '200px'
        marginL.value = '200px'
    } else {
        wSide.value = '80px'
        marginL.value = '80px'
    }
})

onMounted(() => {
    authStore.authenticatedUser()
})
</script>

<style scoped>
.main_content {
    transition: .5s;
}
</style>
