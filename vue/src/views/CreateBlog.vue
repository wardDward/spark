<template>
    <article class="w-full p-5 md:p-10 lg:p-[70px] flex flex-col">
        <div>
            <div>
                <h2 class="text-lg font-semibold">Your Blog Achieve</h2>
            </div>
            <div class="flex flex-row flex-wrap my-3 ml-3">
                <div class="inline-flex items-center space-x-1 ml-4">
                    <span class="text-base text-gray-700 font-semibold">Blog title</span>
                    <CheckBadgeIcon class="h-5 w-5 fill-current text-orange-600" />
                </div>
                <div class="inline-flex items-center space-x-1 ml-4">
                    <span class="text-base text-gray-700 font-semibold">Blog Caption</span>
                    <CheckBadgeIcon class="h-5 w-5 fill-current text-orange-600" />
                </div>
                <div class="inline-flex items-center space-x-1 ml-4">
                    <span class="text-base text-gray-700 font-semibold">Media (image,video) <span
                            class="text-sm text-gray-600">optional</span></span>
                    <CheckBadgeIcon class="h-5 w-5 fill-current text-orange-600" />
                </div>
            </div>
        </div>
        <div class="flex flex-col my-5">
            <h2 class="text-[20px] font-bold">Blog Details</h2>
            <p class="text-gray-500 text-sm my-[10px]">Complete your blog details, to make your fans happy.</p>
            <hr class="my-5 h-[1px] border-gray-400">
            <form action="" class="w-full" @submit.prevent="publishBlog">
                <div class="flex flex-col">
                    <label for="media"
                        class="cursor-pointer py-3 px-2 border border-gray-400 w-[150px] text-sm rounded-lg text-center text-orange-600 font-semibold">Add
                        Image or video</label>
                    <input type="file" name="media" id="media" class="hidden">
                </div>
                <TagForm v-model="blogData.tags" />
                <div class="flex flex-col my-6 w-full">
                    <label for="title" class="cursor-pointer font-semibold">Blog Title</label>
                    <input v-model="blogData.title" type="text"
                        class="w-full md:w-2/3 border border-gray-600 border-t-0 border-x-0 text-lg py-4 px-2 font-bold outline-none"
                        placeholder="Blog Title..">
                    <p class="text-red-500 text-sm" v-if="blogStore.errorMessage.title">{{ blogStore.errorMessage.title[0]
                    }}
                    </p>
                </div>
                <div class="flex flex-col my-6 w-full">
                    <label for="caption" class="cursor-pointer font-semibold">Blog Caption</label>
                    <textarea v-model="blogData.body"
                        class="w-full md:w-2/3 border border-gray-600 border-t-0 border-x-0 text-lg p-2 font-bold outline-none h-12 resize-none"
                        placeholder="Blog caption.."></textarea>
                    <p class="text-xs text-gray-700 my-2 ml-1">
                        Caption is optional
                    </p>
                </div>
                <div class="w-full flex justify-center md:justify-end items-center mt-[80px] space-x-6">
                    <button type="button" role="button"
                        class="text-sm font-semibold border border-gray-500 rounded-lg py-3 px-10 hover:bg-slate-300"
                        @click.prevent="cancelButton">Cancel</button>
                    <button type="submit"
                        class="text-sm py-3 px-10 rounded-lg bg-orange-500 text-white hover:bg-orange-700">Publish</button>
                </div>
            </form>
        </div>
        <ConfirmationModal :message="message" v-if="showModal" @confirmButton="confirmButton"
            @onRemoveModal="onRemoveModal" />
        <NotificationModal v-if="blogStore.notification.show" />
    </article>
</template>

<script setup>
import { defineAsyncComponent, onBeforeMount, onMounted, reactive, ref, watch } from 'vue';
import { useBlogStore } from '../stores/blog'
import { CheckBadgeIcon } from '@heroicons/vue/24/solid'
import { useRouter } from 'vue-router'

import ConfirmationModal from '../components/modal/ConfirmationModal.vue';
import TagForm from '../components/TagForm.vue';

const router = useRouter()
const NotificationModal = defineAsyncComponent(() =>
    import('../components/modal/notificationModal.vue')
)

const blogStore = useBlogStore()

const message = ref('Are you sure you wanted to leave the page ?')
const showModal = ref(false)
const isFormDirty = ref(false)
const blogData = reactive({
    title: '',
    body: '',
    tags: []
})

watch(blogData, () => {
    if (blogData.title !== '' || blogData.body !== '') {
        isFormDirty.value = true
    } else {
        isFormDirty.value = false
    }
})

const cancelButton = () => {
    if (isFormDirty.value) {
        showModal.value = true
    } else {
        router.push({ name: 'AppFeed' })
    }
}

const confirmButton = () => {
    showModal.value = false
    router.push({ name: 'AppFeed' })
}

const onRemoveModal = () => {
    showModal.value = false
}

const handleBeforeUnlaod = (event) => {
    if (isFormDirty.value) {
        event.preventDefault()
        event.returnValue = ''
    } else {
        return
    }
}

const setupBeforeUnload = () => {
    window.addEventListener('beforeunload', handleBeforeUnlaod)
}

const removeBeforeUnload = () => {
    window.addEventListener('beforeunload', handleBeforeUnlaod)
}

onMounted(() => {
    setupBeforeUnload()
})

onBeforeMount(() => {
    removeBeforeUnload()
    blogData.title = ''
    blogData.body = ''
})

const publishBlog = () => {
    try {
        blogStore.publishBlogs(blogData)
        blogData.title = ''
        blogData.body = ''
        blogData.tags = []
    }catch(error){
        console.error(error)
    }
};


</script>

