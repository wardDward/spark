<template>
    <a href="#" class="bg-blue-500/30 text-center p-1 text-xs rounded-sm text-blue-500 max-w-[60px]">
        {{ tag.name }}
    </a>
    <p class="my-2 text-sm text-gray-700">{{ tag.decription }}</p>
    <div class="my-2 flex justify-between">
        <p class="text-xs text-gray-500">100 questions</p>
        <p class="text-xs text-gray-500">2555 ask today, 500 this week</p>
    </div>
</template>

<script setup>

defineProps({
    tag: {
        required: true,
        type: Object
    }
})
</script>

