<template>
  <div class="min-h-full flex flex-col justify-center items-center mainContainer" ref="elScrollContainer"
    id="main_container">
    <BlogCard v-for="blog in blogStore.blogLists" :key="blog.id" :blog="blog" />
    <div ref="sentinel" style="height: 1px;" id="sentinel"></div>
  </div>
</template>
  
<script setup>

import { ref, onMounted, onUnmounted } from 'vue';
import { useBlogStore } from '../stores/blog';
import BlogCard from '../components/BlogCard.vue';

const elScrollContainer = ref(null);
const sentinel = ref(null);
const blogStore = useBlogStore();



let observer = null;
const callback = (entries) => {
  if (entries[0].target.id === 'sentinel') {
    if (!entries[0].isIntersecting) return
    blogStore.loadMoreOnScroll()
  }
}

observer = new IntersectionObserver(callback, {
  threshold: 0.02
})


onMounted(() => {
  observer.observe(sentinel.value)
})

onUnmounted(() => {
  observer.disconnect()
  console.log('ok');
})


</script>
  