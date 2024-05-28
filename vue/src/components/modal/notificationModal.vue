<template>
    <Teleport to="#modal">
        <div class="fixed top-2 right-4 bg-white border-x-0 border-b-0 border-t-4  shadow-lg p-4 rounded-md w-[500px] flex items-center justify-between h-[80px]  z-50"
            :class="[notification.type === 'success' ? 'border-t-green-500' : '']">
            <span>{{ notification.message }}</span>
            <div class="flex justify-end items-end cursor-pointer hover:bg-slate-100 p-2 rounded-full" @click.prevent="showModal = false">
                <XMarkIcon class="w-6 h-6" />
            </div>
        </div>
    </Teleport>
</template>

<script setup>
import { XMarkIcon } from '@heroicons/vue/24/solid'
import { useBlogStore } from '../../stores/blog';
import { computed } from 'vue';

const blogStore = useBlogStore()

const notification = computed(() => blogStore.notification)

</script>



