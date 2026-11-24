<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import BranchSidebar from './components/BranchSidebar.vue'
import BranchPager from './components/BranchPager.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #sidebar-nav-after>
      <BranchSidebar />
    </template>
    <template #doc-after>
      <BranchPager />
    </template>
  </Layout>
</template>
