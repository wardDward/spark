<template>
    <div class="sidebar h-full fixed left-0 z-10 overflow-x-hidden bg-gray-900 text-white flex flex-col" id="sidebar">
        <div @click.prevent="toggleBar" class="my-4 cursor-pointer hover:bg-gray-700 w-full p-2 flex justify-center">
            <ChevronDoubleRightIcon class="w-6 h-6" v-if="!toggle" />
            <div class="inline-flex justify-start items-center w-full" v-if="toggle">
                <XMarkIcon class="w-6 h-6 mr-3" />
                <span class="text-lg">Close</span>
            </div>
        </div>
        <div class="flex items-center justify-center flex-col w-full my-8 transition-all duration-300">
            <router-link v-for="link in links" :key="link.id" :to="link.path"
                class="w-full p-2 my-2 inline-flex items-center transition-all duration-300 hover:bg-slate-50/50"
                :class="[toggle ? 'justify-start space-x-3' : 'justify-center']">
                <!-- Use dynamic icon class -->
                <component :is="link.icon" class="w-6 h-6" />
                <span v-if="toggle">{{ link.name }}</span>
            </router-link>
        </div>
    </div>
</template>

<script setup>
import { ArrowTrendingUpIcon, BookmarkIcon, ChatBubbleLeftRightIcon, ChevronDoubleRightIcon, HomeIcon, TagIcon, XMarkIcon } from '@heroicons/vue/24/outline'

defineProps({
    toggle: {
        required: true,
        type: Boolean
    }
})

const emit = defineEmits(['toggleSidebar'])

function toggleBar() {
    emit('toggleSidebar')
}

const links = [
    { id: 1, path: { name: 'AppFeed' }, name: 'Home', icon: HomeIcon },
    { id: 2, path: { name: 'AppMessage' }, name: 'Message', icon: ChatBubbleLeftRightIcon },
    { id: 3, path: { name: 'AppTrending' }, name: 'Trending', icon: ArrowTrendingUpIcon },
    { id: 4, path: { name: 'AppTags' }, name: 'Tags', icon: TagIcon },
    { id: 5, path: { name: 'AppBookmark' }, name: 'Bookmark', icon: BookmarkIcon }
];


</script>

<style scoped>
.sidebar {
    transition: 0.5s;
}
a.router-link-active {
    color: orangered;
    border: 5px solid orangered;
    border-right: none;
    border-top: none;
    border-bottom: none;
    border-radius: 5px;
}

</style>