<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vitepress'
import {
  branchPages,
  detectBranch,
  readBranchCookie,
  setBranchCookie,
  type Branch
} from '../branchRoutes'

const route = useRoute()
const branch = ref<Branch | null>(null)

const items = computed(() => {
  if (branch.value) return branchPages[branch.value]
  return []
})

function setBranch(value: Branch) {
  branch.value = value
  setBranchCookie(value)
}

function isActive(link: string) {
  return route.path === link || route.path.startsWith(link)
}

watch(() => route.path, (path) => {
  const routeBranch = detectBranch(path)
  if (routeBranch) setBranch(routeBranch)
  else if (
    path.includes('/guide/get-started/') ||
    path.includes('/guide/disconnecting-from-internet/') ||
    path.includes('/guide/checking-firmware-version/') ||
    path.includes('/guide/updating-to-23.0.1/') ||
    path.includes('/guide/choosing-your-entrypoint/')
  ) {
    branch.value = null
  }
  else if (
    path.includes('/guide/get-started/') ||
    path.includes('/guide/disconnecting-from-internet/') ||
    path.includes('/guide/checking-firmware-version/') ||
    path.includes('/guide/updating-to-23.0.1/') ||
    path.includes('/guide/choosing-your-entrypoint/')
  ) {
    branch.value = null
  }
  else if (
    path.includes('/guide/using-90dns-on-pico-1-2-w/') ||
    path.includes('/guide/using-kaihen/')
  ) {
    const saved = readBranchCookie()
    if (saved) branch.value = saved
  }
})

onMounted(() => {
  if (route.path.includes('smilebasic')) setBranch('smilebasic')
  else if (route.path.includes('civswitch')) setBranch('civswitch')
  else if (
    route.path.includes('/guide/get-started/') ||
    route.path.includes('/guide/disconnecting-from-internet/') ||
    route.path.includes('/guide/checking-firmware-version/') ||
    route.path.includes('/guide/choosing-your-entrypoint/')
  ) {
    branch.value = null
  }
  else {
    const saved = readCookie()
    if (saved) branch.value = saved
  }
})
</script>

<template>
  <div v-if="branch" class="branch-sidebar">
    <div
      v-for="item in items"
      :key="item.link"
      class="VPSidebarItem level-1 is-link"
      :class="{ 'is-active': isActive(item.link) }"
    >
      <div class="item">
        <div class="indicator" />
        <a class="link" :href="item.link">
          <p class="text">{{ item.text }}</p>
        </a>
      </div>
    </div>
  </div>
</template>
