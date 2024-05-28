import {defineStore} from 'pinia'
import { computed, ref } from 'vue'

import axios from 'axios'

export const useTagStore = defineStore('tags', () =>{
    const tags = ref([])
    const viewedTag = ref({})

    const tagLists = computed(() => tags.value)

    // fetch all tags 
    const getAllTags = async () => {
        await axios.get('/api/tags').then(response => {
            tags.value = response.data.data
        }).catch((error) => {
            console.error(error)
            tags.value = []
        })
    }
    /** 
     * fetch tags vie search
     */
    const getTags = async(query) => {
        await axios.get(`/api/tags?query=${query}`).then((response) =>{
            tags.value = response.data.data
        }).catch(() => {
            tags.value = []
        })
    }

    // load tag by page req
    const getTag = async (tag) => {
        await axios.get(`/api/tag?tag_searched=${tag.slug}`)
        .then(response => {
            viewedTag.value = response.data.data
        })
    }

    return{
        tags,
        tagLists,
        getTags,
        getAllTags,
        getTag,
    }
})