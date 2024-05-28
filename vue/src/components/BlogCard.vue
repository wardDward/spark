<template>
    <div class="bg-white p-2 w-full md:w-1/2 lg:w-1/3 my-4 rounded-md shadow-md flex flex-col">
        <div class="header">
            <div class="flex justify-between items-center">
                <div class="inline-flex items-center space-x-3">
                    <div v-for="(profile, key) in blog.blog_author.profile" :key="key">
                        <img :src="profile.profile_image" class="w-12 h-12 rounded-full" alt="">
                    </div>
                    <span class="text-gray-800 text-baseline md:text-md">{{ authorFullname(blog.blog_author) }} {{ blog.id
                    }}</span>
                </div>
                <a href="#" class="flex flex-col hover:text-orange-500">
                    <EyeIcon class="w-6 h-6" />
                    <span class="text-xs text-gray-600">100</span>
                </a>
            </div>
        </div>
        <div class="card_body mt-3 mb-1 p-2 flex flex-col bg-slate-500">
            <p class="card_caption text-sm text-gray-800">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, autem?
            </p>
        </div>
        <div class="my-3 w-full flex flex-wrap flex-row items-center space-x-3 max-w-[200px]">
            <TagComponent v-for="(tag, index) in blog.tags" :key="index" :tag="tag"/>
        </div>
        <InteractionBar class="mt-2" />
    </div>
</template>

<script setup>
import InteractionBar from '../components/Navigations/InteractionBar.vue';

import { EyeIcon } from '@heroicons/vue/24/outline';
import { computed } from 'vue'
import TagComponent from './TagComponent.vue';

defineProps({
    blog:{
        type: Object,
        required: true
    }
})

const authorFullname = computed(() => {
    return (author) => author.firstname + ' ' + author.lastname;
});
</script>

