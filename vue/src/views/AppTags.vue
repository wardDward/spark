<template>
    <main class="w-full h-screen" id="container">
        <div class="flex flex-col p-[10px]" id="main">
            <h1 class="text-2xl font-normal">Tags</h1>
            <p class="text-sm lg:text-md my-3">A tag is a keyword or label that categorizes your question with other,
                similar questions. Using the right tags makes it easier for others to find and answer your question.</p>
            <div class="flex flex-wrap justify-between items-center my-3">
                <div class="w-full sm:w-[200px] lg:w-[300px]">
                    <input type="text" class="w-full border border-gray-400 rounded-sm p-2 text-sm"
                        placeholder="Filter by tag name">
                </div>
                <div class="my-3 sm:my-0 flex flex-row items-center w-[200px] justify-center  rounded-md">
                    <button class="p-2 text-center border border-gray-300 rounded-l-md">Popular</button>
                    <button class=" p-2 text-center border border-gray-300">Name</button>
                    <button class="p-2 text-center border border-gray-300 rounded-r-md">New</button>
                </div>
            </div>
            <section class="grid grid-cols-6 gap-3">
                <div 
                    class="col-span-6 md:col-span-3 flex flex-col p-2 border border-gray-300 rounded-md"
                    v-for="tag in tagStore.tagLists" :key="tag.id">
                    <router-link :to="{
                     name: 'TagName', 
                    params: { slug: tag.slug } 
                    }">
                        <TagComponent :tag="tag" />
                    </router-link>
                </div>
            </section>
        </div>
    </main>
</template>

<script setup>
import { onMounted } from 'vue';
import { useTagStore } from '../stores/tags'

import TagComponent from '../components/TagComponent.vue'

const tagStore = useTagStore()

onMounted(() => {
    tagStore.getAllTags()
})

</script>

