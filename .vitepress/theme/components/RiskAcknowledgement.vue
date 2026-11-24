<script setup lang="ts">
import { ref } from 'vue'
import { withBase } from 'vitepress'

const acknowledged = ref(false)

let name = 'Disconnecting from Internet'
let url = withBase('/guide/disconnecting-from-internet/')

</script>

<template>
  <div class="risk-acknowledgement">
    <label class="risk-label">
      <input v-model="acknowledged" type="checkbox">
      <span>I understand the risks and choose to proceed</span>
    </label>

    <nav class="pager" aria-label="Page navigation">
      <a v-if="acknowledged" class="pager-link" :href="url">
        <span class="desc">Next page</span>
        <span class="title">{{ name }}</span>
      </a>
      <span v-else class="pager-link disabled" role="link" aria-disabled="true">
        <span class="desc">Next page</span>
        <span class="title">{{ name }}</span>
      </span>
    </nav>
  </div>
</template>

<style scoped>
.risk-acknowledgement {
  margin-top: 32px;
}

.risk-label {
  display: flex;
  align-items: baseline;
  gap: 8px;
  cursor: pointer;
}

.risk-label input {
  accent-color: var(--vp-c-brand-1);
}

.pager {
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid var(--vp-c-divider);
  margin-top: 32px;
  padding-top: 24px;
}

.pager-link {
  display: block;
  width: 100%;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 11px 16px 13px;
  text-align: right;
  text-decoration: none;
}

@media (min-width: 640px) {
  .pager-link {
    width: calc(50% - 8px);
  }
}

a.pager-link:hover {
  border-color: var(--vp-c-brand-1);
}

.disabled {
  opacity: 0.5;
}

.desc,
.title {
  display: block;
  line-height: 20px;
  font-weight: 500;
}

.desc {
  color: var(--vp-c-text-2);
  font-size: 12px;
}

.title {
  color: var(--vp-c-brand-1);
  font-size: 14px;
}
</style>
