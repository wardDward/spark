<template>
    <div class="flex flex-col my-6 w-full">
        <label for="tags" class="cursor-pointer font-semibold">Blog Tags</label>
        <p class="text-xs text-gray-700 my-2 ml-1">Press Enter or comma to add the tag</p>
        <input type="text" name="tag" id="tag" v-model="inputField" autocomplete="off"
            class="w-full md:w-2/3 border border-gray-600 border-t-0 border-x-0 py-4 px-2 font-semibold outline-none" />
        <ul class="bg-slate-100 w-full md:w-2/3 relative z-[99999]" ref="resultContainer">
        </ul>
        <p class="text-xs text-gray-700 my-2 ml-1">Please choose a tag related to your blog, so it can be
            filtered properly.</p>
    </div>
    <div v-if="filteredTags.length !== 0"
        class="border-t-2 border-gray-400 w-full md:w-1/2 lg:w-[20%] relative mb-4 bg-slate-200/50 p-2 rounded-b-lg">
        <p class="text-md font-bold tracking-wider text-gray-700 mb-2">Choose Tags</p>
        <div v-for="tag in filteredTags" :key="tag.id" class="flex flex-col">
            <div class="cursor-pointer text-base p-2 hover:bg-slate-200 rounded-md" @click.prevent="addTag(tag)">
                {{ tag.name }}
            </div>
        </div>
    </div>
    <div class="space-y-3">
        <h2 class="font-semibold">Related Tags</h2>
        <div class="flex flex-row flex-wrap space-x-4">
            <div v-for="item in chooseTag" :key="item.id"
                class="mt-2 w-[100px] text-center rounded-md p-1 md:p-2 bg-gray-300/40 capitalize relative "
                :style="{ color: item.color }">
                <div class="absolute top-[1px] right-[4px] p-[2px] hover:bg-gray-300 rounded-full cursor-pointer"
                    @click.prevent="removeChosenTag(item)">
                    <MinusSmallIcon class="w-3 h-3 text-black" />
                </div>
                <p class="text-[14px] font-semibold md:font-bold">{{ item.name }} {{item.id}}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue';
import { useTagStore } from '../stores/tags'
import { MinusSmallIcon } from '@heroicons/vue/24/solid'

import _ from 'lodash'

const tagStore = useTagStore()

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const resultContainer = ref(null);
const chooseTag = ref([])
const inputField = ref('');

const addTag = (tag) => {
    chooseTag.value = [...props.modelValue, tag]
    emit('update:modelValue', chooseTag.value);
}

const removeChosenTag = (tag) => {
// if you want to use === into this approach u need it increment by 1 to be able to match the ids of tag P>S using filter to be able to update the modelValue of the parent
//   const updatedTags = chooseTag.value.filter(element => element.id + 1 === tag.id);
   const updatedTags = chooseTag.value.filter(element => element.id !== tag.id);
  chooseTag.value = updatedTags;
  emit('update:modelValue', chooseTag.value);
};

const filteredTags = computed(() => {
    return tagStore.tagLists.filter(item => {
        return item.name.includes(inputField.value)
    })
})

watch(inputField, _.debounce(async (newVal) => {
    if (newVal) {
        await tagStore.getTags(inputField.value)
    }
    else {
        tagStore.tags = []
    }
}, 300))




</script>
