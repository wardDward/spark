<template>
    <div class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-[9999] flex justify-center items-center">
        <div class="bg-white h-36 w-full  md:w-1/3 p-2 shadow-2xl border border-gray-300 rounded-2xl flex items-center flex-col">
            <p class="text-md md:text-lg text-gray-700 text-center h-3/4 flex justify-center items-center font-bold">
                {{ message }}
            </p>
            <div class="inline-flex justify-center md:justify-end items-center md:items-end w-full space-x-3">
                <button role="button" type="button" class="text-white text-md font-semibold bg-green-500 py-1 px-7 rounded-md" @click.prevent="confirmButton">Yes</button>
                <button role="button" type="button" class="text-white text-md font-semibold bg-red-500 py-1 px-7 rounded-md" @click.prevent="onRemoveModal">Cancel</button>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    message: {
        required: true,
        type:String
    }
})

const emit = defineEmits(['confirmButton', 'onRemoveModal'])

function confirmButton(){
    emit('confirmButton')
}

function onRemoveModal(){
    emit('onRemoveModal')
}
</script>

