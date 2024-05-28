<template>
    <Teleport to="#modal">
        <div class="overlay bg-black/50 fixed inset-0 create_modal"></div>
        <div class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-sm w-full md:w-2/5 flex  flex-col z-50 create_modal"
            id="">
            <div class="flex justify-end">
                <div class="p-2 cursor-pointer hover:bg-slate-100 rounded-full hover:text-red-500"
                    @click.prevent="closeModal">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
            </div>
            <div class="flex flex-col items-center justify-center my-2">
                <h1 class="text-center italic text-gray-500">"Blog is interesting when shown in others"</h1>
                <form action="" class="w-full">
                    <div class="my-2 flex flex-col">
                        <label for="title" class="text-gray-600 font-medium tracking-wide leading-8 ml-1">Title</label>
                        <input type="text" name="title" placeholder="Blog Title"
                            class="border border-b-gray-400 border-t-0 border-x-0 outline-none  p-2 font-bold">
                    </div>
                    <div class="w-full">
                        <textarea name="body" id="body" placeholder="Blog caption"
                            class="w-full resize-none border border-gray-400 h-[150px]" ref="elTextarea">
                        </textarea>
                    </div>
                    <div class="flex justify-end items-center">
                        <div>
                            <label for="media"
                                class="text-white  bg-indigo-500 py-[5px] px-3 rounded-md mr-3 cursor-pointer">Add
                                Media</label>
                            <input type="file" name="media" id="media" class="hidden">
                        </div>
                        <button type="submit"
                            class="text-white p-1 w-[100px] bg-orange-500 rounded hover:bg-orange-600">Publish</button>
                    </div>
                </form>
            </div>
        </div>
    </Teleport>
</template>

<script setup>

const emit = defineEmits(['toggleModal'])

function closeModal() {
    emit('toggleModal')
}


</script>

<style scoped>
.create_modal {
    transition: 0.5s;
}
</style>