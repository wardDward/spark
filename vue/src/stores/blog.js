import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

import axios from 'axios'

export const useBlogStore = defineStore('blogs', () => {
  const blogs = ref([])
  const errorMessage = ref([])
  const page = ref(1)
  const hasMoreBlogs = ref(true)

  const notification = ref({
    show: false,
    message: null,
    type: null
  })

  const blogLists = computed(() => blogs.value)

  /**
   * fetching blogs
   */
  const getBlogs = async () => {
    await axios
      .get(`/api/blogs?page=${page.value}`)
      .then((response) => {
        const fetchedBlogs = response.data.data
        if (fetchedBlogs.length === 0) {
          hasMoreBlogs.value = false
        } else {
          blogs.value.push(...fetchedBlogs)
          page.value++
          if (fetchedBlogs.length < 5) {
            hasMoreBlogs.value = false
          }
        }
      })
      .catch(() => {
        blogs.value = []
      })
  }

  /**
   * load more data on scroll
   */
  const loadMoreOnScroll = async () => {
    if (hasMoreBlogs.value) {
      await getBlogs()

    }
  }

  /**
   * storing blog
   * @param {Object} blog
   */
  const publishBlogs = async (blog) => {
    await axios
      .post('/api/blogs', blog)
      .then(() => {
        showNotification('messageSuccess', 'success')
      })
      .catch((error) => {
        errorMessage.value = error.response.data.errors
      })
  }

  function showNotification(message, type) {
    notification.value = {
      show: true,
      type,
      message
    }
    setTimeout(() => {
      notification.value.show = false
      notification.value.message = null
      notification.value.type = null
    }, 3000)
  }

  return {
    blogs,
    blogLists,
    errorMessage,
    notification,
    publishBlogs,
    getBlogs,
    loadMoreOnScroll
  }
})
