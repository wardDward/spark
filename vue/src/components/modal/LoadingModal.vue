<template>
    <Teleport to="#modal">
        <div class="overlay bg-black/50 fixed inset-0"></div>
        <div
            class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-md w-[500px] flex justify-center items-center flex-col h-[150px] z-50">
            <svg class="animate-spin h-12 w-12 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                </path>
            </svg>
            <span class="text-center ml-[7px] my-3 text-md  animate-pulse">{{ message }}</span>
        </div>
    </Teleport>
</template>

<script setup>

defineProps({
    message: {
        required: true,
        type: String
    }
})

</script>

