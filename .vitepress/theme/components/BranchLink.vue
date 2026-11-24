<script setup lang="ts">
defineProps<{
  branch: 'smilebasic' | 'civswitch'
  to: string
}>()

function selectBranch(branch: 'smilebasic' | 'civswitch') {
  document.cookie = `guide_branch=${branch}; path=/; max-age=31536000; samesite=lax`
}
</script>

<template>
  <a :href="to" @click="selectBranch(branch)">
    <slot />
  </a>
</template>
