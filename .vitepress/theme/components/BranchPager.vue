<script setup lang="ts">
import { computed, ref, watch } from 'vue'
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

function updateBranch(path: string) {
  const routeBranch = detectBranch(path)
  if (routeBranch) {
    branch.value = routeBranch
    setBranchCookie(routeBranch)
  } else if (
    path.includes('/guide/get-started/') ||
    path.includes('/guide/disconnecting-from-internet/') ||
    path.includes('/guide/checking-firmware-version/') ||
    path.includes('/guide/choosing-your-entrypoint/')
  ) {
    branch.value = null
  } else {
    branch.value = readBranchCookie()
  }
}

watch(() => route.path, updateBranch, { immediate: true })

const pages = computed(() => branch.value ? branchPages[branch.value] : [])

const currentIndex = computed(() =>
  pages.value.findIndex((page) => route.path === page.link || route.path.startsWith(page.link))
)

const prev = computed(() =>
  currentIndex.value > 0 ? pages.value[currentIndex.value - 1] : null
)
const next = computed(() =>
  currentIndex.value >= 0 && currentIndex.value < pages.value.length - 1
    ? pages.value[currentIndex.value + 1]
    : null
)
</script>

<template>
  <nav v-if="prev || next" class="prev-next branch-pager" aria-label="Guide branch pager">
    <div class="pager">
      <a v-if="prev" class="pager-link prev" :href="prev.link">
        <span class="desc">Previous page</span>
        <span class="title">{{ prev.text }}</span>
      </a>
    </div>
    <div class="pager">
      <a v-if="next" class="pager-link next" :href="next.link">
        <span class="desc">Next page</span>
        <span class="title">{{ next.text }}</span>
      </a>
    </div>
  </nav>
</template>
