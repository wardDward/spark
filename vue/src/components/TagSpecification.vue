<template>
  <div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useTagStore } from '../stores/tags.js'
import { useRoute } from 'vue-router'

const tagStore = useTagStore()

const route = useRoute()

console.log(route.params.slug);

onMounted(async () => {
  await tagStore.getTag(route.params.slug)
})

</script>
