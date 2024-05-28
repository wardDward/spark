<template>
    <div class="flex justify-evenly items-center">
        <div class="hover:text-orange-500 cursor-pointer">
            <HandThumbUpIcon class="w-5 h-5" />
        </div>
        <div class="hover:text-orange-500 cursor-pointer">
            <ChatBubbleBottomCenterIcon class="w-5 h-5" />
        </div>
        <div class="hover:text-orange-500 cursor-pointer">
            <ShareIcon class="w-5 h-5" />
        </div>
    </div>
</template>

<script setup>
import { HandThumbUpIcon, ChatBubbleBottomCenterIcon, ShareIcon } from '@heroicons/vue/24/outline';
</script>

<style lang="scss" scoped></style>